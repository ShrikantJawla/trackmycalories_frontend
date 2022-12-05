const { model, Schema } = require('mongoose')


const cartItemsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'shopproduct',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})


module.exports = CartItems = model('cartItem', cartItemsSchema);