const express = require('express');
const bodyParser = require('body-parser');

/**Cria uma instância do express seta a porta e informa 
 * a porta para o app */
const app = express();

/**Cria o Servidor e instância um objeto para 
 * armazenar as rotas da aplicação */
const router = express.Router();

// Carrega as Rotas
const indexRoute = require('./routes/index-routes');
const notesRoute = require('./routes/notes-routes');
const aboutRoute = require('./routes/about-routes');

// bodyParser - Converte as chamadas e respostas em JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Seta a utilização das rotas */
app.use('/', indexRoute);
app.use('/note', notesRoute);
app.use('/about', aboutRoute);

module.exports = app;