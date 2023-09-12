const express = require('express')
const app = express()
const connect = require('./db/connection')
const bodyParser = require('body-parser')
const userController = require('./controller/userController')
const port = process.env.PORT || 3001;


app.use(express.json())
app.use(bodyParser.json())


app.post("/cadastro", userController.insertUser)



connect(()=>{
    app.listen(port, ()=>{
        console.log(`Servidor rodando na porta ${port}`)
    })
})

