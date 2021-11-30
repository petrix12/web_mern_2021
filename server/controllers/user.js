const bcrypt = require("bcrypt-node")
const jwt = require("../services/jwt")
const User = require("../models/user")
const { query } = require("express")

function signUp(req, res){
    const user = new User()
    console.log(req.body)
    const { name, lastname, email, password, repeatPassword } = req.body
    user.name = name    
    user.lastname = lastname
    user.email = email.toLowerCase()
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

function signIn(req, res){
    const params = req.body
    const email = params.email.toLowerCase()
    const password = params.password

    User.findOne({email}, (err, userStored) => {
        if(err){
           res.status(500).send({message: "Error del servidor."}) 
        } else {
            if(!userStored){
                res.status(404).send({message: "Usuario no encontrado."})
            } else {
                bcrypt.compare(password, userStored.password, (err, check) => {
                    if(err){
                        res.status(500).send({message: "Error del servidor."})
                    } else if(!check) {
                        res.status(404).send({message: "La contraseña es incorrecta."})
                    } else {
                        if(!userStored.active){
                            res.status(200).send({code: 200, message: "El usuario no está activo."})
                        } else {
                            res.status(200).send({
                                accessToken: jwt.createAccessToken(userStored),
                                refreshToken: jwt.createRefreshToken(userStored)
                            })
                        }
                    }
                })
            }
        }
        
    })
}

function getUsers(req, res) {
    User.find().then(users => {
        if(!users){
            res.status(404).send({ message: "No se ha encontrado ningún usuario."})
        } else {
            res.status(200).send({ users })
        }
    })
}

function getUsersActive(req, res) {
    const query = req.query

    User.find({ active: query.active }).then(users => {
        if(!users){
            res.status(404).send({ message: "No se ha encontrado ningún usuario."})
        } else {
            res.status(200).send({ users })
        }
    })
}

module.exports = {
    signUp,
    signIn,
    getUsers,
    getUsersActive
}