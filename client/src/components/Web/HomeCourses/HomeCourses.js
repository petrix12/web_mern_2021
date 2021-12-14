import React from 'react'
import { Row, Col, Card, Button } from "antd"
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import apiRestful from '../../../assets/img/png/apirestful.png'
import awsLaravel from '../../../assets/img/png/aws_laravel.png'
import cursosLaravel from '../../../assets/img/png/cursos_laravel.png'
import mongoDB from '../../../assets/img/png/laravel_mongodb.png'
import vueJs from '../../../assets/img/png/vuejs2021.png'
import cvOnline from '../../../assets/img/png/cvonline.png'
import "./HomeCourses.scss"

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16} >
                <Row className="row-courses" >
                    <Col md={6}>
                        <CardCourse 
                            image={apiRestful}
                            title="Creación de una API RESTful en Laravel 8"
                            subtitle="Intermedio - Laravel/API RESTful"
                            link="https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image={awsLaravel}
                            title="Instalación de un proyecto Laravel en AWS"
                            subtitle="Intermedio - Laravel/AWS"
                            link="https://github.com/petrix12/awsejemplo/blob/main/apuntes.md"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image={cursosLaravel}
                            title="Creación de una plataforma de cursos online con Laravel 8"
                            subtitle="Intermedio - Laravel Jeatstream"
                            link="https://github.com/petrix12/PlataformaDeCursosLaravel/blob/main/000%20Soportes/apuntes.md"
                        />
                    </Col>
                    <Col md={6}>
                        <CardCourse 
                            image={mongoDB}
                            title="Aplicación Laravel con base de datos MongoDB"
                            subtitle="Intermedio - Laravel/MongoDB"
                            link="http://laravelmongo.herokuapp.com/"
                        />
                    </Col>
                </Row>
                <Row className="row-courses" >
                    <Col md={6}>
                        <CardCourse 
                            image={vueJs}
                            title="Creación de proyectos en Vue.js"
                            subtitle="Básico - VueJs"
                            link="https://github.com/petrix12/apirestful_laravel8/blob/main/apuntes.md"
                        />
                    </Col>
                    <Col md={6}></Col>
                    <Col md={6}></Col>
                    <Col md={6}>
                        <CardCourse 
                            image={cvOnline}
                            title="Creación de un CV desarrollado en Laravel 8"
                            subtitle="Intermedio - Laravel 8"
                            link="http://cvpetrix.herokuapp.com/en_construccion"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to='/courses'>
                    <Button>Ver más cursos</Button>
                </Link>
            </Col>
        </Row>
    )
}

function CardCourse(props) {
    const { image, title, subtitle, link } = props
    const { Meta } = Card

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>INGRESAR</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}