const express = require('express')
const app = express()
const connect = require('./db/connection')
const bodyParser = require('body-parser')
const userController = require('./controller/userController')
const port = process.env.PORT || 3001;


app.use(express.json())
app.use(bodyParser.json())


app.post("/cadastro", userController.insertUser)
app.get("/users/", userController.findAll)
app.delete("/users/:id", userController.deletUser)
app.patch("/users/:id", userController.alterUser)

connect(()=>{
    app.listen(port, ()=>{
        console.log(`Servidor rodando na porta ${port}`)
    })
})

