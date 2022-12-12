const { Router } = require('express');
const { authMiddleWare } = require('../../middlewares/authMiddleware')
const Messages = require('./messages.model')

const router = Router()
router.use(authMiddleWare)


router.get('/get-messages', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        let messages = await Messages.find({}).limit(limit).skip((page - 1) * limit).populate(['sender', 'recipient'])
        const length = await Messages.find().size()
        res.send({
            response: 1,
            length,
            messages
        })
    } catch (error) {
        console.log(error);
    }
})


router.post('/message-send/:userId', async (req, res) => {
    const { userId: recipient } = req.params;
    const { messageText, timeOfSend } = req.body;
    try {
        await Messages.create({ recipient, sender: req.userId, messageText, timeOfSend })
        res.status(201).send({
            respose: 1,
            message: 'Message has been delevered!'
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;