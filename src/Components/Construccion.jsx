import React from 'react';
//json:

import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';

//TODO: sustituir esto: 
const textos = textosJson[0];


const img = assets.img.portada;
const imgGeneral = assets.img.general;



const Construccion = (props) => {
    return ( 
        <React.Fragment>
            <h1>En construccion</h1>
        <div className="row">
            <div className="col-12 text-center">
                <img id="img-portada" src={imgGeneral + "enConstruccion.png"} className="img-fluid" alt="Pantalla en construcción"/>
            </div>
        </div>
  
            <div className="row" >
                    <div className="col-5 text-left">                     
                    <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos"  onClick={props.changePage}    className="cliqueables" src={img + "btn_volver.png"  }  />
            </div>
      
            </div>

        </React.Fragment>
     );
}
 
export default Construccion;