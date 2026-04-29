const express = require("express"); //iniciar aplicação(?)
const cors = require("cors"); //autoriza front acessar backen
const {v4: uuidv4} = require("uuid");

const app = express(); //mudou o nome de express para app
const Port = 5001;

app.use(cors());
app.use(express.json());
let produtos = [];

// ROTA PRODUTO - CREATE
app.post("/produtos", (req, res) => {
    const {nome, descricao} = req.body;
    if(!nome || !descricao) {
        return res.status(400).json({error:"Campos obrigatórios"})
    }
    const novoItem = {id:uuidv4(), nome, descricao};
    produtos.push(novoItem);
    res.status(201).json(novoItem)
})

// app.get("/teste", (req, res) => {
//     res.send("Seja bem-vindo")
// })

// app.get("/login", (req, res) => {
//     res.send("Acessar sua conta")
// })

// app.get("/produto", (req, res) => {
//     res.send("Meus produtos")
// })

// app.get("/perfil", (req, res) => {
//     res.send("Seus dados")
// })

//npm nodemon para rodar servidor sem interromper




app.listen(Port,()=> {
    console.log(`Servidor rodando na porta ${Port}`);
})