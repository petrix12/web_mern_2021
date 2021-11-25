import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import LogoSolucionespp from '../../../assets/img/png/logo.png'
import './MenuTop.scss'

export default function MenuTop(props){
    /* console.log(props) */
    const { menuCollapsed, setMenuCollapsed } = props 
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <a href="/">
                    <img 
                        className="menu-top__left-logo"
                        src={LogoSolucionespp}
                        alt="Logo Soluciones++"
                    />
                </a>
                {menuCollapsed ?
                    <MenuUnfoldOutlined className="menu-top__button" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} /> :
                    <MenuFoldOutlined className="menu-top__button" type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} />
                }
            </div>

            <div className="menu-top__right" >
                <PoweroffOutlined className="menu-top__button" type="link" onClick={() => console.log('Desconexión')} />
            </div>
        </div>
    )
}