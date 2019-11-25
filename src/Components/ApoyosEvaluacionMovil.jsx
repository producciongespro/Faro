import React from 'react';
import images from "../data/images.json";
import textosJson from "../data/textos.json";



const textos = textosJson[0];
const  reproducirSonido = () => {
  console.log("Audio");  
  var tmpAudio = document.getElementById("evaluacion");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}


const ApoyosEvaluacionMovil = (props) => {
  return ( 
    <React.Fragment>
        <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={images[0].EvaluacionTitulo } />
      <div className="row">
  
                <div className="col-1">
                </div>
                             
                <div  className="col-10 "><br/><br/>  
               
                    
                    <div  className="col-12 col-sin-padding">
                        <figure>                        
                          <img id="tecnicas" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3}   data-origen="Funciones de la evaluación"  onClick={props.handlerAbrirCategoriasEvaluacion}   alt="Funciones de la evaluación"    src={images[0].EvaluacionLRubricas} role="button" />                        
                        </figure>
                      </div>
                  
                  
                      <div className="col-12  col-sin-padding">
                   
                      <figure>                      
                        <img id="instrumentos" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3}    data-origen="Componentes de la calificación" onClick={props.handlerAbrirCategoriasEvaluacion}    alt="Componentes de la calificación" src={images[0].EvaluacionProceso} role="button" />                      
                      </figure>
                    </div>
                  

                   
                     <div className="col-12  col-sin-padding">
                      <figure>
                        <img id="documentos" className="img-fluid  btn hvr-pop evaluacion" data-infosource={3}  data-origen="Documentos"   alt="Itemes"  src={images[0].EvaluacionLogros} />
                      </figure>
                     
                    </div>
  
        </div>
        <div className="col-1">
                      
        </div>

    </div>

    <div className="row">
    <div className="col-6 text-center" >
            <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPruebaEscrita} className="img-fluid botones-portada hvr-pop"   src={images[0].EvaluacionPruebas} alt="Elaboración de Prueba Escrita"/>
    </div>
    <div className="col-6 text-center" >
            <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoTrabajoCotidiano} className="img-fluid botones-portada hvr-pop"   src={images[0].EvaluacionCotidiano} alt="Valoración del trabajo cotidiano"/>
    
    </div>
    </div><br/>
    <div className="row">
        <div className="col-12 text-center" >
                    <img  data-tar="Home" onClick={props.changePage}   className=" img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
                </div>
        </div>
        <audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_evaluacion.mp3" id="evaluacion"   preload="true"  ></audio>



  </React.Fragment>
   );
}
 
export default ApoyosEvaluacionMovil;