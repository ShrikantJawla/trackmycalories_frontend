const express = require('express');
const Users = require('../auth/auth.model')
const CartItems = require('./cart.model')
const Products = require('../shopProducts/shopProducts.model')
const PurchasedItems = require('../purchasedList/purchasedList.model')


const loggedInUserMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) return res.send('required token');
    const [email, userId, password] = req.headers.token.split('_#_');
    try {
        const user = await Users.findOne({ email, password })
        if (user) {
            req.userId = userId;
            next();
        } else {
            res.status(401).send('can not be processed!');
        }
    } catch (error) {
        res.send(error)
    }
}


const router = express.Router()
router.use(loggedInUserMiddleware);


router.get('/', async (req, res) => {
    try {
        const allCartItems = await CartItems.find({ user: req.userId }).populate(['product'])
        res.send(allCartItems)
    } catch (error) {
        res.send(error.message)
    }
})


router.post('/add-item', async (req, res) => {
    const { product, quantity } = req.body;
    try {
        //checking existing quantity
        let productInWarehouse = await Products.findById(product)
        if (productInWarehouse.Quantity < quantity) {
            return res.send('requested quantity can not more than present products quantity');
        }

        let existing = await CartItems.findOne({ product, user: req.userId });
        if (existing) {
            await CartItems.updateOne(
                { product, user: req.userId },
                { $set: { quantity: existing.quantity + quantity } })
        } else {
            await CartItems.create({ user: req.userId, product, quantity });
        }
        res.status(201).send('item has been updated in cart.')
    } catch (error) {
        res.send(error.message)
    }
});


router.patch('/update-quantity/:cartItemId', async (req, res) => {
    const { q } = req.query;
    try {
        const existing = await CartItems.findById(req.params.cartItemId);
        if (q === 'add') {
            await CartItems.updateOne(
                { _id: req.params.cartItemId },
                { $set: { quantity: existing.quantity + 1 } })
        } else if (q === 'remove') {
            await CartItems.updateOne(
                { _id: req.params.cartItemId },
                { $set: { quantity: existing.quantity - 1 } })
        }
        res.status(200).send('quantity has been updated successfully!')
    } catch (error) {
        res.send(error.message)
    }
})


router.delete('/delete-product/:cartItemId', async (req, res) => {
    try {
        const existing = await CartItems.findById(req.params.cartItemId);
        if (existing) {
            await CartItems.findByIdAndDelete(req.params.cartItemId)
        } else {
            return res.send('wrong product id')
        }
        res.status(200).send('item has been deleted successfully!')
    } catch (error) {
        res.send(error.message)
    }
})


router.patch('/purchase', async (req, res) => {
    const { modeOfPayment } = req.body;
    try {
        const items = await CartItems.find({ user: req.userId });
        for (let item of items) {
            //find the product in warehouse
            let product = await Products.findById(item.product);
            //check quantity
            if (product.Quantity > item.quantity) {
                //update the quantity of product present in warehouse
                await Products.findByIdAndUpdate(item.product,
                    { $set: { Quantity: product.Quantity - item.quantity } }
                )
                //add the purchased item in purchased collection
                await PurchasedItems.create({
                    user: req.userId,
                    product: item.product,
                    quantity: item.quantity,
                    modeOfPayment
                })
                //delete that purchased item from cart now
                await CartItems.findByIdAndDelete(item._id)
            }
        }
        res.send('thankyou for purchasing items, see you soon!')
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = router;
