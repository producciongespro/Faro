import React from 'react';
// import images from "../data/images.json";
import assets from '../data/config/config_m.json';
import textosJson from "../data/textos.json";

const textos = textosJson[0];
const img = assets.img.apoyosEvaluacion;
const img2 = assets.img.general;


const ApoyosEvaluacionMovil = (props) => {
  return ( 
    <React.Fragment>
        <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={img + "evaluacion_titulo.png" } />
      <div className="row">
  
                <div className="col-1">
                </div>
                             
                <div  className="col-10 "><br/><br/>  
               
                    
                    <div  className="col-12 col-sin-padding">
                        <figure>                        
                          <img id="tecnicas" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3}   data-origen="Funciones de la evaluación"  onClick={props.handlerAbrirCategoriasEvaluacion}   alt="Funciones de la evaluación"    src={img + "evaluacion_tecnicas.png"} role="button" />                        
                        </figure>
                      </div>
                  
                  
                      <div className="col-12  col-sin-padding">
                   
                      <figure>                      
                        <img id="instrumentos" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3}    data-origen="Componentes de la calificación" onClick={props.handlerAbrirCategoriasEvaluacion}    alt="Componentes de la calificación" src={img + "evaluacion_instrumentos.png"} role="button" />                      
                      </figure>
                    </div>
                  

                   
                     <div className="col-12  col-sin-padding">
                      <figure>
                        <img id="documentos" className="img-fluid  btn hvr-pop evaluacion" data-infosource={3}  data-origen="Documentos"   alt="Itemes"  src={img + "evaluacion_documentos.png"} />
                      </figure>
                     
                    </div>
  
        </div>
        <div className="col-1">
                      
        </div>

    </div>

    <div className="row">
    <div className="col-6 text-center" >
            <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPruebaEscrita} className="img-fluid botones-portada hvr-pop"   src={img + "evaluacion_elaboracionPruebaE.png"} alt="Elaboración de Prueba Escrita"/>
    </div>
    <div className="col-6 text-center" >
            <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoTrabajoCotidiano} className="img-fluid botones-portada hvr-pop"   src={img + "evaluacion_valoracionCotidiano.png"} alt="Valoración del trabajo cotidiano"/>
    
    </div>
    </div><br/>
    <div className="row">
        <div className="col-12 text-center" >
                    <img  data-tar="Home" onClick={props.changePage}   className=" img-fluid hvr-pop"  src= {img2 + "btn_salir.png"}  alt="Salir" />
                </div>
        </div>
  </React.Fragment>
   );
}
 
export default ApoyosEvaluacionMovil;