const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const usuarioRoute = require('../routes/usuarioRoute');
const livroRoute = require('../routes/livroRoute');


app.use('/usuarios', usuarioRoute);
app.use('/livros', livroRoute);


module.exports = app;