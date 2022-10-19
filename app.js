require('dotenv').config();
require('@babel/register');

const express = require('express');
const configApp = require('./config/serverConfig');

const indexRouter = require('./routes/indexRouter');
const teaRouter = require('./routes/teaRouter');
// const registrationRouter = require('./router/render/registrationRouter');

const app = express();
const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', indexRouter);
app.use('/tea', teaRouter);
// app.use('/registration', registrationRouter);

app.listen(PORT, () => console.log(`Сервер запущен, порт: ${PORT}`));
