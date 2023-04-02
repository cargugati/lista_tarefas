const express = require("express")
const mysql = require("mysql")

// opções de conexão com o MYSQL
const connection = mysql.createConnection({
  host: "0.0.0.0",
  user: "root",
  password: "12345",
  database: "bd_tasks",
  port: "3306",
  ssl: "none",
})

const app = new express()
app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

// rotas
app.get("/", (req, res) => {
  //res.send("Olá Mundo!")
  connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
    if (err) {
      res.send(err.message)
    }

    res.send(results)
  })
})
