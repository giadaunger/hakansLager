import React from "react";
import './imageCss/footer.css'

function Footer() {
    return(
        <footer>
            <img src={require('../nav/imageCss/logo.png')} alt='logo' className='logo' />
            <ul className='footer-ul'>
                <li className='footer-li'>+46-73 999 6623</li>
                <li className='footer-li'>info@hakanslager.com</li>
                <li className='footer-li'>Dansbaenvägen 21, 12631 Hägersten</li>
            </ul>
            <p className='footer-p'>Copyright © 2022 Håkans Lager. All Rights Reserved</p>
        </footer>
    )
}

export default Footer;