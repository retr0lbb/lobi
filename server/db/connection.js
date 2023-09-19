const mongoose = require('mongoose');

let connection;

const connect = async(cb) =>{
    if(connection){
        return connection
    }
    try{
        connection = await mongoose.connect("mongodb://127.0.0.1:27017/lobi");
    }catch (error){
        if(error){
            return console.log(error);
        }
    }
    console.log("conectado ao banco de dados");
    cb(connection);
}


module.exports = connect;



