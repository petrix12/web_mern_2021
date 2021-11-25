import { Route, Switch } from "react-router-dom"
import { Layout } from "antd"
import './LayoutBasic.scss'

export default function LayoutBasic(props) {
    const { routes } = props
    const { Content, Footer } = Layout
    console.log(routes)

    return (
        <Layout>
            <h2>Menú...</h2>
            <Layout>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>Soluciones++</Footer>
            </Layout>
        </Layout>
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