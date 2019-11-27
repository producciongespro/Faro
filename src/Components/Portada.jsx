import React from 'react';
//json:

import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';

//TODO: sustituir esto: 
const textos = textosJson[0];


const img = assets.img.portada;



const Portada = (props) => {
    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <img id="img-portada" src={img + "titulo.png"  } className="img-fluid" alt="Título portada"/>
            </div>
        </div>
  
            <div className="row" >
         
                    <div className="col-5 text-right">                        
                    <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoMinistro } className="img-fluid botones-portada hvr-pop"   src={img + "btn_bienvenida.png"} alt="Bienvenida"/>
                    </div>
                    <div className="col-2 ">                     
                   
                    </div>
                    <div className="col-5 text-left">                     
                    <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada hvr-pop" src={img + "btn_ingresar.png"} alt="Ingresar"/>
                    </div>
      
            </div>
        <div className="row">
     
        <div className="col-12 text-center pie-pagina">
           <br/>
        <br/>
    
        DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - DIRECCIÓN DE DESARROLLO CURRICULAR - INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO
        </div>
       
        </div>
        </React.Fragment>
     );
}
 
export default Portada;