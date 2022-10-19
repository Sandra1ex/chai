const adminRouter = require('express').Router();
const db = require('../../db/models');
const adminPage = require('../../view/adminPage');

adminRouter.get('/', async (req, res) => {
    try {
        const teas = await db.Tea.findAll({
            raw: true,
        });
        res.renderComponent(adminPage,{teas})
    } catch ({ message }) {
        res.send(message);
    }
})

module.exports = adminRouter