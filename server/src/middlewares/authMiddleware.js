const Users = require('../features/auth/auth.model')



const authMiddleWare = async (req, res, next) => {
    if (!req.headers.token) return res.send({ error: "token is required!" })
    const [email, userId, password] = req.headers.token.split('_#_');
    try {
        let user = await Users.findOne({ email, password });
        if (user) {
            req.userId = userId;
            next();
        } else {
            res.status(404).send({ error: 'try with other credentials!' });
        }
    } catch (error) {
        res.status(401).send(error)
    }
}





module.exports = { authMiddleWare }