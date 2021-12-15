import { Route, Switch } from "react-router-dom"
import { Row, Col } from "antd"
import 'antd/dist/antd.css'
import MenuTop from '../components/Web/MenuTop'
import Footer from '../components/Web/Footer'
import './LayoutBasic.scss'
import '../index.scss'

export default function LayoutBasic(props) {
    const { routes } = props

    return (
        <>
            <Row>
                <Col lg={4} />
                <Col lg={16} >
                    <MenuTop />
                </Col>
                <Col lg={4} />
            </Row>
            <LoadRoutes routes={routes}/>
            <Footer />
        </>
    )
}

function LoadRoutes({ routes }){
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}