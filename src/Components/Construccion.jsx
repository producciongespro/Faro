import React from 'react';
//json:

import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';

//TODO: sustituir esto: 
const textos = textosJson[0];


const img = assets.img.portada;
const imgGeneral = assets.img.general;

console.log("imgGeneral", imgGeneral );


const Construccion = (props) => {
    return ( 
        <React.Fragment>
            <h1>En construccion</h1>
        <div className="row">
            <div className="col-12 text-center">
                <img id="img-portada" src={imgGeneral + "enConstruccion.png"} className="img-fluid" alt="Pantalla en construcción"/>
            </div>
        </div>
        <br/>
        <br/>
  
            <div className="row" >
                    <div className="col-5 text-left"> 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus pariatur repellendus labore reprehenderit quas deserunt sunt aspernatur quam, asperiores, repellat, voluptates consectetur! Eligendi vel voluptate, alias possimus consectetur doloribus neque.                    
                    <img alt="Recursos didáctico"  data-tar="RecursosDidacticos"  onClick={props.handlerCerrarEnconstruccion}    className="pepito" src={imgGeneral + "btn_volver.png"  }  />
            </div>
      
            </div>

        </React.Fragment>
     );
}
 
export default Construccion;