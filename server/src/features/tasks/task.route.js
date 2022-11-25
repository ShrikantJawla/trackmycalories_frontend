const express = require("express");
const Tasks = require('./task.model')
const Users = require('../auth/auth.model')
const UserProfile = require('../userProfile/user.model')

const verifyMiddleware = async (req, res, next) => {
    let token = req.headers.token;
    if (!token) return res.send('required token');
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
        res.send(error)
    }
}

const app = express.Router();
app.use(verifyMiddleware)

app.get('/gettasks', async (req, res) => {
    let alltasks = await Tasks.find({ user: req.userId });
    res.send(alltasks);
})

app.get('/gettask/:id', async (req, res) => {
    try {
        let existingTasks = await Tasks.findOne({ user: req.userId, _id: req.params.id });
        if (existingTasks) {
            return res.send(existingTasks);
        } else {
            return res.send('there is no task!')
        }
    } catch (error) {
        res.send(error)
    }
})
app.post('/addtask', async (req, res) => {
    try {
        let newTask = await Tasks.create({ user: req.userId, ...req.body });
        return res.send({ message: 1, newTask })
    } catch (error) {
        res.send(error)
    }
})
app.delete('/deletetask/:id', async (req, res) => {
    try {
        let existingTasks = await Tasks.findOne({ user: req.userId, _id: req.params.id });
        if (existingTasks) {
            await Tasks.deleteOne({ user: req.userId, _id: req.params.id })
            return res.send({ message: 'user is successfully deleted!' })
        } else {
            return res.send({ message: 'id is not valid!' })
        }
    } catch (error) {
        res.send(error)
    }
})
app.patch('/updatetask/:id', async (req, res) => {
    try {
        let existingTasks = await Tasks.findOne({ user: req.userId, _id: req.params.id });
        if (existingTasks) {
            let updatedTask = await Tasks.updateOne({ user: req.userId, _id: req.params.id }, { $set: { ...req.body } })
            return res.send({ message: 1, updatedTask })
        } else {
            return res.send({ message: 'id is not valid!' })
        }
    } catch (error) {
        res.send(error)
    }
})




module.exports = app;