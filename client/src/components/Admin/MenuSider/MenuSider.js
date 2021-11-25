import { Link, withRouter } from "react-router-dom"
import { Layout, Menu } from "antd"
import { HomeOutlined, MenuFoldOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

import "./MenuSider.scss";

function MenuSider(props) {
    /* console.log(props) */
    const { menuCollapsed } = props
    const { Sider } = Layout;

    return (
        <Sider className="admin-sider" collapsed={menuCollapsed} >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
            >
                <Menu.Item key="1">
                    <Link to="/admin">
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/admin/menu-web">
                        <MenuFoldOutlined />
                        <span className="nav-text">Menú Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default withRouter(MenuSider);