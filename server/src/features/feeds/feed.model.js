const { Schema, model } = require('mongoose')



const feedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    likes: [String],
    disLikes: [String],
    comments: [
        {
            comment: String,
            reply: String,
        }
    ]
}, {
    timestamps: true,
})


module.exports = Feeds = model('feed', feedSchema);