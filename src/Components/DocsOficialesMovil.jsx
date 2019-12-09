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
                <img className="botones-portada hvr-pop img-fluid" id="politica2" data-infosource={5}   src={img + "politica_educativa.png" } data-content= {pdfs.Politica_educativa }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Políticas educativas" />
              </figure>
              </div>
            <div className="col-4 ">
                <figure>
                <img className="botones-portada hvr-pop img-fluid" id="fundamentos2" data-infosource={5}   src= {img + "fundamentos_curriculo.png" }  data-content= {pdfs.Transformacion_curricular }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Fundamentos Currículo" />
              
              </figure>
            </div>
            <div className="col-4  ladoIzq">
                <figure>
              <img className="botones-portada hvr-pop img-fluid" id="programas2" data-infosource={5}  src= {img + "programas_estudio.png"} data-content= {pdfs.Tacaco }  data-typecontent ="programasEstudio"  onClick={props.handlerOpenProgramasEducativos}  alt="Programas de estudio de estudio"  />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 fondo" >   
              <img id="transformacion2" className="" data-infosource={5} src= {img + "transformacion_curricular.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  alt="Transformación curricular" />
            </div>
            <div className="col-4  ladoIzq">
            <figure>
              <img className="botones-portada hvr-pop img-fluid" id="reglamento2" data-infosource={5} src={img + "reglamento.png" } data-content= {pdfs.Docs_oficiales_REA }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Reglamento evaluación" />            
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
              <img className="botones-portada hvr-pop img-fluid" id="faro2" data-infosource={5}   src=  {img + "faro.png"} data-content= {pdfs.Faro }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Faro" />
              
            </figure>
          </div>
          <div className="col-4  ladoIzq">
              <figure>
              <img className="botones-portada hvr-pop img-fluid" id="estudiante2" data-infosource={5}  src={img + "perfil_estudiantil.png" }  data-content= {pdfs.Docs_Oficiales_Perfil_Est }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Perfil estudiante" />
            
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