const { model, Schema } = require('mongoose')


const reviewsSechema = new Schema({
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
    comment: String,
    reviewStars: String,
    likes: [String],
    disLikes: [String],
})

module.exports = Reviews = model('review', reviewsSechema)