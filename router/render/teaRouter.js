const teaRouter = require('express').Router();
const TeaPage = require('../../view/Main');

const db = require('../../db/models');

teaRouter.get('/', async (req, res) => {
  try {
    const { user } = res.locals;
    const teas = await db.Tea.findAll({
      attributes: ['name', 'id', 'picture', 'title'],
      raw: true,
    });
    res.renderComponent(TeaPage, { user, teas });
  } catch ({ message }) {
    res.send({ message });
  }
});

module.exports = teaRouter;
