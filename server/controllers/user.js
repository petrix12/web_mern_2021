const bcrypt = require("bcrypt-node")
const User = require("../models/user")

function signUp(req, res){
    const user = new User()
    console.log(req.body)
    const { email, password, repeatPassword } = req.body
    user.mail = email
    user.role = "admin"
    user.active = false
    if(!password || !repeatPassword){
        res.status(404).send({message: "Las contraseñas son requeridas"})
    }else{
        if(password !== repeatPassword){
            res.status(404).send({message: "Las contraseñas tienen que ser iguales"})
        }else{
            // res.status(200).send({message: "Todo bien ..."})
            bcrypt.hash(password, null, null, function(err, hash) {
                
            })
        }
    }
}

module.exports = {
    signUp
}