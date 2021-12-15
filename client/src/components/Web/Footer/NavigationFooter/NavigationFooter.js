import { Row, Col } from "antd";
import { 
	BookOutlined,
	CodeOutlined,
	DatabaseOutlined,
	RightOutlined,
	HddOutlined,
	AppstoreOutlined,
	UserOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";
import "./NavigationFooter.scss";

export default function NavigationFooter() {
	return (
		<Row className="navigation-footer">
			<Col md={24}>
				<h3>Navegación</h3>
			</Col>
			<Col md={12}>
				<RenderListLeft />
			</Col>
			<Col md={12}>
				<RenderListRight />
			</Col>
		</Row>
	)
}

function RenderListLeft() {
	return (
		<ul>
			<li>
				<a href="#">
					<BookOutlined /> Cursos Online
				</a>
			</li>
			<li>
				{/* <a href="#">
					<CodeOutlined /> Desarrollo Web
				</a> */}
				<Link to="/contact">
					<CodeOutlined /> Desarrollo Web
				</Link>
			</li>
			<li>
				<a href="#">
					<DatabaseOutlined /> Base de Datos
				</a>
			</li>
			<li>
				<a href="#">
					<RightOutlined /> Politica de Privacidad
				</a>
			</li>
		</ul>
	)
}

function RenderListRight() {
	return (
		<ul>
			<li>
				<a href="#">
					<HddOutlined /> Sistemas / Servidores
				</a>
			</li>
			<li>
				<a href="#">
					<AppstoreOutlined /> CMS
				</a>
			</li>
			<li>
				<a href="#">
					<UserOutlined /> Portafolio
				</a>
			</li>
			<li>
				<a href="#">
					<RightOutlined /> Política de Cookies
				</a>
			</li>
		</ul>
	)
}