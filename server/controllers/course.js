const Course = require("../models/course")

function addCourse(req, res) {
    const body = req.body
    const course = new Course(body)
    course.order = 1000

    course.save((err, courseStored) => {
        if(err) {
            res.status(400).send({ code: 400, message: "El curso que estas creando ya existe."})
        } else {
            if(!courseStored){
                res.status(400).send({ code: 400, message: "No se ha podido crear el curso."})
            } else {
                res.status(200).send({ code: 200, message: "El curso se creo correctamente." })
            }
        }
    })
}

function getCourses(req, res) {
    Course.find().sort({ order: "asc" }).exec((err, coursesStored) => {
        if(err) {
            res.status(500).send({ code: 500, message: "Error del servidor."})
        } else {
            if(!coursesStored){
                res.status(400).send({ code: 400, message: "No se ha encontrado ningún curso."})
            } else {
                res.status(200).send({ code: 200, courses: coursesStored })
            }
        }
    })
}

module.exports = {
    addCourse,
    getCourses
}