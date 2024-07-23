import LogoFooter from '../assets/images/logoFooter.png'

import '../styles/footer.scss'

export default function Footer() {
    return (
        <footer>
            <img src={LogoFooter} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
