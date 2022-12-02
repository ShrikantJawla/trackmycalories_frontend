const { model, Schema } = require('mongoose')
const mongoose = require('mongoose')


const reviewsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shopproduct',
        required: true
    },
    comment: String,
    reviewStars: String,
    likes: [String],
    disLikes: {
        type: Array,
        default: []
    }
})

module.exports = Reviews = model('review', reviewsSchema)