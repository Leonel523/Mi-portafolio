import React from "react";
import "../css/Main.css"
import "animate.css"
import html from "../assets/html.jpg"
import css from "../assets/css.png"
import js from "../assets/js.jpg"
import react from "../assets/react.jpg"
import mysql from "../assets/mysql.png"
const Main = () => {


  const Datos = {

    Nombre: "Leonel Almiron",
    Edad: 21,
    Descripcion: "Soy estudiante de la carrera de programacion en la UTN FRT,tengo 21 años, soy un chico responsable y me encanta lo que hago",
    Domicilio: "Tucuman-Argentina",
    Telefono: +543816660527
    
     }
    

return(
    <div>
      <div id="skills"></div>
      <div className="sobre-mi">

       <h2>Sobre mi</h2>
        
         <div className="texto">
          <span> {Datos.Descripcion} <br /> 
             </span>
      </div>
        </div>
        <br />
        <br />
        
        <div  className="skills-container">
      <div className="card">
        <img src={html} alt="html" className="skill-image" />
        <h3>HTML</h3>
        <p>Nivel intermedio</p>
      </div>
      <div className="card">
        <img src={css} alt="css" className="skill-image" />
        <h3>CSS</h3>
        <p>Nivel intermedio.</p>
      </div>
      <div className="card">
        <img src={js} alt="js" className="skill-image" />
        <h3>JAVA SCRIPT</h3>
        <p>Nivel basico.</p>
      </div>
      <div className="card">
        <img src={react} alt="react" className="skill-image" />
        <h3>REACT</h3>
        <p>En aprendizaje.</p>
      </div>
      <div className="card">
        <img src={mysql} alt="mysql" className="skill-image" />
        <h3>MySQL</h3>
        <p>En aprendizaje</p>
      </div>

      
  
</div>
    </div>
)

}

export default Main

