import React from 'react';
import assets from '../data/config/config.json';
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";
import dsZip from "../data/comprimidos.json"
var pdfs = dsPdfs[0];
//var links = dsLinks[0];
var zipDocs = dsZip[0];

const audio = assets.audio;
const img = assets.img.apoyosClimaAula;
const imgGenerales = assets.img.general;


const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("clima");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}




const ApoyoClimaAula = (props) => {
  return ( 
    <React.Fragment>
    <div className="row">
    
      <div className="col-5">
            <img   className="titulos img-fluid" src={img+"apoyo_clima_aula_titulo.png" } alt="Apoyo clima en el aula" />
               <img onClick={ reproducirSonido  }  className="descripciones3 img-fluid" src={imgGenerales + "caja_descripcion.png"}  alt="Descripción" />
              <div  onClick={ reproducirSonido  }  id="textoDescripcion" className="texto_descripciones text-justify pr-3">
              <h2 className='desc'>Descripción:</h2> {props.infoCategory}
              </div>              
      </div>


      <div  className="col-7">

      <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGenerales + "btn_salir.png"}  alt="Salir" />
          </div>

        <div id="botones-aula" className="row">
            <div className="col-6 hover11 ">
              <figure>
              <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/clima_clase.pptx"  rel="noopener noreferrer">
                  <img className="botones-portada derecha img-fluid" id="pautas" src={img + "pautas.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  alt="Pautas" />                
                </a>
             </figure>
            </div>
            <div className="col-6 hover11 ">
              <figure> <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/clima_escolar.pptx"  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="climaEscolar"  src={img + "interacciones.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Clima escolar" />
              </a>
              </figure>
            </div>

        </div>
        <div className="row">
          <div className="col-6 hover11 ">
            <figure>
            <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/uso_tiempo_aula.pptx" rel="noopener noreferrer">
              <img className="botones-portada derecha img-fluid" id="recomendaciones" src={img + "recomendaciones.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Recomendaciones" />
              </a>
            </figure>
            </div>
          <div className="col-6 hover11 ">
              <figure>
              <a href={zipDocs.inclusion}  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="inclusion" src={img + "inclusion.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Inclusión" />
                </a>
            </figure>
          </div>
          <div className="col-6 hover11 ">
            <figure>
            <a href={zipDocs.emociones}  rel="noopener noreferrer">
                <img className="botones-portada derecha img-fluid" id="emociones" src={img + "emociones.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Emociones" />  
            </a>
            </figure>
            </div>
          <div className="col-6 hover11">
              <figure>
              <img className="botones-portada img-fluid" id="interculturalidad" src={img + "interculturalidad.png"} data-content= {pdfs.InclusionEducativa }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Interculturalidad" />
            </figure>
          </div>
  
        
    </div>
    </div>
    </div>

    <audio src= {audio + "apoyos_clima.mp3"} id="clima"   preload="true"  ></audio>
   
      </React.Fragment>
   );
}
 
export default ApoyoClimaAula;