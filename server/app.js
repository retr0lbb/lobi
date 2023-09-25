const express = require('express')
require('dotenv').config()
const app = express()
const Connnection = require('./db/connection')
const bodyParser = require('body-parser')
const userController = require('./controller/userController')


const port = process.env.PORT || 3001;
const host = `${process.env.LOCALIP}` || "localhost";
app.use(express.json());
app.use(bodyParser.json());


app.post("/cadastro", userController.insertUser);
app.get("/users/", userController.findAll);
app.delete("/users/:id", userController.deletUser);
app.patch("/users/:id", userController.alterUser);
app.post("/login", userController.logUser)

try {
    const connection = new Connnection()
    app.listen(port, host, ()=>{
        console.log(`server running on 👍`)
    })
} catch (error) {
    if (error){
        throw error
    }
}

