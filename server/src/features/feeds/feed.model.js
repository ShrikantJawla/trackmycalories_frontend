const { Schema, model } = require('mongoose')


const feedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    feedText: {
        type: String
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            comment: String,
            reply: String,
        }
    ]
}, {
    timestamps: true,
})


module.exports = Feeds = model('feed', feedSchema);