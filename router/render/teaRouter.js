const teaRouter = require('express').Router();
const TeaPage = require('../../view/Main');

const db = require('../../db/models');

teaRouter.get('/', async (req, res) => {
  try {
    const teas = await db.Comment.findAll({
      include: [{
        association: db.Comment.User,
        attributes: ['login'],
      },
      {
        association: db.Comment.Tea,
        attributes: ['name'],
      },
      ],
      attributes: ['title'],
      raw: true,
    });
    res.renderComponent(TeaPage, { teas });
  } catch ({ message }) {
    res.send({ message });
  }
});

module.exports = teaRouter;
