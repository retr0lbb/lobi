const express = require('express')
const app = express()
const Connnection = require('./db/connection')
const bodyParser = require('body-parser')
const userController = require('./controller/userController')


const port = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json());


app.post("/cadastro", userController.insertUser);
app.get("/users/", userController.findAll);
app.delete("/users/:id", userController.deletUser);
app.patch("/users/:id", userController.alterUser);

try {
    const connection = new Connnection()
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
} catch (error) {
    if (error){
        throw error
    }
}

