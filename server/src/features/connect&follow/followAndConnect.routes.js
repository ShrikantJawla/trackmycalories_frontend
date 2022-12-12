const { Router } = require('express');
const Users = require('../auth/auth.model')
const { authMiddleWare } = require('../../middlewares/authMiddleware')


const router = Router()
router.use(authMiddleWare)


//Follow related routes

router.post('/follow', async (req, res) => {
    const { userId } = req.body;
    try {
        let existingFollowingId = await Users.findOne({ _id: req.userId, following: userId })
        let existingFollowedId = await Users.findOne({ _id: userId, following: req.userId })
        if (!existingFollowingId && !existingFollowedId) {
            await Users.updateOne({ _id: req.userId }, { $push: { following: userId } })
            await Users.updateOne({ _id: userId }, { $push: { followed: req.userId } })
            res.send({
                response: 1,
                message: 'user has been followed!'
            })
        } else {
            res.send('already followed!')
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/unFollow', async (req, res) => {
    const { userId } = req.body;
    try {
        let existingFollowingId = await Users.findOne({ _id: req.userId })
        let existingFollowedId = await Users.findOne({ _id: userId })
        if (existingFollowingId.following.includes(userId) && existingFollowedId.followed.includes(req.userId)) {
            await Users.updateOne({ _id: req.userId }, { $pull: { following: userId } })
            await Users.updateOne({ _id: userId }, { $pull: { followed: req.userId } })
            res.send({
                response: 1,
                message: 'user has been unFollowed!'
            })
        } else {
            res.send('already unFollowed!')
        }
    } catch (error) {
        console.log(error);
    }
})

//connect and disconnect related routes

router.post('/connect', async (req, res) => {
    const { userId } = req.body;
    try {
        await Users.updateOne({ _id: req.userId }, { $push: { connectReqSentPending: userId } })
        await Users.updateOne({ _id: userId }, { $push: { connectReqReceivedPending: req.userId } })
        res.send({
            response: 1,
            message: 'request has been sent!'
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/accept', async (req, res) => {
    const { userId } = req.body;
    try {
        const existingSendingUser = await Users.findById(userId);
        const existingAcceptingUser = await Users.findById(req.userId);
        if (!existingAcceptingUser.connected.includes(userId) && !existingSendingUser.connected.includes(req.userId)) {
            await Users.updateOne({ _id: req.userId }, { $push: { connected: userId } })
            await Users.updateOne({ _id: userId }, { $push: { connected: req.userId } })
            await Users.updateOne({ _id: req.userId }, { $pull: { connectReqReceivedPending: userId } })
            await Users.updateOne({ _id: userId }, { $pull: { connectReqSentPending: req.userId } })
            res.send({
                response: 1,
                message: 'You have been connected successfully!'
            })
        } else {
            return res.send({
                response: 1,
                message: 'You are already connected with that user!'
            })
        }
    } catch (error) {
        console.log(error);
    }
})

router.post('/decline', async (req, res) => {
    const { userId } = req.body;
    try {
        await Users.updateOne({ _id: req.userId }, { $pull: { connectReqReceivedPending: userId } })
        await Users.updateOne({ _id: userId }, { $pull: { connectReqSentPending: req.userId } })
        res.send({
            response: 1,
            message: 'request has been declined!'
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/disconnect', async (req, res) => {
    const { userId } = req.body;
    try {
        await Users.updateOne({ _id: req.userId }, { $pull: { connected: userId } })
        await Users.updateOne({ _id: userId }, { $pull: { connected: req.userId } })
        res.send({
            response: 1,
            message: 'user has been disconnected!'
        })
    } catch (error) {
        console.log(error);
    }
})



module.exports = router;


