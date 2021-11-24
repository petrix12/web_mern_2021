import { Button, Icon } from 'antd'
import LogoSolucionespp from '../../../assets/img/png/logo.png'
import './MenuTop.scss'

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={LogoSolucionespp}
                    alt="Logo Soluciones++"
                />
                <Button type="link" onClick={() => console.log('Click')} >
                    <Icon type="menu-fold" />
                </Button>
            </div>

            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log('Desconexión')} >
                    <Icon type="poweroff" />
                </Button>
            </div>
        </div>
    )
}