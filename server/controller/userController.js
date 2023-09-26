const User = require("../model/User")
const Connection = require('../db/connection')
const connection = new Connection()
const bcrypt = require('bcrypt')

const hashPass = (pass)=>{
    return bcrypt.hashSync(pass, 10)
}
exports.insertUser = async(req, res)=>{
    const{name, email, pass} = req.body


    const verifyEmailAdressCommand = "SELECT COUNT(*) AS count FROM usuarios WHERE email = ?"
    connection.connectionWithDatabase.query(verifyEmailAdressCommand, [email], async(err, results)=>{
        if(err){
            console.log(err)
            res.status(500).send("erro no servidor")
            return;
        }
        const emailCount = results[0].count;

        if(emailCount > 0){
            console.log("email em uso: ", email)
            res.status(400).send(`o email: ${email} ja em uso`)
        }else{
            try {
                const user = new User(name, email, hashPass(pass))
                const command = "insert into usuarios (nome, email, senha) values (?, ?, ?)"
                connection.connectionWithDatabase.query(command, [user.name, user.email, user.pass], (err, results)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send("erro no mysql")
                        return;
                    }
                    console.log(results)
                })
            
                res.status(200).send("Usuario criado com sucesso")
            } catch (error) {
                if(error){
                    res.status(500).send("erro no servidor")
                    console.log(error)
                    return
                }
            }
        }
    })
}
exports.findAll= async(req, res) =>{
    try {
        const command = "Select * from usuarios"
        connection.connectionWithDatabase.query(command, (err, results)=>{
            if(err){
                console.log(err)
                return res.status(500).send("Erro no mysql")
            }
            res.status(200).send(results)
        })
    } catch (error) {
        if(error){
            res.status(500).send("Erro ao encontrar Usuarios");
            console.error(error)
            return;
        }
    }
}
exports.findOne = async (req, res)=>{
    const id = req.params.id;
    const command = "SELECT * FROM usuarios WHERE id = ?";
    connection.connectionWithDatabase.query(command, id, (err, results)=>{
        if(err){
            console.log(err)
            res.status(500).send("Erro no servidor")
        }
        if(results.lenght <= 0){
            return res.status(404).send("Usuario não existente")
        }
        const userData = results[0];
        res.status(200).json({
            message: "Usuario encontrado",
            userData: `${userData}`
        })
    })

}
exports.logUser = async (req, res)=>{
    const {email, pass} = req.body;
        const command = "SELECT * FROM usuarios WHERE email = ?"
        connection.connectionWithDatabase.query(command, [email], (err, results) =>{
            if(err){
                console.log(err)
                res.status(500).send("erro no servidor")
            }
            if(results.lenght <= 0){
                return res.status(404).send("Usuario não encontrado")
            }
            try {
            const data = results[0]
            const user = new User(data.nome || "null", data.email || "null", data.senha || "null", data.id || "null");
            bcrypt.compare(pass, user.pass).then( results =>{
                console.log(results)
                if(results ==false){
                    return res.status(403).send("As senhas não correspondem");
                }
                res.status(200).json({
                    message: "usuario logado com sucesso",
                    userData: {
                        nome: user.name ,
                        email: user.email,
                        pass: user.pass,
                        id: user.id
                    }
                })
            }).catch(err =>{
                if(err){
                    console.log(err)
                    res.status(403).send("As senhas não Correspondem")
                    return
                }
            })
                
            } catch (error) {
                if(error){
                    res.status(500).send("erro no servidor")
                    console.log(error)
                }
            }
        })   
    }
exports.deletUser = async(req, res) =>{
    const userId = req.params.id;
    const deletUserById = "DELETE FROM usuarios WHERE id = ?"
    connection.connectionWithDatabase.query(deletUserById, [userId], (err, results) =>{
        if(err){
            console.log(err)
            res.status(500).send("Erro no servidor")
            return;
        }
        console.log(results);
        res.status(202).send("Usuario deletado com sucesso");
    })
}
exports.alterUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const newData = req.body;
        const requireUserString = "SELECT * FROM usuarios WHERE id = ?"
        connection.connectionWithDatabase.query(requireUserString, [id], (err, results)=>{
            if(err){
                console.log(err)
                res.status(500).send("Erro no servidor")
                return;
            }
            if(results.lenght === 0){
                res.status(404).send("Usuário não encontrado");
                return;
            }
            const currentUserData = results[0];
            const updatedUserData = {
                name: newData.name || currentUserData.nome,
                email: newData.email || currentUserData.email,
                pass: newData.pass || currentUserData.senha
            }
            const updateQueryCommand = "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id=?"
            connection.connectionWithDatabase.query(updateQueryCommand, [updatedUserData.name, updatedUserData.email, hashPass(updatedUserData.pass), id],
                (UpdateErr, UpdateResults)=>{
                    if(UpdateErr){
                        console.log(UpdateErr)
                        res.status(500).send("Erro ao alterar Usuario")
                        return;
                    }
                console.log(UpdateResults)
                res.status(202).send("Usuario alterado com sucesso")
            })
        })   
    } catch (error) {
        if(error){
            res.status(500).send("erro no servidor")
            console.log(error)
            return
        }
    }
}