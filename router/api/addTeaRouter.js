const addTeaRouter = require('express').Router();
const db = require('../../db/models');

addTeaRouter.post('/', async (req, res) => {

    try {
        const tea = req.body
        const newTea = await db.Tea.create({
            name: tea.name,
            title: tea.title,
            picture: tea.img
        })
        await newTea.save()
        res.redirect('/personalArea')
    } catch ({ message }) {
        console.log(message);
    }
})

module.exports = addTeaRouter;