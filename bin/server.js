'use strict'

/** Este arquivo apenas cuidara de criar e startar o servidor 
recomendável utilizar const para importar os módulos
importa o app que contém todo o código da aplicação*/
const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');

/**Cria uma instância do express seta a porta e informa 
 * a porta para o app */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**Cria o Servidor e instância um objeto para 
 * armazenar as rotas da aplicação */
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta ' + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
       return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(error){
    console.log(error)
}

function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}