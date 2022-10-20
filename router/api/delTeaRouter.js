const delTeasRouter = require('express').Router();
const db = require('../../db/models');

delTeasRouter.delete('/:id', async(req, res) => {
    try {
        await db.Tea.destroy({ where: { id: req.params.id } })
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
});

  module.exports = delTeasRouter