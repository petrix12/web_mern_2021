import { Row, Col } from "antd"
import 'antd/dist/antd.css'
import { useParams } from "react-router-dom"
import PostsListWeb from "../components/Web/Blog/PostsListWeb"
import PostInfo from "../components/Web/Blog/PostInfo"

export default function Blog(props) {
	const { location, history } = props
	const { url } = useParams()
	
	return (
		<Row>
			<Col md={4} />
			<Col md={16}>
				{url ? (
					<PostInfo url={url} />
				) : (
					<PostsListWeb location={location} history={history} />
				)}
			</Col>
			<Col md={4} />
		</Row>
	)
}