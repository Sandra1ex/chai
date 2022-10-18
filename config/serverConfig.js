const express = require('express');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
const ssr = require('../middleware/ssr');
// const sessionConfig = require('./sessionConfig');

const serverConfig = (app) => {
  // кофигурирует папку со статическими файлами
  app.use(express.static('public'));

  // конфигурирует парсинг тела с формате x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  // конфигурирует парсинг JSON с формата (принятие)
  app.use(express.json());

  // конфигурирует парсинг кук с клиента
  // app.use(cookieParser());

  // конфигурирует добавление метода renderComponent в ответ
  app.use(ssr);

  // конфигурирует работу с сессией, расширяет объект req.session
  // app.use(session(sessionConfig));
};

module.exports = serverConfig;
