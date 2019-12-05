import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";
import dsZip from "../data/comprimidos.json"
var pdfs = dsPdfs[0];
//var links = dsLinks[0];
var zipDocs = dsZip[0];

const ApoyoClimaAulaMovil = (props) => {
  return ( 
    <React.Fragment>
    <img   className="titulos img-fluid" src={images[0].ApoyoClimaAulaTitulo } alt="Apoyo clima en el aula" />
      
    <div className="row">
    
      <div className="col-1">
             
      </div>


      <div  className="col-10">

    

        <div id="botones-aula" className="row">
            <div className="col-6 hvr-pop ">
              <figure>
              <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/clima_clase.pptx"  rel="noopener noreferrer">
                  <img className="botones-portada derecha img-fluid" id="pautas" src={images[0].ApoyoClimaAulaPautas } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Pautas" />                
                </a>
             </figure>
            </div>
            <div className="col-6  hvr-pop"><br/>
              <figure> <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/clima_escolar.pptx"  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="climaEscolar"  src={images[0].ApoyoClimaAulaClimaEscolar }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Clima escolar" />
              </a>
              </figure>
            </div>

        </div>
        <div className="row">
          <div className="col-6  hvr-pop">
            <figure>
            <a href="https://recursos.mep.go.cr/ws_faro/p06-apoyo-clima-aula/uso_tiempo_aula.pptx" rel="noopener noreferrer">
              <img className="botones-portada derecha img-fluid" id="recomendaciones" src={images[0].ApoyoClimaAulaRecomendaciones } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1} alt="Recomendaciones" />
              </a>
            </figure>
            </div>
          <div className="col-6  hvr-pop"><br/>
              <figure>
              <a href={zipDocs.inclusion}  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="inclusion"  src={images[0].ApoyoClimaAulaInclusion }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Inclusión" />
                </a>
            </figure>
          </div>
          <div className="col-6  hvr-pop">
            <figure>
            <a href={zipDocs.emociones}  rel="noopener noreferrer">
                <img className="botones-portada derecha img-fluid" id="emociones" src={images[0].ApoyoClimaAulaEmociones } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Emociones" />  
            </a>
            </figure>
            </div>
          <div className="col-6 hvr-pop"><br/>
              <figure>
              <img className="botones-portada img-fluid" id="interculturalidad" src={images[0].ApoyoClimaAulaIntercultural } data-content= {pdfs.InclusionEducativa }  data-typecontent ="pdf" data-infosource={1}   alt="Interculturalidad" />
            </figure>
          </div>
  
        
    </div>
    </div>
    <div className="col-1">
             
             </div>
    </div><br/><br/>
    <div className="col-12 text-center">
            <img  data-tar="Home" onClick={props.changePage}   className="centro btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>

    
   
      </React.Fragment>
   );
}
 
export default ApoyoClimaAulaMovil;