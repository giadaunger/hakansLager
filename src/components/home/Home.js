import React from "react";
import { Link } from 'react-router-dom';
import '../home/imageCss/banner.css'
import '../home/imageCss/newproducts.css'
import '../home/imageCss/productcard.css'
import Newproducts from './Newproducts'

function Home() {
    return(
        <div className='home'>
            <section className='banner-section'>
            <div className='banner-div'>
                <img src={require('./imageCss/banner.png')} alt='banner' className='banner-logo' />
                <div className='banner-text'>
                    <h1 className='banner-h1'>Välkommen till Håkans Lager</h1>
                    <h3>Nya varor och låga priser varje vecka!</h3>
                    <Link to='/products'>
                        <button className='banner-btn'>Klicka för att handla →</button>
                    </Link>
                </div>
            </div>
        </section>

        <section className='new-product-section'>
            <h1 className='new-product-h1'>Veckans nyheter</h1>
            <Newproducts />
        </section>
        </div>
    )
}

export default Home;