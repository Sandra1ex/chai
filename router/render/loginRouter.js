const router = require('express').Router();
const Login = require('../../view/Login');

router.get('/', (req, res) => {
  // ???? откуда user const user = res.local.user, откуда в res.locals user?
  const { user } = res.locals;
  res.renderComponent(Login, { title: 'Login', user });
});

module.exports = router;
