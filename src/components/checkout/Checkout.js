import React from "react";
import { Link } from 'react-router-dom';
import './imageCss/checkout.css'

function Checkout({ cart, handleClearCart, handleRemoveProduct, handleAddProduct }) {

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0);

    return(
        <div className='cart-items'>
            <div className='cart-items-header'>Dina varor</div>
            <div className='clear-cart'>
                {cart.length >=1 && (
                    <div>
                    <div className='checkout-info'>
                    <h1 className='cart-h1'>Fyll i dina kontaktuppgifter</h1>
            <form className='checkout-form'>
                <label>Fullständiga namn: *</label><br/>
                <input type='text' required></input><br/>
                <label>Telefonnummer: *</label><br/>
                <input type='tel' pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" required></input><br/>
                <label>Mail: *</label><br/>
                <input type='email' required></input><br/>
                <label>Rabattkod:</label><br />
                <input type='text'></input>
            </form>
            </div>
            </div>
                )}
            </div>

            {cart.length === 0 && (
                <div>
                    <div className='cart-empty'>Inga varor i din varukorg</div>
                    <img src={require('../checkout/imageCss/logo.png')} alt='logo' className='logo-epmty-cart' />  
                    <Link to='/products' className='checkout-btn-link'>
                        <button className='start-shopping-btn'>Klicka för att börja handla →</button>
                    </Link>
                </div>
            )}

            <div>
                {cart.map((item) => (
                    <div key={item.id} className='cart-item-list'>
                        <img className='cart-item-img' src={item.image} alt={item.name} />
                        <div className='cart-item-title'>{item.name}</div>
                        <div className='cart-item-function'>
                            <button className='add-item' onClick={() => handleAddProduct(item)}>+</button>
                            <button className='remove-item' onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='cart-item-price'>
                            {item.quantity} x {item.price}:-
                        </div>
                    </div>
                ))}
            </div>

            <div className='cart-total-header'>
                Totalt  
                <div className='items-total-price'>{`:  ${totalPrice}:-`}</div>
            </div>
            <div className='checkout-btn-div'>
            <button className='checkout-btn pay'>Beställ</button>
            <button className='clear-cart-btn' onClick={handleClearCart}>Rensa</button>
            </div>
        </div> 
    )
}

export default Checkout;