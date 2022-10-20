const chaiInfoRouter = require('express').Router();
const ChaiPage = require('../../view/Chaipage');
const { Tea } = require('../../db/models');


chaiInfoRouter.get('/:id', async (req, res) => {
  const {id} = req.params;

const { user } = res.locals
const tea = await Tea.findOne({ where: { id } })
res.renderComponent(ChaiPage, { tea, user }, { doctype: false })

});

module.exports = chaiInfoRouter;
