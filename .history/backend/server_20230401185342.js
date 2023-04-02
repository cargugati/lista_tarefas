const express = require("express")
const mysql = require("mysql")

// opçoes de conexao com MYSQL

const app = new express()
app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

// rotas
app.get("/", (req, res) => {
  res.send("Olá Mundo!")
})
