import { Layout, Row, Col } from "antd"
/* import 'antd/dist/antd.css'
import MyInfo from "./MyInfo"
import NavigationFooter from "./NavigationFooter"
import Newsletter from "../Newsletter" */
import "./Footer.scss"

export default function Footer() {
    const { Footer } = Layout

    return (
        <Footer className="footer">
            <Row>
                <Col md={4} />
                <Col md={16}>
                   <Row>
                        <Col md={8}>
                            Mi información
                            {/* <MyInfo /> */}
                        </Col>
                        <Col md={8}>
                            Navegación
                            {/* <NavigationFooter /> */}
                        </Col>
                        <Col md={8}>
                            Newsletter
                            {/* <Newsletter /> */}
                        </Col>
                    </Row>
                    <Row className="footer__copyright">
                        <Col md={12}>© 2021 ALL RIGHTS RESERVED​</Col>
                        <Col md={12}>Soluciones++ | Desarrollo Web</Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}