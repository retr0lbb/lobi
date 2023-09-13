const User = require("../model/User")
const mongodb = require('mongoose')
const bcrypt = require('bcrypt')

const hashPass = (pass)=>{
    return bcrypt.hashSync(pass, 10)
}


exports.insertUser = async(req, res)=>{
    const{name, email, pass} = req.body
    
try {
    const user = new User({
        name: name,
        email: email,
        pass:hashPass(pass)
    })
    await user.save()
    res.status(200).send("Usuario criado com sucesso")
} catch (error) {
    if(error){
        res.status(500).send("erro no servidor")
        console.log(error)
        return
    }
}
}

exports.findAll= async(req, res) =>{
    try {
        const user = await User.find()
        if(!user){
            return res.status(404).send("Usuarios não encontrados");
        }

        res.status(200).send(user)
    } catch (error) {
        if(error){
            res.status(500).send("Erro ao encontrar Usuarios");
            console.error(error)
            return;
        }
    }
}

exports.deletUser = async(req, res) =>{
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).send("Usuario não encontrado")
        }
        res.status(202).send("Usuario deletado com sucesso")
        console.log(user)
        return
    } catch (error) {
        if (error){
            res.status(500).send("Erro ao deletar usuario")
            console.log(error)
            return
        }
    }
}

exports.alterUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const newData = req.body
        const user = await User.findByIdAndUpdate(id,newData, {new: true} )

        if(!user){
            return res.status(404).send("Usuario Não encontrado")
        }
        res.status(200).send("Usuario alterado com sucesso: ")
    } catch (error) {
        if(error){
            res.status(500).send("Erro ao atualizar usuario");
            console.log(error)
        }
    }
}