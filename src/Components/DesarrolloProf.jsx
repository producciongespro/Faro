import React from 'react';
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";
import assets from '../data/config/config.json';



var pdfs = dsPdfs[0],
links = dsLinks[0];



const audio = assets.audio;
const img = assets.img.desarrolloProfesional;
const imgGeneral = assets.img.general;

const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("desarrollo");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}



const DesarrolloProf = (props) => {

  return ( 
    <React.Fragment>        


<div className="row">
      <div className="col-5 col-derecha">
            <img className="titulos img-fluid" src={img+"titulo_desarrollo.png"} alt="Documentos educativos oficiales" />
               <img  onClick={reproducirSonido} className="descripciones4 img-fluid" src={imgGeneral+"caja_descripcion.png"  } alt="Descripción" />
              <div  onClick={ reproducirSonido  } id="textoDescripcion" className="texto_descripciones text-justify pr-3" >
              <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
              </div>
              <a href={links.IDP} target="_blank" rel="noopener noreferrer"  >
                <img id="material_adicional" className="img-fluid hvr-wobble-bottom" src={img+"enlace_desarrollo.png"} alt="Enlaces desarrollo" />
              </a>             
      </div>

      
          
      <div  className="col-7">

      <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGeneral+"btn_salir.png" }  alt="Salir" />
        </div>


          <img alt="" id="fondo-desarrollo" className="img-fluid" src={img+"fondoDesarrollo2.png"} />
      
      <div  className="row" id="botones-desarrollo">
            <div  className="col-4  hover11 ">
              <figure>
                <img className="botones-portada  img-fluid" id="cursos" src={img+"img_cursos.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.handlerOpenCatalog}  alt="Cursos" />
              </figure>
              </div>
              <div className="col-4  ">

              </div>
            <div className="col-4 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="sitios" src={img+"img_sitios.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.handlerOpenCatalogWeb }  alt="Sitios" />
              </figure>
            </div>

        </div>
        <div className="row botones-inferiores">
          <div  className="col-4 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="videoteca" src={img+"img_videoteca.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}  onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenCatalog}  alt="Videoteca" />
            </figure>
            </div>
          <div className="col-4 centro hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={img+"img_referencias.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="refUtiles" data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Referencias" />
            </figure>
          </div>
          <div className="col-4 hover11 ">
            <figure>
              <img className="botones-portada img-fluid" id="ficha" src={img+"img_otras.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenCatalog}  alt="Otras ofertas" />
            </figure>
            </div>
        </div>
        </div>
  </div>
<br/>
 
    <audio src={audio + "desarrollo_profesional.mp3"} id="desarrollo"   preload="true"  ></audio>

      </React.Fragment>      
   );
}
 
export default DesarrolloProf;