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

         <div className="row" >
                    <div className="col-5 text-left">              
                    <img alt="Recursos didáctico"  data-tar="RecursosDidacticos"  onClick={props.handlerCerrarEnconstruccion}    className="img-fluid hvr-pop btn_volv"  src={imgGeneral + "btn_volver.png"  }  />
                    </div>
         </div>
            
        <div className="row">
            <div className="col-12 text-center">
                <img id="img-construc" src={imgGeneral + "enConstruccion.png"} className="img-fluid" alt="Pantalla en construcción"/>
            </div>
        </div>

        </React.Fragment>
     );
}
 
export default Construccion;