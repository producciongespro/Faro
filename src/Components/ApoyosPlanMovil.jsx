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


const ApoyosPlanMovil = (props) => {
  return (
    <div>
        <br/>
  <img className="titulos img-fluid" src={images[0].TituloApoyos  } alt="Documentos educativos oficiales" /> 
<div  className="row">
    <div className="col-2">
    </div>
    <div  className="col-8">
    <br/><br/>
        <div className="">
            <figure>
              <img className=" img-fluid  hvr-pop" id="definicionHabilidades" data-content= {pdfs.Tacaco }  data-typecontent ="defHabilidades"  onClick={props.showModal} data-infosource={2}  alt="Enofque por habilidaes" src={images[0].ApoyosPlanHabilidades  } />
            </figure>
        </div>
        <div className="">
            <figure>
                <img className=" img-fluid  hvr-pop" id="orientaciones"   data-typecontent ="opcOrientaciones"  onClick={props.showModal}  data-infosource={2}  alt="Apoyos para el planeamiento" src={images[0].ApoyosGuia  } />
            </figure>
        </div>
        <div className="">
            <figure>
                <img className=" derecha img-fluid  hvr-pop" id="plantilla" src={images[0].ApoyosPlantilla}  data-typecontent ="plantillaPlan"  onClick={props.handlerOpenBuscadorPlaneamiento}  data-infosource={2}    alt="Apoyos para el planeamiento"  />
            </figure>
        </div>
        <div className=""><br/><br/>
          <figure>
              <img className=" derecha img-fluid hvr-pop" id="ejemplos" data-content= {pdfs.EjemplosTecnicas }  data-typecontent ="pdf"  onClick={props.showModal}  data-infosource={2}  alt="Ejemplos planeamiento" src={images[0].ApoyosEjemplo  } />
            </figure>
        </div>
    </div>
    <div className="col-2">
    </div>
</div>
   

<br/><br/>
<div class="row">
    <div className="col-1">   
    </div>
    <div className="col-4">          
        <div className="row img_btn_der">
                <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoDidac} alt="Planeamiento Didáctico"/>
        </div> 
    </div>
    <div className="col-4">        
            <div className="row img_btn_der">
                <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada hvr-pop"   src={images[0].ApoyosPlaneamientoCorrel} alt="Planeamiento Correlacionado"/>
            </div>
    </div>
    <div className="col-1"> 
    </div>
</div>    
<audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_plan.mp3" id="planeamiento"   preload="true"  ></audio>
<br/>
<div class="row">
    <div className="text-center col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
    </div>
</div>
</div>
   );
}
 
export default ApoyosPlanMovil;