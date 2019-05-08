import React from 'react';
import textos from "../data/textos.json";
import images from "../data/images.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0];
//var links = dsLinks[0];

const ApoyosPlan = (props) => {
  return ( 
    <div>
    <div  className="row">
  <div className="col-5">
        <img className="titulos img-fluid" src={images[0].TituloApoyos  } alt="Documentos educativos oficiales" />
           <img className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" />
          <div id="textoDescripcion">          
            {  props.infoCategory }
            { console.log(props.infoCategory) }
          </div>
          
  </div>
  <div id="botones-planeamiento" className="col-7">
    <div id="botones-aula" className="row">

      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid" id="plantilla" src={images[0].ApoyosPlantilla} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver}  alt="Apoyos para el planeamiento"  />
        </figure>
        </div>
        <div className="col-2" >
        </div>
      <div className="col-10 hover11 ">
        <figure>
          <img className="botones-portada derecha img-fluid" id="guia" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver}  alt="Apoyos para el planeamiento" src={images[0].ApoyosGuia  } />
        </figure>
        </div>
        <div className="col-2">
        </div>
      <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid" id="ejemplos" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  data-infosource={2} onMouseOver={props.onMouseOver}  alt="Ejmeplos planeamiento" src={images[0].ApoyosEjemplo  } />
        </figure>
      </div>
      <div className="col-2">
      </div>

      <div className="col-10 hover11 centro">
          <figure>
              <img className="botones-portada derecha img-fluid" id="enfoque" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver}  alt="Enofque por habilidaes" src={images[0].ApoyosPlanHabilidades  } />
        </figure>
      </div>
      <div className="col-2">
      </div>

  </div>
    </div>
</div>
<br/><br/>
  <div className="row">
  <div className="col-12 pie">
    <img data-tar="Home" onClick={props.changePage} className="img-fluid btn hvr-pop"  alt="Salir" src={images[0].BtnSalir } />
  </div>
  </div>
 </div>
   );
}
 
export default ApoyosPlan;