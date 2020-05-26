import React  from 'react';
import assets from '../data/config/config.json';
import pdfJson from "../data/pdf.json";
import dsLinks from "../data/links.json";

const audio = assets.audio;
const img = assets.img.docsOficiales;
const imgGenerales = assets.img.general;
const serv = assets.servidor;
var links = dsLinks[0];

const  pdfs = pdfJson[0];
const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("oficiales");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}

const DocsOficiales = ( props ) => {
  return ( 
    <div className="row">
      <div className="col-4">
            <img className="titulos img-fluid" src={img+"titulo_docs_oficiales.png" } alt="Documentos educativos oficiales" />
               <img  id="imgFondoDescripcion" onClick={reproducirSonido} className="descripciones img-fluid" src={imgGenerales + "caja_descripcion.png"} alt="Descripción" />
              <div onClick={ reproducirSonido  }  id="textoDescripcion" className="texto_descripciones text-justify pr-3">
              <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
              </div>
 
      </div>
     
      <div className="col-8" >

      <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGenerales + "btn_salir.png" }  alt="Salir" />
      </div>

      <div className="row">
            <div className="col-3">
              <figure>
                <img className="botones-portada hvr-pop img-fluid politica ladoDer3" id="politica" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "politica_educativa2.png"}  data-content= { serv + pdfs.Politica_educativa }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Políticas educativas" />
              </figure>
              </div>
            <div className="col-3">
                <figure>
                <img className="botones-portada hvr-pop img-fluid politica ladoDer2" id="fundamentos" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "fundamentos_curriculo2.png"} data-content= {serv + pdfs.Transformacion_curricular }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Fundamentos Currículo" />
              </figure>
            </div>
            <div className="col-3">
                <figure>
              <img className="botones-portada hvr-pop img-fluid politica ladoIzq2" id="programas" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {img + "programas_estudio2.png"} data-content= {pdfs.Tacaco }  data-typecontent ="programasEstudio"  onClick={props.handlerOpenProgramasEducativos}  alt="Programas de estudio de estudio" />
              </figure>
            </div>
            <div className="col-3">
                <figure>
                <img className="botones-portada hvr-pop img-fluid politica ladoIzq3" id="reglamento" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "reglamento2.png"} data-content= {pdfs.Docs_oficiales_REA }  data-typecontent ="evaluacion"  onClick={props.showModal}  alt="Reglamento evaluación" />            
              </figure>
            </div>
        </div>



        <div className="row">
            <div className="col-3">
              <figure>
              <img className="botones-portada hvr-pop img-fluid politica ladoDer3" id="faro" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {img + "faro2.png"}  data-content= {serv + pdfs.Faro }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Faro" />
              </figure>
              </div>
            <div className="col-3">
                <figure>
                <img className="botones-portada hvr-pop img-fluid politica ladoDer2" id="estudiante" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "perfil_estudiantil2.png"}  data-content= {serv + pdfs.Docs_Oficiales_Perfil_Est }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Perfil estudiante" />
              </figure>
            </div>
            <div className="col-3">
            <figure>
              <a href={links.Protocolos} target="_blank" rel="noopener noreferrer"  >
              <img className="botones-portada hvr-pop img-fluid politica ladoIzq2" id="protocolos" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "protocolos_actuacion2.png"}  alt="Protocolos de actuación" />
              </a>
            </figure>
            </div>


            <div className="col-3">
            </div>
        </div>
     


{/*  
        <div className="row">
            <div className="col-4  ladoIzq">
              <figure>
                <img className="botones-portada hvr-pop img-fluid politica" id="politica" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "politica_educativa.png"}  data-content= { serv + pdfs.Politica_educativa }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Políticas educativas" />
              </figure>
              </div>
            <div className="col-4 ">
                <figure>
                <img className="botones-portada hvr-pop img-fluid fundamentos" id="fundamentos" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "fundamentos_curriculo.png"} data-content= {serv + pdfs.Transformacion_curricular }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Fundamentos Currículo" />
              </figure>
            </div>
            <div className="col-4  ladoIzq">
                <figure>
              <img className="botones-portada hvr-pop img-fluid programas" id="programas" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {img + "programas_estudio.png"} data-content= {pdfs.Tacaco }  data-typecontent ="programasEstudio"  onClick={props.handlerOpenProgramasEducativos}  alt="Programas de estudio de estudio" />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            
            <div className="col-4  ladoIzq">
            <figure>
              <img className="botones-portada hvr-pop img-fluid reglamento" id="reglamento" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "reglamento.png"} data-content= {pdfs.Docs_oficiales_REA }  data-typecontent ="evaluacion"  onClick={props.showModal}  alt="Reglamento evaluación" />            
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
              <img className="botones-portada hvr-pop img-fluid faro" id="faro" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {img + "faro.png"}  data-content= {serv + pdfs.Faro }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Faro" />
              
            </figure>
          </div>
          <div className="col-4  ladoIzq">
              <figure>
              <img className="botones-portada hvr-pop img-fluid estudiante" id="estudiante" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={img + "perfil_estudiantil.png"}  data-content= {serv + pdfs.Docs_Oficiales_Perfil_Est }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Perfil estudiante" />
            
            </figure>
          </div>
        </div>
*/}

      </div>
      <audio src={audio+"docs_oficales.mp3"} id="oficiales"   preload="true"  ></audio>

    </div>
   );
}
 
export default DocsOficiales;