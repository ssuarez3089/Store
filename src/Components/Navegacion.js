import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navegacion.css';

const Navegacion = () => {
    return (  
        <nav className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo">About Us</NavLink>
            <NavLink to={'/productos'} activeClassName="activo">Products</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo">Contact</NavLink>
        </nav>
    );
}
 
export default Navegacion;