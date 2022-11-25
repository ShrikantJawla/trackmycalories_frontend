
const { Schema, model, default: mongoose } = require('mongoose')


const tasksSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    taskName: { type: String, requied: true },
    extraInfo: String,
    status: { type: String, enum: ['notStarted', 'inprogress', 'completed'], default: 'notStarted' },
    tag: String,
    targetTime: String,
    setTime: String,
}, {
    timestamps: true,
})

module.exports = Tasks = model('task', tasksSchema);