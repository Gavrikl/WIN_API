
//загружаем библиотеку express
const { urlencoded } = require('express');
const express = require('express')


const path = require ('path');


const homeRoutes = require('./routers/home');
const clientPath = path.join(__dirname, 'client');

//app это сервер
const app = express(); 
//добавляем функционал для сервера
app.use(express.static(clientPath));
app.use(express.urlencoded({extended: false}));
app.use('/',homeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(` ${PORT}`);
});




