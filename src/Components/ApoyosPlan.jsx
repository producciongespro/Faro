import React from 'react';
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';

const audio = assets.audio;
const img = assets.img.apoyosPlan;
const imgGenerales = assets.img.general;

const textos = textosJson[0];
var pdfs = dsPdfs[0];
//var links = dsLinks[0];


const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("planeamiento");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}


const ApoyosPlan = (props) => {
  return ( 
    <div>
    <div  className="row">
          <div className="col-5">
                <img tabIndex="1" role="banner" className="titulos img-fluid" src={img+"titulo.png"  } alt="Banner de apoyos para el planeamiento" />
                  <img id="imgFondoDescripcion" onClick={reproducirSonido}  onKeyPress={reproducirSonido}   className="descripciones3 img-fluid" src= {imgGenerales + "caja_descripcion.png"}  alt="Descripción de la sección de apoyos para el planeamiento" />
                  <div  tabIndex="2" onKeyPress={reproducirSonido} onClick={ reproducirSonido  } id="textoDescripcion" className="texto_descripciones text-justify pr-3">          
                  <h2 className='desc'>Descripción:</h2>  {  props.infoCategory }            
                  </div>

                  <div className="row img_btn_der">
                  <img tabIndex="2" role="button" onClick = {props.showModal }  data-typecontent ="videoPlan" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={img+ "planeamiento_didactico.png"} alt="Vídeo acerca del planeamiento didáctico"/>
                  </div>

                  <div className="row img_btn_der">
                  <img tabIndex="2" role="button" data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada botonesInactivos"   src={img + "planeamiento_correlacionado.png"} alt="Video acerca del planeamiento correlacionado para unidocentes - Enlace inactivo"/>
                  </div>
          </div>

        
  <div  className="col-7">

      <div className="botones_salir col-12">
                <img  tabIndex="5" role="button"  data-tar="Home" onClick={props.changePage} onKeyPress={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGenerales + "btn_salir.png"}  alt="regresar a portada" />
      </div>


    <div id="botones-planeamiento" className="row">
    <div className="col-10 hover11 centro">
          <figure>
              <img tabIndex="3" role="button" className="botones-portada derecha img-fluid img_apoy" id="definicionHabilidades" data-content= {pdfs.Tacaco }  data-typecontent ="defHabilidades"  onClick={props.showModal} onKeyPress={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Definición de habilidaes" src={img + "img_enfoque_habilidades.png"} />
        </figure>
      </div>
      <div className="col-10 hover11 ">
        <figure>
          <img tabIndex="3" role="button" className="botones-portada derecha img-fluid img_apoy" id="orientaciones"   data-typecontent ="opcOrientaciones"  onClick={props.showModal} onKeyPress={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Orientaciones para la mediación pedagógica por habilidades" src= {img + "img_guia.png"} />
        </figure>
        </div>
      <div className="col-10 hover11 ">
        <figure>
          <img tabIndex="3" role="button" className="botones-portada derecha img-fluid img_apoy" id="plantilla" data-typecontent ="plantillaPlan"  onClick={props.handlerOpenBuscadorPlaneamiento} onKeyPress={props.handlerOpenBuscadorPlaneamiento}  data-infosource={2} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }    alt="Plantillas de planeamiento"  src= {img + "img_plantilla.png"} />
        </figure>
        </div>

     <div className="col-10 hover11 centro">
          <figure>
              <img tabIndex="3" role="button" className="botones-portada derecha img-fluid img_apoy " id="ejemplos"  onClick={props.showModal} onKeyPress={props.showModal} data-content= {pdfs.EjemplosTecnicas }  data-typecontent ="linksVideosPlan"    data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Videos con ayuda audiovisual" src= {img + "img_ejemplos.png"} />
        </figure>
      </div>
      <div className="col-2">
      </div>


      <div className="col-2">
      </div>

  </div>
    </div>
</div>
<br/><br/>
<audio src={audio+"apoyos_plan.mp3"} id="planeamiento"   preload="true"  ></audio>

 </div>
   );
}
 
export default ApoyosPlan;