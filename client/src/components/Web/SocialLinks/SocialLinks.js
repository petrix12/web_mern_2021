import { ReactComponent as YouTubeIcon } from '../../../assets/img/svg/youtube.svg'
import { ReactComponent as FacebookIcon } from '../../../assets/img/svg/facebook.svg'
import { ReactComponent as LinkedinIcon } from '../../../assets/img/svg/linkedin.svg'
import { ReactComponent as TwitterIcon } from '../../../assets/img/svg/twitter.svg'
import './SocialLinks.scss'

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.youtube.com/channel/UCgI3CMta_Vc4GHZwbzG3e-Q" className="youtube" target="_blank" rel="noreferrer">
                <YouTubeIcon />
            </a>
            <a href="https://twitter.com/petrix12" className="twitter" target="_blank" rel="noreferrer">
                <TwitterIcon />
            </a>
            <a href="https://www.facebook.com/solplusplus/?view_public_for=107321274381310" className="facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
            </a>
            <a href="https://www.linkedin.com/in/pedro-bazo/" className="linkedin" target="_blank" rel="noreferrer">
                <LinkedinIcon />
            </a>
        </div>
    )
}