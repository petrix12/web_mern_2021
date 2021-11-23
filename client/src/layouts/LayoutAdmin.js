import { Route } from 'react-router-dom'
import { Layout } from "antd"
import "./LayoutAdmin.scss"

export default function LayoutAdmin(props) {
    const { routes } = props
    const { Header, Content, Footer } = Layout
    /* console.log(props) */

    return (
        <Layout>
            <h2>Menú Sider Admin</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>Soluciones++ 2021</Footer>
            </Layout>
        </Layout>
    )
}

function LoadRoutes({ routes }){
    /* console.log(routes) */
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
}