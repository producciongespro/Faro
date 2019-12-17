import React  from 'react';
import assets from '../data/config/config_m.json';
//import textos from "../data/textos.json";
import pdfJson from "../data/pdf.json";
//import linksJson from "../data/links.json";
const img = assets.img.docsOficiales;
const img2 = assets.img.general;

const  pdfs = pdfJson[0];

const DocsOficialesMovil =( props ) => {
    return ( 
    <div>   
    <img className="titulos img-fluid" src={img + "titulo_docs_oficiales.png" } alt="Documentos educativos oficiales"  />
   <br/><br/>
    <div className="row">
        <div className="col-2">
    
        </div>
      <div className="col-8" >
        <div className="row">
            <div className="col-4  ladoIzq">
              <figure>
              <a href={pdfs.Politica_educativa}  rel="noopener noreferrer">
                <img className="botones-portada hvr-pop img-fluid politica2" id="politica" data-infosource={5}   src={img + "politica_educativa.png" } data-content= {pdfs.Politica_educativa }  data-typecontent ="pdf"  alt="Políticas educativas" />
                </a>  
              </figure>
              </div>
            <div className="col-4 ">
                <figure>
                <a href={pdfs.Transformacion_curricular}  rel="noopener noreferrer">
                <img className="botones-portada hvr-pop img-fluid fundamentos2" id="fundamentos" data-infosource={5}   src= {img + "fundamentos_curriculo.png" }  data-content= {pdfs.Transformacion_curricular }  data-typecontent ="pdf"  alt="Fundamentos Currículo" />
                </a>  
              </figure>
            </div>
            <div className="col-4  ladoIzq">
                <figure>
              <img className="botones-portada hvr-pop img-fluid programas2" id="programas" data-infosource={5}  src= {img + "programas_estudio.png"} data-content= {pdfs.Tacaco }  data-typecontent ="programasEstudio"  onClick={props.handlerOpenProgramasEducativos}  alt="Programas de estudio de estudio"  />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 fondo" >   
              <img id="transformacion" className="transformacion2" data-infosource={5} src= {img + "transformacion_curricular.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  alt="Transformación curricular" />
            </div>
            <div className="col-4  ladoIzq">
            <figure>
            <a href={pdfs.Docs_oficiales_REA}  rel="noopener noreferrer">
              <img className="botones-portada hvr-pop img-fluid reglamento2" id="reglamento" data-infosource={5} src={img + "reglamento.png" } data-content= {pdfs.Docs_oficiales_REA }  data-typecontent ="pdf"   alt="Reglamento evaluación" />            
              </a>  
            </figure>
            </div>
        </div>
        <div className="row">
          <div className="col-4  ladoIzq">
              <figure>
            
            </figure>
          </div>
          <div className="col-4 ">
              <figure>
              <a href={pdfs.Faro}  rel="noopener noreferrer">
              <img className="botones-portada hvr-pop img-fluid faro2" id="faro" data-infosource={5}   src=  {img + "faro.png"} data-content= {pdfs.Faro }  data-typecontent ="pdf" alt="Faro" />
              </a>  
            </figure>
          </div>
          <div className="col-4  ladoIzq">
              <figure>
              <a href={pdfs.Docs_Oficiales_Perfil_Est}  rel="noopener noreferrer">
              <img className="botones-portada hvr-pop img-fluid estudiante2" id="estudiante" data-infosource={5}  src={img + "perfil_estudiantil.png" }  data-content= {pdfs.Docs_Oficiales_Perfil_Est }  data-typecontent ="pdf"    alt="Perfil estudiante" />
              </a>  
            </figure>
          </div>
         
        </div>
      </div>
      <div className="col-2">
          
      </div>
    </div>
    <br/>
     <div className="row text-center">
           <div className=" col-12">
             <img id="btn-volver-doc"   data-tar="Home" onClick={props.changePage}   className="  hvr-pop"  src= {img2 + "btn_salir.png"}  alt="Salir" />
           </div>
     </div>
    </div> 
   );
}
 
export default DocsOficialesMovil;