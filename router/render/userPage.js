const userRouter = require('express').Router();
const db = require('../../db/models');
const userPage = require('../../view/userPage');

userRouter.get('/', async (req, res) => {
    try {
        const { user } = res.locals;
        console.log(user.id);
        const comments = await db.Comment.findAll({
            where: { userId: user.id },
            order: [['createdAt', 'DESC']],
            ofset: 0,
            limit: 3,
            raw: true,
        });
        console.log(comments);
        res.renderComponent(userPage, { comments });
    } catch ({ message }) {
        res.send(message);
    }
});

module.exports = userRouter;
