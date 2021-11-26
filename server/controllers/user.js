const bcrypt = require("bcrypt-node")
const User = require("../models/user")

function signUp(req, res){
    const user = new User()
    console.log(req.body)
    const { name, lastname, email, password, repeatPassword } = req.body
    user.name = name    
    user.lastname = lastname
    user.email = email
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
                if(err){
                    res.status(500).send({message: "Error al encriptar la contraseña"})
                }else{
                    // res.status(200).send({message: hash})
                    user.password = hash
                    user.save((err, userStored) => {
                        if(err){
                            res.status(500).send({message: "Error del servidor al crear nuevo usuario. Error: " + err })
                        }else{
                            if(!userStored){
                                res.status(404).send({message: "Error al crear nuevo usuario"})
                            }else{
                                res.status(200).send({user: userStored})
                            }
                        }
                    })
                }
            })
        }
    }
}

module.exports = {
    signUp
}