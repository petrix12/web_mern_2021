import React from 'react'
import { Row, Col, Card, Button } from "antd"
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { apiRestful} from '../../../assets/img/png/apirestful.png'
import { awsLaravel } from '../../../assets/img/png/aws_laravel.png'
import { cursosLaravel } from '../../../assets/img/png/cursos_laravel.png'
import { mongoDB } from '../../../assets/img/png/laravel_mongodb.png'
import { vueJs } from '../../../assets/img/png/vuejs2021.png'
import { cvOnline } from '../../../assets/img/png/cvonline.png'
import "./HomeCourses.scss"

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title">
                <h2>Aprende y mejora tus habilidades</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16} >

            </Col>
            <Col lg={4} />
        </Row>
    )
}