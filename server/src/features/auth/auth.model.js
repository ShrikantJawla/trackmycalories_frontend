const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    occupation: { type: String },
    socialLinks: {
        facebook: String,
        email: String,
        twitter: String,
        linkedin: String,
    },
    img: { type: String },
    email: { type: String, unique: true },
    password: {
        type: String, minLength: 6
    },
    measurement: {
        height: { type: Number },
        age: { type: Number },
        weight: { type: Number },
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    }
},
    { timestamps: true }
)

module.exports = Users = mongoose.model('user', authSchema);