import React from 'react';
import assets from '../data/config/config.json';
const imgGeneral = assets.img.general;

const Construccion = (props) => {
    return ( 
        <React.Fragment>

            {/* <span>origen {props.origen}  </span> */}

         <div className="row" >
                    <div className="col-5 text-left">              
                    <img 
                        alt="Regresar la sección Oferta de Desarrollo Profesional"  
                        data-tar="RecursosDidacticos" 
                        tabIndex="3"  
                        onClick={props.handlerCerrarEnconstruccion } 
                        onKeyPress={props.handlerCerrarEnconstruccion } 
                        data-origen={ props.origen }   
                        className="img-fluid hvr-pop btn_volv"  
                        src={imgGeneral + "btn_volver.png"  }  />
                    </div>
         </div>
        
         <div className="row">
            <div  className="col-12 text-center">
                < img tabIndex="2" id="img-construc"  src={imgGeneral + "enConstruccion.png"} className="img-fluid" alt="Pantalla en construcción"/>
            </div>
        </div>
     

        </React.Fragment>
     );
}


 
export default Construccion;