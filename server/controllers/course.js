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

function deleteCourse(req, res) {
    const { id } = req.params

    Course.findByIdAndRemove(id, (err, courseDelete) => {
        if(err){
            res.status(500).send({ code: 500, message: "Error al eliminar curso"})
        } else {
            if (!courseDelete){
                res.status(404).send({ code: 404, message: "No se ha encontrado el curso."})
            } else {
                res.status(200).send({ code: 200, message: "Curso eliminado correctamente."})
            }
        }
    })
}

function updateCourse(req, res) {
    let courseData = req.body
    const id = req.params.id

    Course.findByIdAndUpdate(id, courseData, (err, courseUpdate) => {
        if(err) {
            res.status(500).send({ code: 500, message: "Error del servidor."})
        } else {
            if(!courseUpdate) {
                res.status(404).send({ code: 404, message: "No se ha encontrado ningún curso."})
            } else {
                res.status(200).send({ code: 200, message: "Curso actualizado correctamente."})
            }
        }
    })
}

module.exports = {
    addCourse,
    getCourses,
    deleteCourse,
    updateCourse
}