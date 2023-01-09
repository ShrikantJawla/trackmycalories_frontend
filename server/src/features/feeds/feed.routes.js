const { Router } = require('express')
const { authMiddleWare } = require('../../middlewares/authMiddleware')
const Feeds = require('./feed.model')
const upload = require('express-fileupload');
const cloudinary = require('../../configs/cloudnaryConfig')


const router = Router();
router.use(authMiddleWare);
router.use(upload())


router.get('/getAllPosts', async (req, res) => {
    const { page = 1, limit = 15 } = req.query;
    try {
        const posts = await Feeds.find({})
            .sort({ createdAt: -1 }).limit(limit).skip((page - 1) * limit)
            .populate([
                { path: 'user', select: ['firstName', 'lastName', 'occupation', 'img'] }
                , { path: 'likes', select: ['firstName', 'img'] },
                { path: 'comments.user', select: ['firstName', 'lastName', 'occupation', 'img'] }
            ]);
        res.status(200).send({
            status: 1,
            posts
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.get('/getSingleFeed/:feedId', async (req, res) => {
    try {
        const feed = await Feeds.findOne({ _id: req.params.feedId })
            .populate([
                { path: 'likes', select: ['firstName', 'lastName', 'occupation', 'img'] },
                { path: 'comments.user', select: ['firstName', 'lastName', 'occupation', 'img'] }
            ])
        return res.status(200).send({
            status: 1,
            feed
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})



router.post('/postFeed', async (req, res) => {
    const { feedText } = req.body;
    try {
        if (req.files) {
            const file = req.files.image;
            return file.mv('./upload/images/' + file.name, async (err) => {
                if (err) {
                    console.log(err)
                    return res.status(500).send({
                        status: 0,
                        message: err.message
                    })
                } else {
                    const result = await cloudinary.uploader.upload('./upload/images/' + file.name, {
                        folder: 'profileImages'
                    })
                    const newPost = await Feeds.create({ user: req.userId, image: result.secure_url, feedText })
                    if (newPost) {
                        return res.status(201).send({
                            status: 1,
                            message: 'new comment has been posted successfully!'
                        })
                    }
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.patch('/editFeed/:feedId', async (req, res) => {
    const { feedId } = req.params;
    const { newFeedText } = req.body;
    try {
        await Feeds.updateOne({ _id: feedId }, { $set: { feedText: newFeedText } })
        return res.status(200).send({
            status: 1,
            message: 'comment has been updated successfully!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.delete('/deleteFeed/:feedId', async (req, res) => {
    const { feedId } = req.params;
    try {
        await Feeds.findByIdAndDelete(feedId);
        return res.status(200).send({
            status: 1,
            message: 'comment has been deleted successfully!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.post('/likePost/:feedId', async (req, res) => {
    const userId = req.userId;
    try {
        const existingFeed = await Feeds.findOne({ _id: req.params.feedId })
        if (!existingFeed.likes.includes(userId)) {
            await Feeds.updateOne({ _id: req.params.feedId }, { $push: { likes: userId } })
        } else {
            await Feeds.updateOne({ _id: req.params.feedId }, { $pull: { likes: userId } })
        }
        res.status(200).send({
            status: 1,
            message: 'comment likes has been updated successfully!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.post('/addComment/:feedId', async (req, res) => {
    const { comment } = req.body
    try {
        await Feeds.updateOne({ _id: req.params.feedId }, { $push: { comments: { user: req.userId, comment } } })
        res.status(200).send({
            status: 1,
            message: 'comment has been added successfully!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})


router.post('/addReply', async (req, res) => {
    const { commentId, feedId } = req.query;
    const { reply } = req.body
    try {
        await Feeds.updateOne({ _id: feedId, "comments._id": commentId }, { $set: { reply } })
        res.status(200).send({
            status: 1,
            message: 'reply has been added successfully!'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: 0,
            message: error.message
        })
    }
})



module.exports = router;