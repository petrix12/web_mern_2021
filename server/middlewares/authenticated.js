const jwt = require("jwt-simple")
const moment = require("moment")

/* Debe ser exactamente la misma de server\services\jwt.js */
const SECRET_KEY = "alsjsla85sd55s55WWf444f55svvvs555s22As"

exports.ensureAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ message: "La petición no tiene la cabecera de Autenticacion." })
    }

    const token = req.headers.authorization.replace(/['"]+/g, "")

    try {
        var payload = jwt.decode(token, SECRET_KEY)

        if (payload.exp <= moment().unix()) {
            return res.status(404).send({ message: "El token ha expirado." })
        }
    } catch (ex) {
        console.log(ex)
        return res.status(404).send({ message: "Token invalido." })
    }
    req.user = payload
    next()
}