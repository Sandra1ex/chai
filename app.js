require('dotenv').config();
require('@babel/register');

const express = require('express');
const configApp = require('./config/serverConfig');

const indexRouter = require('./router/render/indexRouter');
const teaRouter = require('./router/render/teaRouter');
const loginRouter = require('./router/render/loginRouter');
const logRouter = require('./router/api/logRouter');
const registrationRouter = require('./router/render/registrationRouter');
const registRouter = require('./router/api/registRouter');
const adminRouter = require('./router/render/adminPage');
const userRouter = require('./router/render/userPage');

const app = express();
const PORT = process.env.PORT || 3000;

configApp(app);

app.use('/', indexRouter);
app.use('/tea', teaRouter);
app.use('/login', loginRouter);
app.use('/api', logRouter);
app.use('/registration', registrationRouter);
app.use('/api', registRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(PORT, () => console.log(`Сервер запущен, порт: ${PORT}`));
