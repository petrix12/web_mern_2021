import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu/* , Icon */ } from "antd";
import { HomeOutlined, MenuFoldOutlined } from '@ant-design/icons';

import "./MenuSider.scss";

function MenuSider(props) {
    /* const { menuCollapsed, location } = props; */
    const { Sider } = Layout;

    return (
        <Sider className="admin-sider" /* collapsed={menuCollapsed} */>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}/* {["/admin/users"]} */
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
                {/* <Menu.Item key="/admin/users">
                <Link to="/admin/users">
                    <Icon type="user" />
                    <span className="nac-text">Usuarios</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="/admin/menu">
                <Link to="/admin/menu">
                    <Icon type="menu" />
                    <span className="nac-text">Menú</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="/admin/courses">
                <Link to="/admin/courses">
                    <Icon type="book" />
                    <span className="nac-text">Cursos</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="/admin/blog">
                <Link to="/admin/blog">
                    <Icon type="message" />
                    <span className="nac-text">Blog</span>
                </Link>
                </Menu.Item> */}
            </Menu>
        </Sider>
    )
}

export default withRouter(MenuSider);