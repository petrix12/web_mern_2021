import { Route, Switch } from "react-router-dom"
import { Layout, Row, Col } from "antd"
import 'antd/dist/antd.css'
import MenuTop from '../components/Web/MenuTop'
import './LayoutBasic.scss'
import '../index.scss'

export default function LayoutBasic(props) {
    const { routes } = props
    const { Footer } = Layout

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
            <Footer>Soluciones++</Footer>
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