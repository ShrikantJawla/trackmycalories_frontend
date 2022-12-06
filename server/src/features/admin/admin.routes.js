const { Router } = require('express');
const Users = require('../auth/auth.model')
const Products = require('../shopProducts/shopProducts.model')
const PurchasedItems = require('../purchasedList/purchasedList.model')


const adminCheckMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    const [email, userId, password] = token.split('_#_');
    try {
        const admin = await Users.findOne({ email, password, role: 'admin' });
        if (admin) {
            req.userId = admin._id;
            next();
        } else {
            res.status(401).send('not authorized');
        }
    } catch (error) {
        console.log(error);
    }
}



const router = Router();
router.use(adminCheckMiddleware);


//Dashboard related routes

router.get('/orders-details', async (req, res) => {
    try {
        const allItems = await PurchasedItems.find({}).populate(['product']);

        //Finding pending orders and delevered orders
        let pendingOrders = [];
        let deleveredOrders = [];
        allItems.forEach(order => {
            if (new Date(order.dateOfDelevery) - new Date(currentTime()) > 0) {
                pendingOrders.push(order);
            } else {
                deleveredOrders.push(order);
            }
        })

        // Finding total revenue
        let revenue = allItems.reduce((acc, ele) =>
            acc + Number(ele.product["woocommerce-Price-amount 2"].replace(',', '')), 0)

        let allOrdersDetails = {
            pendingOrders,
            deleveredOrders,
            totalRevenue: revenue
        }
        res.send(allOrdersDetails)
    } catch (error) {
        console.log(error.message);
    }
})


//Products related routes

router.get('/', async (req, res) => {
    const { q, page = 1, limit = 15, sortByRating, filterByCategory, filterByQuantity } = req.query;
    try {
        let allProducts = await Products.find({}).skip((page - 1) * limit).limit(limit);
        const regex = new RegExp(q, 'i');
        if (q) {
            allProducts = await Products.find({ name: regex }).skip((page - 1) * limit).limit(limit)
        }
        if (sortByRating) {
            if (q) {
                allProducts = await Products.find({ name: regex }).limit(limit).skip((page - 1) * limit)
            } else {
                allProducts = await Products.find({}).limit(limit).skip((page - 1) * limit)
            }
            if (sort === 'asc') {
                var newProductList = allProducts.sort(
                    (a, b) =>
                        +a['widget-lite-count'].replace('(', '').replace(')', '') -
                        Number(b['widget-lite-count'].replace('(', '').replace(')', '')),
                )
            } else {
                var newProductList = allProducts.sort(
                    (a, b) =>
                        +b['widget-lite-count'].replace('(', '').replace(')', '') -
                        Number(a['widget-lite-count'].replace('(', '').replace(')', '')),
                )
            }
            return res.send(newProductList)
        }
        if (filterByCategory) {
            if (q) {
                allProducts = await Products.find({ name: regex, category: filterByCategory }).limit(limit).skip((page - 1) * limit)
            } else {
                allProducts = await Products.find({ category: filterByCategory }).limit(limit).skip((page - 1) * limit)
            }
        }
        if (filterByQuantity) {
            if (q) {
                if (filterByQuantity === 'asc') {
                    allProducts = await Products.find({ name: regex }).sort({ Quantity: 1 }).skip((page - 1) * limit).limit(limit)
                } else {
                    allProducts = await Products.find({ name: regex }).sort({ Quantity: -1 }).skip((page - 1) * limit).limit(limit)
                }
            } else {
                if (filterByQuantity === 'asc') {
                    allProducts = await Products.find({}).sort({ Quantity: 1 }).skip((page - 1) * limit).limit(limit)
                } else {
                    allProducts = await Products.find({}).sort({ Quantity: -1 }).skip((page - 1) * limit).limit(limit)
                }
            }
        }
        res.send(allProducts)
    } catch (error) {
        console.log(error.message);
    }
})

router.post('/add-newproduct', async (req, res) => {
    const { name, image, totalPrice, discountPercentage, afterDiscountPrice, quantity, category } = req.body;
    try {
        const existingProduct = await Products.findOne({ name });
        if (!existingProduct) {
            await Products.create({
                onsale: `-${discountPercentage}%`,
                "attachment-woocommerce_thumbnail src": image,
                name,
                "widget-lite-score-detailed": '5 stars',
                "widget-lite-score-detailed 2": '0%',
                "widget-lite-score-detailed 3": '4 stars',
                "widget-lite-score-detailed 4": '0%',
                "widget-lite-score-detailed 5": '3 stars',
                "widget-lite-score-detailed 6": '0%',
                "widget-lite-score-detailed 7": '2 stars',
                "widget-lite-score-detailed 8": '0%',
                "widget-lite-score-detailed 9": '1 stars',
                "widget-lite-score-detailed 10": '0%',
                "widget-lite-count": '(0)',
                "woocommerce-Price-amount": `${totalPrice}`,
                "woocommerce-Price-amount 2": `${afterDiscountPrice}`,
                "category": category,
                Quantity: quantity,
            })
        } else {
            res.send('product with this name already exists!')
        }
    } catch (error) {
        console.log(error.message);
    }
})

//Categories page related routes

router.get('/filterOrders', async (req, res) => {
    const { paymentMethod, monthOfOrder, monthOfDelevery, status, amount, page = 1, limit = 15 } = req.query;
    let items = await PurchasedItems.find({}).populate(['product']).limit(limit).skip((page - 1) * limit);
    try {
        if (paymentMethod) {
            items = await PurchasedItems.find({ modeOfPayment: paymentMethod }).limit(limit).skip((page - 1) * limit);
        }
        if (monthOfOrder) {
            if (Number(monthOfOrder) > 12 || Number(monthOfOrder) < 1) {
                return res.send('monthOfOrder should be a valid number between 1 to 12 including both the numbers')
            }
            items = items.filter(ele => {
                let [year, month, date] = ele.dateOfPurchase.split('T')[0].split('-')
                if (month == monthOfOrder) return ele;
            })
        }
        if (monthOfDelevery) {
            items = items.filter(ele => {
                let [year, month, date] = ele.dateOfDelevery.split('T')[0].split('-')
                if (month == monthOfDelevery) return ele;
            })
        }
        if (status) {
            if (status === 'pending') {
                items = items.filter(order => (new Date(order.dateOfDelevery) - new Date(currentTime()) > 0))
            } else if (status === 'delevered') {
                items = items.filter(order => (new Date(order.dateOfDelevery) - new Date(currentTime()) <= 0))
            } else {
                return res.send('wrong query!')
            }
        }
        if (amount) {
            if (amount === 'asc') {
                items.sort((a, b) => +a.product["woocommerce-Price-amount 2"].replace(',', '')
                    - Number(b.product["woocommerce-Price-amount 2"].replace(',', '')))
            } else if (amount === 'desc') {
                items.sort((a, b) => +b.product["woocommerce-Price-amount 2"].replace(',', '')
                    - Number(a.product["woocommerce-Price-amount 2"].replace(',', '')))
            } else {
                return res.send('wrong query!')
            }
        }
        res.send(items)
    } catch (error) {
        console.log(error);
    }
})





module.exports = router



function currentTime() {
    let time = new Date()
    return `${time.getFullYear()}-${time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1
        }-${time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}T${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
        }:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`
}