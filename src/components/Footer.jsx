import LogoFooter from '../assets/images/logoFooter.png'

import '../styles/footer.scss'

export default function Footer() {
    return (
        <footer id='footer'>
            <img className='footer__logo' src={LogoFooter} alt="logo kasa" />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
