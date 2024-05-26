import React from "react";
import "../css/Header.css"
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import foto from "../assets/fotomia.jpg"
import { MdOutlineComputer } from "react-icons/md";
import "animate.css"
const Header = () => {



    return (
    <div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="mailto:leonelalmiron.2019@gmail.com">Contacto</a>
          </li>
          <div className="iconos">
          <li><a href="https://github.com/Leonel523/Mi-portafolio"><i ><FaSquareGithub /></i></a></li>
          <li> <a href="https://www.instagram.com/leonel_0503/"><i><FaInstagram /></i></a></li>
          </div>
        </ul>
      </nav>
      <div className="Titulo">
      <h1>Bienvenido a mi Portafolio</h1>
      <hr />
      </div>
      <div className="profile">
      <img src={foto} alt="Foto" className="foto-img" />
      <h2 className="profile-name"> <br /><i><MdOutlineComputer /></i> Leonel Almiron </h2>
    </div>
   
    </div>
  )
};

export default Header;
