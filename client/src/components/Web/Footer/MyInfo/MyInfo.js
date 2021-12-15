import Logo from "../../../../assets/img/png/logo.png"
import SocialLink from "../../SocialLinks"
import "./MyInfo.scss"

export default function MyInfo() {
	return (
		<div className="my-info">
			<img src={Logo} alt="Soluciones++" />
			<h4>
				Entra en el mundo del desarrollo web, disfruta creando proyectos de todo
				tipo, deja que tú imaginación fluya y crea verdaderas maravillas!!
			</h4>
			<SocialLink />
		</div>
	)
}