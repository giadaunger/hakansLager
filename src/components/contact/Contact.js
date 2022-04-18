import React from "react";
import './imageCss/contact.css'

function Contact() {
    return(
        <div className='contact-div'>
            <h1 className='contact-h1'>Ställ dina frågor här!</h1>
            <form>
                <label>Fullständiga namn:</label><br/>
                <input type='text' required></input><br/>
                <label>Telefonnummer:</label><br/>
                <input type='tel' pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" required></input><br/>
                <label>Mail:</label><br/>
                <input type='email' required></input><br/>
                <label>Skriv din fråga:</label><br/>
                <textarea required></textarea><br/>
                <div className='btn-div'>
                    <input type='reset' value='Återställ' className='form-btn'></input>
                    <input type='submit' value='Skicka' className='form-btn'></input>
                </div>
            </form>
        </div>
    )
}

export default Contact;