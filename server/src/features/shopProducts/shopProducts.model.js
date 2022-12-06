const { model, Schema } = require('mongoose')


const ProductsSechema = new Schema({
    onsale: String,
    "image-none href": String,
    "attachment-woocommerce_thumbnail src": String,
    "name": { type: String, required: true },
    "widget-lite-container href": String,
    "widget-lite-score-detailed": String,
    "widget-lite-score-detailed 2": String,
    "widget-lite-score-detailed 3": String,
    "widget-lite-score-detailed 4": String,
    "widget-lite-score-detailed 5": String,
    "widget-lite-score-detailed 6": String,
    "widget-lite-score-detailed 7": String,
    "widget-lite-score-detailed 8": String,
    "widget-lite-score-detailed 9": String,
    "widget-lite-score-detailed 10": String,
    "widget-lite-count": String,
    "woocommerce-Price-amount": String,
    "woocommerce-Price-amount 2": String,
    "category": String,
    Quantity: Number,
})

module.exports = Products = model('shopproduct', ProductsSechema)