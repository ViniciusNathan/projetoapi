const express = require("express"); //iniciar aplicação(?)
const cors = require("cors"); //autoriza sua aplicação acessar
const bodyParser = require("body-parser"); // manipular texto

const app = express(); //mudou o nome de express para app
const Port = 5001;

app.get("/teste", (req, res) => {
    res.send("Seja bem-vindo")
})

app.get("/login", (req, res) => {
    res.send("Acessar sua conta")
})

app.get("/produto", (req, res) => {
    res.send("Meus produtos")
})

app.get("/perfil", (req, res) => {
    res.send("Seus dados")
})


//npm nodemon para rodar servidor sem interromper

// ROTA PRODUTO - CREATE


app.listen(Port,()=> {
    console.log(`Servidor rodando na porta ${Port}`);
})