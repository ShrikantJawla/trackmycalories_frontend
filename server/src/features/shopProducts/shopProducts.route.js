const express = require('express');
const Products = require('./shopProducts.model')


const router = express.Router();


router.get('/', async (req, res) => {
    const { limit = 15, page = 1, category } = req.query;
    try {
        let products = await Products.find({}).limit(limit).skip((page - 1) * limit);
        if (category) {
            products = await Products.find({ category: category }).limit(limit).skip((page - 1) * limit);
        }
        res.send(products)
    } catch (error) {
        res.send(error)
    }
});

router.get('/categorywiseProducts', async (req, res) => {
    try {
        const bcaa = await Products.find({ category: 'bcaa' }).limit(4);
        const peanutButter = await Products.find({ category: 'peanutButter' }).limit(4);
        const omega3 = await Products.find({ category: 'omega3' }).limit(4);
        const protein = await Products.find({ category: 'protein' }).limit(4);
        const massgainer = await Products.find({ category: 'massgainer' }).limit(4);
        const plantprotein = await Products.find({ category: 'plantprotein' }).limit(4);
        const vitamins = await Products.find({ category: 'vitamins' }).limit(4);
        const tot = { bcaa, peanutButter, omega3, protein, massgainer, plantprotein, vitamins }
        res.send(tot)
    } catch (error) {
        res.send(error)
    }
});

router.get('/product/:id', async (req, res) => {
    try {
        let product = await Products.findOne({ _id: req.userId });
        res.send(product)
    } catch (error) {
        res.send(error)
    }
});





module.exports = router;