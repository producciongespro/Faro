import React from 'react';
//import textos from "../data/textos.json";
import images from "../data/images.json";
import dsPdfs from "../data/pdf.json";
import textosJson from "../data/textos.json";
//import dsLinks from "../data/links.json";

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
                <img className="titulos img-fluid" src={images[0].TituloApoyos  } alt="Documentos educativos oficiales" />
                  <img onClick={reproducirSonido}   className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" />
                  <div onClick={ reproducirSonido  } id="textoDescripcion" className="texto_descripciones text-justify pr-3">          
                  <h2 className='desc'>Descripción:</h2>  {  props.infoCategory }            
                  </div>

                  <div className="row img_btn_der">
                  <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoDidac} alt="Planeamiento Didáctico"/>
                  </div>

                  <div className="row img_btn_der">
                  <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoCorrel} alt="Planeamiento Correlacionado"/>
                  </div>
          </div>

        
  <div  className="col-7">

      <div className="botones_salir col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
      </div>


    <div id="botones-planeamiento" className="row">
    <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid img_apoy" id="definicionHabilidades" data-content= {pdfs.Tacaco }  data-typecontent ="defHabilidades"  onClick={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Enofque por habilidaes" src={images[0].ApoyosPlanHabilidades  } />
        </figure>
      </div>
      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid img_apoy" id="orientaciones"   data-typecontent ="opcOrientaciones"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Apoyos para el planeamiento" src={images[0].ApoyosGuia  } />
        </figure>
        </div>
      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid img_apoy" id="plantilla" src={images[0].ApoyosPlantilla}  data-typecontent ="plantillaPlan"  onClick={props.handlerOpenBuscadorPlaneamiento}  data-infosource={2} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }    alt="Apoyos para el planeamiento"  />
        </figure>
        </div>

      <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid img_apoy" id="ejemplos" data-content= {pdfs.EjemplosTecnicas }  data-typecontent ="pdf"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } alt="Ejemplos planeamiento" src={images[0].ApoyosEjemplo  } />
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
<audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_plan.mp3" id="planeamiento"   preload="true"  ></audio>

 </div>
   );
}
 
export default ApoyosPlan;