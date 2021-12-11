const Menu = require("../models/menu")

function addMenu(req, res) {
    const { title, url, order, active } = req.body
    const menu = new Menu()

    menu.title = title
    menu.url = url
    menu.order = order
    menu.active = active

    menu.save((err, createdMenu) => {
        if(err) {
            res.status(500).send({ message: "Error del servidor."})
        } else {
            if(!createdMenu) {
                res.status(404).send({ message: "Error al crear el menú."})
            } else {
                res.status(200).send({ message: "Menú creado correctamente."})
            }
        }
    })
}

function getMenus(req, res) {
    Menu.find()
        .sort({ order: 'asc' })
        .exec((err, menusStored) => {
            if(err){
                res.status(500).send({message: "Error del servidor."})
            } else {
                if(!menusStored) {
                    res.status(404).send({message: "No se ha encontrado ningún registro en la base de datos."})
                } else {
                    res.status(200).send({ menu: menusStored})
                }
            }
        })
}

function updateMenu(req, res) {
    let menuData = req.body
    const params = req.params

    Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdate) => {
        if(err) {
            res.status(500).send({ message: "Error del servidor."})
        } else {
            if(!menuUpdate) {
                res.status(404).send({ message: "No se ha encontrado ningún menú."})
            } else {
                res.status(200).send({ message: "Menú actualizado correctamente."})
            }
        }
    })
}

function activateMenu(req, res) {
    const { id } = req.params
    const { active } = req.body

    Menu.findByIdAndUpdate(id, { active }, (err, menuStored) => {
        if(err) {
            res.status(500).send({ message: "Error del servidor."})
        } else {
            if(!menuStored) {
                res.status(404).send({ message: "No se ha encontrado el menú"})
            } else {
                if(active === true){
                    res.status(200).send({ message: "Menú activado correctamente."})
                } else {
                    
                    res.status(200).send({ message: "Menú desactivado correctamente."})
                }
            }
        }
    })
}

function deleteMenu(req,res) {
    const { id } = req.params

    Menu.findByIdAndRemove(id, (err, menuDelete) => {
        if(err){
            res.status(500).send({message: "Error al eliminar menú."})
        } else {
            if (!menuDelete){
                res.status(404).send({message: "No se ha encontrado el menú."})
            } else {
                res.status(200).send({message: "El menú se eliminó correctamente."})
            }
        }
    })
}

module.exports = {
    addMenu,
    getMenus,
    updateMenu,
    activateMenu,
    deleteMenu
}