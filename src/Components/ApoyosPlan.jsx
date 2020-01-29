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
                <img className="titulos img-fluid" src={img+"titulo.png"  } alt="Documentos educativos oficiales" />
                  <img id="imgFondoDescripcion" onClick={reproducirSonido}   className="descripciones3 img-fluid" src= {imgGenerales + "caja_descripcion.png"}  alt="Descripción" />
                  <div onClick={ reproducirSonido  } id="textoDescripcion" className="texto_descripciones text-justify pr-3">          
                  <h2 className='desc'>Descripción:</h2>  {  props.infoCategory }            
                  </div>

                  <div className="row img_btn_der">
                  <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={img+ "planeamiento_didactico.png"} alt="Planeamiento Didáctico"/>
                  </div>

                  <div className="row img_btn_der">
                  <img data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada botonesInactivos"   src={img + "planeamiento_correlacionado.png"} alt="Planeamiento Correlacionado"/>
                  </div>
          </div>

        
  <div  className="col-7">

      <div className="botones_salir col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGenerales + "btn_salir.png"}  alt="Salir" />
      </div>


    <div id="botones-planeamiento" className="row">
    <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid img_apoy" id="definicionHabilidades" data-content= {pdfs.Tacaco }  data-typecontent ="defHabilidades"  onClick={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Enofque por habilidaes" src={img + "img_enfoque_habilidades.png"} />
        </figure>
      </div>
      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid img_apoy" id="orientaciones"   data-typecontent ="opcOrientaciones"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Apoyos para el planeamiento" src= {img + "img_guia.png"} />
        </figure>
        </div>
      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid img_apoy" id="plantilla" data-typecontent ="plantillaPlan"  onClick={props.handlerOpenBuscadorPlaneamiento}  data-infosource={2} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }    alt="Apoyos para el planeamiento"  src= {img + "img_plantilla.png"} />
        </figure>
        </div>

     <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid img_apoy botonesInactivos" id="ejemplos" data-content= {pdfs.EjemplosTecnicas }  data-typecontent ="pdf"    data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Ejemplos planeamiento" src= {img + "img_ejemplos.png"} />
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