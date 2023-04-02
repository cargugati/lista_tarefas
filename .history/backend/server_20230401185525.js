const express = require("express")
const mysql = require("mysql")

// opçoes de conexao com o MYSQL
const connection = mysql.createConnection({
  host: "localhost",
})

const app = new express()
app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

// rotas
app.get("/", (req, res) => {
  res.send("Olá Mundo!")
})
