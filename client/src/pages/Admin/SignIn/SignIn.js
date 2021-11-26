import { Layout, Tabs } from "antd"
import 'antd/dist/antd.css'
import { Redirect } from "react-router-dom"
import Logo from "../../../assets/img/png/logo.png"
import RegisterForm from "../../../components/Admin/RegisterForm"
/* import LoginForm from "../../../components/Admin/LoginForm"
import { getAccessTokenApi } from "../../../api/auth" */

import "./SingIn.scss"

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    /* if (getAccessTokenApi()) {
        return <Redirect to="/admin" />;
    } */
    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="Soluciones++" />
                </h1>

                 <div className="sign-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            Componente LonginForm
                            {/*<LoginForm />*/}
                        </TabPane>
                        <TabPane tab={<span>Nuevo usuario</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div> 
            </Content>
        </Layout>
    )
}