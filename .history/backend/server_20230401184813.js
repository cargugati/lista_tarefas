const express = require("express")
const mysql = require("mysql")

// opçoes de conexao

const app = new express()
app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

// rotas
