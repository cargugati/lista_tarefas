const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

// opções de conexão com o MYSQL
const connection = mysql.createConnection({
  host: "0.0.0.0",
  localAddress: "127.0.0.1",
  user: "root",
  password1: "12345",
  database: "bd_tasks",
  port: "3306",
})

const app = new express()
app.listen(3000, () => {
  console.log("Servidor Iniciado")
})

app.use(cors())

// rotas
// =======================================================================
app.get("/", (req, res) => {
  //res.send("Olá Mundo!")
  connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
    if (err) {
      res.send("MySQL connection error!")
    }

    res.send("MySQL connection Ok!")
  })
})

// =======================================================================
app.get("/user/:id", (req, res) => {
  let id = req.params.id

  connection.query("SELECT id, username, created_at FROM users WHERE id = ?", [id], (err, results) => {
    if (err) {
      res.send("MySQL connection error!")
    }

    res.json(results)
  })
})
