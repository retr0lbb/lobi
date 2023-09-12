const User = require("../model/User")
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