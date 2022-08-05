// Importa o aquivo express no arquivo js
import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql'

// Load Config
dotenv.config({path: './config/config.env'})

// Atribiu a função express para dentro de uma variavel // Run server
const Server = express()
// Cria uma variavel e acessa os aquivos .env atraves do process.env para armazenar o numero na porta definida no arquivo.env
const port = process.env.PORT || 5000

// Usa a função listen que é ouvir, atribui a porta 3000 e colocar uma função ou uma mensagem pra saber se deu certo
Server.listen(port, console.log("Servidor rodando em " + process.env.NODE_ENV + " na porta " + port + "..."))

// primeiros diz qual a rota que é a /, e depois cria uma função, que cria a req que ve o que foi enviado, e a res que responde
Server.get("/", (req, res) => {
    // diz que a resposta ira aparecer um texto na tela inicial
    res.send("Página Inicial")
})

Server.get("/user", (req, res) => {
    res.send("Página do Usuário")
})








// MYSQL

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foodreview',
  password : 'foodreview',
  database : 'foodreview'
});
 
// inicia a conecxão
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();