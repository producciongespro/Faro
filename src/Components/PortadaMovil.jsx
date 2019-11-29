import React from 'react';
//json:
import imagesJson from "../data/images.json";
import textosJson from "../data/textos.json";
import assets from "../data/config/config_m.json";
const textos = textosJson[0];
const images = imagesJson[0];
const img  = assets.img.portada;
//Portada en caso de móviles
const PortadaMovil = (props) => {
    return ( 
        <React.Fragment>
            <br/>
            <div className="row">
                <div className="col-12 text-center">
                    <img id="logoMCH" src={img + "titulo.png"  } className="img-fluid" alt="Título portada"  />
                </div>
            </div>
            <br/> <br/>
            <div className="row" >
                <div className="col-2 ">                     
                </div>
                <div className="col-8 ">                        
                    <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoMinistro } className="img-fluid botones-portada hvr-pop"   src= {img + "btn_bienvenida.png"} alt="Bienvenida"/>
                </div>
                <div className="col-2 ">                     
                </div>         
            </div>  <br/>
            <div className="row" >
                <div className="col-2 ">                     
                </div>
                <div className="col-8 ">                     
                    <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada hvr-pop" src={img + "btn_ingresar.png"} alt="Ingresar"/>
                </div>
                <div className="col-2 ">                     
                </div>
            </div>
        <div className="row">
            <div className="col-12 text-center pie-pagina2">
                
                INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO - DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - DIRECCIÓN DE DESARROLLO CURRICULAR
            </div>
       
        </div>
        </React.Fragment>
     );
}
 
export default PortadaMovil;