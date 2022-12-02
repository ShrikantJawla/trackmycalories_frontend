const express = require("express");
const Users = require('./auth.model')
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const jwt = require('jsonwebtoken')


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './upload/Images')
    },
    filename: function (req, file, cb) {
        const suffix = Date.now() + '-' + Math.round(Math.random()) * 1E9;
        return cb(null, file.fieldname + '-' + suffix + path.extname(file.originalname));
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 5000000,
        files: 1,
    }
})

const errhandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.send(err.message)
    }
}

const authMiddleWare = async (req, res, next) => {
    if (!req.headers.token) return res.send({ error: "token is required!" })
    const [email, userId, password] = req.headers.token.split('_#_');
    try {
        let user = await Users.findOne({ email });
        if (user) {
            if (user.password === password) {
                req.userId = userId;
                next();
            } else {
                res.status(401).send({ error: "Not authorised to perform this action!" });
            }
        } else {
            res.status(404).send({ error: 'User with is email:' + email + 'not exist!' });
        }
    } catch (error) {
        res.status(401).send(error)
    }
}



const app = express.Router();
app.use(errhandler)


/* This will serve the static folder */
app.use('/profile', express.static('./upload/Images'))

/* to upload the image and delete old file from server */

app.post('/update-avatar', authMiddleWare, upload.single('avatar'), async (req, res) => {
    if (req.file === undefined) {
        return res.send({
            Response: 0,
            message: 'Please upload a file'
        })
    }
    let img = req.file.filename;
    try {
        let oldUser = await Users.findOne({ _id: req.userId })
        let oldImg = oldUser.img;
        if (oldImg) fs.unlinkSync(`./upload/Images/${oldImg}`)
        await Users.updateOne({ _id: req.userId }, { $set: { img } })
        let updatedUser = await Users.findOne({ _id: req.userId })
        res.send({
            updatedUser,
            urlSuffix: 'http://localhost:8080/user/auth/profile/<filename>'
        })
        // http://localhost:8080/user/auth/profile/<filename>
    } catch (error) {
        res.status(401).send(error)
    }
})



app.get('/getuser', async (req, res) => {
    const [email, userId, password] = req.headers.token.split('_#_')
    try {
        const existingUser = await Users.findOne({ email: email }, { password: 0 });
        if (existingUser) {
            res.send(existingUser)
        } else {
            res.status(401).send('No such user exist!')
        }
    } catch (error) {
        res.status(401).send(error)
    }
})


app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    password = String(password)
    try {
        let user = await Users.findOne({ email, password });
        if (user) {
            token = `${user.email}_#_${user._id}_#_${user.password}`
            res.send({
                token,
                user: {
                    _id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age
                }
            })
        } else {
            res.status(401).send(`User with ${email} not found`);
        }
    } catch (err) {
        res.status(404).send(err.message);
    }
});

app.post("/register", async (req, res) => {
    let { email, password, firstName, lastName, age } = req.body;
    password = String(password)
    try {
        let existingUser = await Users.findOne({ email, password });
        if (existingUser) {
            res.status(401).send('cannot create an user with existing email')
        } else {
            await Users.create({
                email, password, firstName, lastName, age
            })
            res.status(201).send('user is created');
        }
    } catch (err) {
        res.status(401).send(err.message)
    }
});

//This is to update userProfile

app.patch('/update-profile', authMiddleWare, async (req, res) => {
    try {
        let updatedUser = await Users.findOneAndUpdate({ _id: req.userId }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                occupation: req.body.occupation,
                socialLinks: {
                    facebook: req.body.socialLinks.facebook,
                    email: req.body.socialLinks.email,
                    twitter: req.body.socialLinks.twitter,
                    linkedin: req.body.socialLinks.linkedin,
                },
                measurement: {
                    height: req.body.measurement.height,
                    age: req.body.measurement.age,
                    weight: req.body.measurement.weight,
                }
            }
        }, { new: true })
        res.send(updatedUser)
    } catch (error) {
        res.status(401).send(error)
    }
})


module.exports = app;