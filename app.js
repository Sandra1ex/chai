require('dotenv').config();
require('@babel/register');

const express = require('express');
const configApp = require('./config/serverConfig');

//Check dir
const indexRouter = require('./routes/indexRouter');
//Check dir
const teaRouter = require('./routes/teaRouter');


//const mainRouter = require('./router/render/mainRouter');
const loginRouter = require('./router/render/loginRouter');
const registrationRouter = require('./router/render/registrationRouter');
const registRouter = require('./router/api/registRouter');


const app = express();
const PORT = process.env.PORT || 3000;

configApp(app);


app.use('/', indexRouter);
app.use('/tea', teaRouter);
//app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);
app.use('/api', registRouter);


app.listen(PORT, () => console.log(`Сервер запущен, порт: ${PORT}`));
