import React from 'react';
import '../css/Contacto.css'

const Contacto = () => {
    return ( 
        <form>
            <legend>Contact Form</legend>
            <div className="input-field">
                <label>Name: </label>
                <input type="text" placeholder="Your Name" />
            </div>
            <div className="input-field">
                <label>Email: </label>
                <input type="text" placeholder="Your E-mail" />
            </div>
            <div className="input-field">
                <label>Message: </label>
                <textarea></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value="Send" />
            </div>
        </form>
     );
}
 
export default Contacto;