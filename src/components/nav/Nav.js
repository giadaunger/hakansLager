import React from "react";
import { Link } from 'react-router-dom';
import '../nav/imageCss/nav.css'


function Nav({cart}) {

    return(
        <nav>
            <ul>
                <Link to='/'>
                    <li className='nav-li'><img src={require('../nav/imageCss/logo.png')} alt='logo' className='logo' /></li>
                </Link>

                <Link to='/checkout' className='nav-link'>
                    <li className='nav-li'>{`Kassa (${cart.lenght})`}</li>
                </Link>

                <Link to='/contact' className='nav-link'>
                    <li className='nav-li'>Kontakt</li>
                </Link>

                <Link to='/products' className='nav-link'>
                    <li className='nav-li'>Produkter</li>
                </Link> 

                <Link to='/' className='nav-link'>
                    <li className='nav-li'>Hem</li>
                </Link>               
            </ul>
        </nav>
    )
}

export default Nav;