const { Router } = require('express')
const Users = require('../auth/auth.model')
const Reviews = require('./reviews.model')

const loggedInUserMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) return res.send('required token');
    const [email, userId, password] = req.headers.token.split('_#_');
    try {
        const user = await Users.findOne({ email, password })
        if (user) {
            req.userId = userId;
            next();
        } else {
            res.status(401).send('can not be processed!');
        }
    } catch (error) {
        res.send(error)
    }
}


const router = Router();
router.use(loggedInUserMiddleware);


router.get('/:productId', async (req, res) => {
    const { page = 1 } = req.query;
    try {
        const existingReviews = await Reviews.find(
            { product: req.params.productId }).limit(4).skip((page - 1) * 4)
            .populate([{ path: 'user', select: ['firstName', 'lastName', 'img',] }]);
        return res.send(existingReviews);
    } catch (error) {
        res.send(error);
    }
})

router.post('/add-review', async (req, res) => {
    const { product, comment, reviewStars } = req.body;
    try {
        const existingReview = await Reviews.findOne({ user: req.userId, product });
        if (!existingReview) {
            const review = await Reviews.create({ user: req.userId, product, comment, reviewStars })
            return res.status(201).send(review);
        } else {
            let newBody = {};
            if (comment) {
                newBody.comment = comment;
            } if (reviewStars) {
                newBody.reviewStars = reviewStars;
            }
            await Reviews.updateOne({ user: req.userId, product }, { ...newBody });
            return res.send('comment has beed updated')
        }
    } catch (error) {
        res.send(error)
    }
})

router.patch('/update-likes/:reviewId', async (req, res) => {
    console.log(req.params.reviewId)
    try {
        const existingReviews = await Reviews.findOne({ _id: req.params.reviewId });
        if (existingReviews.likes.includes(req.userId)) {
            likes = existingReviews.likes;
            likes = likes.filter(like => like !== req.userId);
            let updatedReview = await Reviews.findOneAndUpdate({
                _id: req.params.reviewId
            },
                { $set: { likes: likes } }, { new: true })
            return res.send(updatedReview)
        } else {
            let updatedReview = await Reviews.findOneAndUpdate({
                _id: req.params.reviewId
            },
                { $push: { likes: req.userId } }, { new: true })
            return res.send(updatedReview)
        }
    } catch (error) {
        res.send(error);
    }
})

router.patch('/update-disLikes/:reviewId', async (req, res) => {
    try {
        const existingReviews = await Reviews.findOne({ _id: req.params.reviewId });
        if (existingReviews.disLikes.includes(req.userId)) {
            disLikes = existingReviews.disLikes;
            disLikes = disLikes.filter(dislike => dislike !== req.userId);
            const updatedReview = await Reviews.findOneAndUpdate({
                _id: req.params.reviewId
            },
                { $set: { disLikes: disLikes } }, { new: true })
            return res.send(updatedReview)
        } else {
            const updatedReview = await Reviews.findOneAndUpdate({
                _id: req.params.reviewId
            },
                { $push: { disLikes: req.userId } }, { new: true })
            return res.send(updatedReview)
        }
    } catch (error) {
        res.send(error);
    }
})

module.exports = router