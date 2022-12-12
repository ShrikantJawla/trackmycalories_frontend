const { model, Schema } = require('mongoose')



const messageSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    messageText: {
        type: String,
        required: true,
    },
    timeOfSend: String
}, {
    timestamps: true,
})


module.exports = Messages = model('message', messageSchema);