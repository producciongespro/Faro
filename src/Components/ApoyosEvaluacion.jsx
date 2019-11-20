import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import dsZip from "../data/comprimidos.json";
import textosJson from "../data/textos.json";

//import dsLinks from "../data/links.json";

const textos = textosJson[0];
var zipFiles = dsZip[0];
var pdfs = dsPdfs[0];
//links = dsLinks[0];


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
                        <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={images[0].EvaluacionTitulo } />
                        </div>
                      </div>
                      <img  onClick={reproducirSonido}  className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion} alt="Descripción" />
                     <div  onClick={ reproducirSonido  }  id="textoDescripcion" className="texto_descripciones text-justify pr-3">
                     <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
                     </div>

                  <div className="row img_btn_der">
                  <img className="img-fluid" onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoDidac} alt="Planeamiento Didáctico"/>
                  </div>

                  <div className="row img_btn_der">
                  <img className="img-fluid" onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoCorrel} alt="Planeamiento Correlacionado"/>
                  </div>

              </div>

              
                <div  className="col-7 "><br/><br/>
                    
                <div className="botones_salir col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
                </div>
                    
                    <div id="div-evaluacion" className="row">
                      <div  className="col-12 col-sin-padding">
                        <figure>                        
                          <img id="tecnicas" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3} onMouseOver={props.onMouseOver}  data-origen="Funciones de la evaluación"  onClick={props.handlerAbrirCategoriasEvaluacion}  onMouseOut={ props.onMouseOut } alt="Funciones de la evaluación"    src={images[0].EvaluacionLRubricas} role="button" />                        
                        </figure>
                      </div>
                    </div>
                  
                  <div className="row">
                    <div  className="col-12 col-sin-padding"  >
                      <figure>                      
                        <img id="instrumentos" className="img-fluid btn hvr-pop evaluacion"  data-infosource={3} onMouseOver={props.onMouseOver}   data-origen="Componentes de la calificación" onClick={props.handlerAbrirCategoriasEvaluacion}  onMouseOut={ props.onMouseOut }  alt="Componentes de la calificación" src={images[0].EvaluacionProceso} role="button" />                      
                      </figure>
                    </div>
                  </div>
                      <div className="row">
                     <div className="col-12  col-sin-padding">
                      <figure>
                        <img id="documentos" className="img-fluid  btn hvr-pop evaluacion" data-infosource={3} onMouseOver={props.onMouseOver}  data-origen="Ejemplos de ítem" onClick={props.handlerAbrirCategoriasEvaluacion}  onMouseOut={ props.onMouseOut }  alt="Itemes"  src={images[0].EvaluacionLogros} />
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

        <audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_evaluacion.mp3" id="evaluacion"   preload="true"  ></audio>



  </React.Fragment>
   );
}
 
export default ApoyosEvaluacion;