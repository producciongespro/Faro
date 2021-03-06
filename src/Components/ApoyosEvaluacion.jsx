import React from 'react';
import assets from '../data/config/config.json';
import textosJson from "../data/textos.json";

const audio = assets.audio;
const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general;



const textos = textosJson[0];
const  reproducirSonido = () => {
  console.log("Audio");  
  var tmpAudio = document.getElementById("evaluacion");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}


const ApoyosEvaluacion = (props) => {
  return ( 
    <React.Fragment>
      <div className="row">
  
                <div className="col-5">
                   
                      <div className="row">
                        <div className="col-12">
                        <img tabIndex="1" role="banner" alt="Banner de Apoyos para la evaluación" className="img-fluid titulos" src={img + "evaluacion_titulo.png" } />
                        </div>
                      </div>
                      <img  tabIndex="2" id="imgFondoDescripcion" onClick={reproducirSonido}  onKeyPress={reproducirSonido}  className="descripciones3 img-fluid" src={imgGeneral + "caja_descripcion.png" } alt="Descripción de la sección de apoyos para la evaluación" />
                     <div  onClick={ reproducirSonido  }  id="textoDescripcion" className="texto_descripciones text-justify pr-3">
                     <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
                     </div>

                  <div className="row img_btn_der">
                  <img tabIndex="2"  role="button" data-typecontent ="video" data-content= {textos.VideoPruebaEscrita} className="img-fluid botones-portada botonesInactivos"   src={img + "prueba.png" }  alt="Vídeo - Elaboración de Prueba Escrita - Desactivado"/>
                  </div>

                  <div className="row img_btn_der">
                  <img  tabIndex="2" role="button" data-typecontent ="video" data-content= {textos.VideoTrabajoCotidiano} className="img-fluid botones-portada botonesInactivos"   src={img + "cotidiano.png" } alt="Vídeo - Valoración del trabajo cotidiano - Desactivado"/>
                  </div>



              </div>

              
                <div  className="col-7 "><br/><br/>
                    
                <div className="botones_salir col-12">
                <img tabIndex="5"  data-tar="Home" onClick={props.changePage} onKeyPress={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= { imgGeneral + "btn_salir.png" }  alt="Regresar a la portada" />
                </div>
                    
                    <div  className="row">
                    
                    <div  className="col-12 col-sin-padding">
                        <figure role="button">                        
                          <img tabIndex="3" id="tecnicas" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3} onMouseOver={props.onMouseOver}  data-origen="Funciones de la evaluación"  onClick={props.handlerAbrirCategoriasEvaluacion} onKeyPress={props.handlerAbrirCategoriasEvaluacion}  onMouseOut={ props.onMouseOut } alt="Funciones de la evaluación"    src={img + "funciones.png" } role="button" />                        
                        </figure>
                      </div>
                    </div>
                  
                  <div className="row">
                    <div  className="col-12 col-sin-padding"  >
                      <figure role="button">                      
                        <img tabIndex="3" id="instrumentos" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3} onMouseOver={props.onMouseOver}   data-origen="Componentes de la calificación" onClick={props.handlerAbrirCategoriasEvaluacion} onKeyPress={props.handlerAbrirCategoriasEvaluacion}  onMouseOut={ props.onMouseOut }  alt="Componentes de la calificación" src={img + "componentes.png" }  role="button" />                      
                      </figure>
                    </div>
                  </div>

                    <div className="row">
                     <div className="col-12  col-sin-padding">
                      <figure role="button">
                        <img tabIndex="3" id="documentos" className="img-fluid  btn hvr-pop evaluacion" data-infosource={3} onMouseOver={props.onMouseOver}  data-tar="DocumentosEvaluacion" onClick= {props.changePage} onKeyPress={props.changePage} onMouseOut={ props.onMouseOut }  alt="Documentos de apoyo a la evaluzación"  src={img + "documentos.png" } />
                      </figure>
                      </div>
                    </div>
  
                </div>
  
      </div>
  <div className="row botones-grandes">
    <div  className="col-3"  >

    </div>
    <div className="col-6 hover12" >
      <figure>
       
      </figure>
    </div>
    <div  className="col-3"  >

</div>

  </div>

        <audio src={ audio + "apoyos_evaluacion.mp3"} id="evaluacion"   preload="true"  ></audio>



  </React.Fragment>
   );
}
 
export default ApoyosEvaluacion;