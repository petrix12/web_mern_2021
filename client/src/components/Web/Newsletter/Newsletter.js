import { useState } from "react"
import { Form, Input, Button, notification } from "antd"
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { suscribeNewsletterApi } from "../../../api/newsletter"
import "./Newsletter.scss"

export default function Newsletter() {
	const [email, setEmail] = useState("")

	const onSubmit = e => {
		const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
		const resultValidation = emailValid.test(email)

		 if (!resultValidation) {
			notification["error"]({ message: "El correo electrónico no es valido." })
		} else {
			suscribeNewsletterApi(email).then(response => {
				if (response.code !== 200) {
					notification["warning"]({ message: response.message })
				} else {
					notification["success"]({ message: response.message })
					setEmail("")
				}
			})
		} 
	}

	return (
		<div className="newsletter">
			<h3>Newsletter</h3>
			<Form onFinish={onSubmit}>
				<Form.Item>
					<Input
						prefix={<UserOutlined style={{ color: "rgba(0,0,0,0.25)" }} />}
						placeholder="Correo electrónico"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</Form.Item>
				<Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						¡Me suscribo!
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}