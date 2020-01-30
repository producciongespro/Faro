import React from 'react';
//import textos from "../data/textos.json";
// import images from "../data/images.json";
import assets from '../data/config/config_m.json';
import dsPdfs from "../data/pdf.json";
import textosJson from "../data/textos.json";
//import dsLinks from "../data/links.json";
const img = assets.img.apoyosPlan;
const img2 = assets.img.general;
const textos = textosJson[0];
var pdfs = dsPdfs[0];
//var links = dsLinks[0];

const ApoyosPlanMovil = (props) => {
  return (
    <div>
        <br/>
  <img className="titulos img-fluid" src={img + "titulo.png" } alt="Documentos educativos oficiales" /> 
<div  className="row">
    <div className="col-2">
    </div>
    <div  className="col-8">
    <br/><br/>
        <div className="">
            <figure>
              <img className=" img-fluid  hvr-pop" id="definicionHabilidades" data-content= {pdfs.Tacaco }  data-typecontent ="defHabilidades"  onClick={props.showModal} data-infosource={2}  alt="Enofque por habilidaes" src={img + "img_enfoque_habilidades.png" } />
            </figure>
        </div>
        <div className="">
            <figure>
                <img className=" img-fluid  hvr-pop" id="orientaciones"   data-typecontent ="opcOrientaciones"  onClick={props.showModal}  data-infosource={2}  alt="Apoyos para el planeamiento" src={img + "img_guia.png"  } />
            </figure>
        </div>
        <div className="">
            <figure>
                <img className="  img-fluid  hvr-pop" id="plantilla" src={img + "img_plantilla.png" }  data-typecontent ="plantillaPlan"  onClick={props.handlerOpenBuscadorPlaneamiento}  data-infosource={2}    alt="Apoyos para el planeamiento"  />
            </figure>
        </div>
        <div className="">
          <figure>
          <span   rel="noopener noreferrer">
              <img className="  img-fluid hvr-pop" id="ejemplos"  id="ejemplos"  onClick={props.showModal} data-typecontent ="linksVideosPlan"   data-content= {pdfs.EjemplosTecnicas }   data-infosource={2} alt="Ejemplos planeamiento"  data-infosource={2}  alt="Ejemplos planeamiento" src={img + "img_ejemplos.png"  } />
         </span> 
            </figure>
        </div>
    </div>
    <div className="col-2">
    </div>
</div>
   

<br/>
<div class="row ">
   
    <div className="col-5 text-center">          
        <div className="">
                <img id="planDidactico"  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoPlaneamientoDidactico} className="img-fluid botones-portada hvr-pop"   src={img + "planeamiento_didactico.png" } alt="Planeamiento Didáctico"/>
        </div> 
    </div>
    <div className="col-5 text-center">        
            <div className="">
                <img id="correlacionado"  data-typecontent ="video" data-content= {textos.VideoPlaneamientoCorrelacionado } className="img-fluid botones-portada botonesInactivos"   src={img + "planeamiento_correlacionado.png" } alt="Planeamiento Correlacionado"/>
            </div>
    </div>
    <div className="col-1"> 
    </div>
</div>    
<audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_plan.mp3" id="planeamiento"   preload="true"  ></audio>
<br/>
<div class="row">
    <div className="text-center col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {img2 + "btn_salir.png" }  alt="Salir" />
    </div>
</div>
</div>
   );
}
 
export default ApoyosPlanMovil;