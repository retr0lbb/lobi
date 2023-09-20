
const msql = require('mysql2');

class Connection {
    connectionWithDatabase;
    constructor(){
        this.conectar()
        this.connectionWithDatabase
    }
    conectar(){
        this.connectionWithDatabase = msql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "lobi"
        })
        this.connectionWithDatabase.connect((err)=>{
            if(err){
                return console.log(err)
            }
            console.log("conectado ao banco de dados")
        })
    }
}

module.exports = Connection



