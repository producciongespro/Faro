import React from 'react';
import assets from '../data/config/config_m.json';
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";


const img = assets.img.apoyosClimaAula;
const img2 = assets.img.general;
const serv =  assets.servidor;
var pdfs = dsPdfs[0];
//var links = dsLinks[0];


const ApoyoClimaAulaMovil = (props) => {
  return ( 
    <React.Fragment>
    <img   className="titulos img-fluid" src={img + "apoyo_clima_aula_titulo.png" } alt="Apoyo clima en el aula" />
      
    <div className="row">
    
      <div className="col-1">
             
      </div>


      <div  className="col-10">

    

        <div id="botones-aula" className="row">
            <div className="col-6 hvr-pop ">
              <figure>
              <a href={serv + "faro_referencias/3_ref_apoyos__aula/clima/clima_clase.pptx"}  rel="noopener noreferrer">
                  <img className="botones-portada derecha img-fluid" id="pautas" src={img + "pautas.png"} data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Pautas" />                
                </a>
             </figure>
            </div>
            <div className="col-6  hvr-pop"><br/>
              <figure> <a href={serv + "faro_referencias/3_ref_apoyos__aula/clima/clima_escolar.pptx"}  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="climaEscolar"  src={img + "interacciones.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Clima escolar" />
              </a>
              </figure>
            </div>

        </div>
        <div className="row">
          <div className="col-6  hvr-pop">
            <figure>
            <a href={serv + "faro_referencias/3_ref_apoyos__aula/recomend/uso_tiempo_aula.pptx"} rel="noopener noreferrer">
              <img className="botones-portada derecha img-fluid" id="recomendaciones" src={img + "recomendaciones.png" } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1} alt="Recomendaciones" />
              </a>
            </figure>
            </div>
          <div className="col-6  hvr-pop"><br/>
              <figure>
              <a href={serv + "faro_referencias/3_ref_apoyos__aula/inclusion/apoyos_inclusion.zip"}  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="inclusion"  src={img + "inclusion.png" }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Inclusión" />
                </a>
            </figure>
          </div>
          <div className="col-6  hvr-pop">
            <figure>
            <a href={serv + "faro_referencias/3_ref_apoyos__aula/emociones/emociones_motivacion.zip"}  rel="noopener noreferrer">
                <img className="botones-portada derecha img-fluid" id="emociones" src={img + "emociones.png" } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}   alt="Emociones" />  
            </a>
            </figure>
            </div>
          <div className="col-6 hvr-pop"><br/>
              <figure>
              <a href={serv + "faro_referencias/3_ref_apoyos__aula/intercultural/apoyos_educacion_intercultural.pdf"}  rel="noopener noreferrer">
                <img className="botones-portada img-fluid" id="interculturalidad" src={img + "interculturalidad.png"} data-content= {pdfs.InclusionEducativa }  data-typecontent ="pdf" data-infosource={1}  alt="Interculturalidad" />
                </a>
            </figure>
          </div>
  
        
    </div>
    </div>
    <div className="col-1">
             
             </div>
    </div><br/><br/>
    <div className="col-12 text-center">
            <img  data-tar="Home" onClick={props.changePage}   className="centro btn img-fluid hvr-pop"  src= {img2 + "btn_salir.png"}  alt="Salir" />
          </div>

    
   
      </React.Fragment>
   );
}
 
export default ApoyoClimaAulaMovil;