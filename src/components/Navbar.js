import React from "react";
import { Link } from "react-router-dom";
import Manos from '../assets/img/Manos.jpg'
import './Navbar.css'
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg">
            <Link to= "/home" className="navbar-brand btn btn-outline-light">
               <img height="60" width="120" src={Manos} alt="Logo react js" />&nbsp;&nbsp;&nbsp;&nbsp;
               <strong>Home</strong>
           </Link>
           <Link to="/perfiles" className="btn btn-info mr-6">
               Libros
           </Link>
           <Link to="#" className="btn btn-info ml-3">
               Usuarios
           </Link>
           <Link to="/" className="btn btn-info ml-3">
               Salir
           </Link>&nbsp;&nbsp;&nbsp;&nbsp;
           <form className="form-inline my-2 my-lg-0 ">
            <input className="form-control mr-sm-2" type="Buscar" placeholder="Buscar"/>
            <button className="btn btn-outline-light my-2 my-sm-0 " type="submit">Buscar</button>
          </form>&nbsp;&nbsp;
          <div class="col1">
          <h4>Para Reflexionar...</h4>
          </div>&nbsp;
          <div class="col2">
            <h5>"Un libro es un regalo que puedes abrir una y otra vez..."</h5>
           </div>

        </nav>
    )

}
export default Navbar