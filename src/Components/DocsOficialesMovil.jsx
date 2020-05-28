import React from 'react';
import assets from '../data/config/config_m.json';
//import textos from "../data/textos.json";
import pdfJson from "../data/pdf.json";
import dsLinks from "../data/links.json";
const img = assets.img.docsOficiales;
const img2 = assets.img.general;
const serv = assets.servidor;
const pdfs = pdfJson[0];
var links = dsLinks[0];
const DocsOficialesMovil = (props) => {
  return (
    <div>
      <img className="titulos img-fluid" src={img + "titulo_docs_oficiales.png"} alt="Documentos educativos oficiales" />
      <br /><br />
      <div className="row">
        <div className="col-2">

        </div>
        <div className="col-8" >
          <div className="row">
            <div className="col-6">
              <figure>
                <a href={serv + pdfs.Politica_educativa} rel="noopener noreferrer">
                  <img className="botones-portada hvr-pop img-fluid" id="politica" data-infosource={5} src={img + "politica_educativa2.png"} data-content={pdfs.Politica_educativa} data-typecontent="pdf" alt="Políticas educativas" />
                </a>
              </figure>
            </div>
            <div className="col-6 ">
              <figure>
                <a href={serv + pdfs.Transformacion_curricular} rel="noopener noreferrer">
                  <img className="botones-portada hvr-pop img-fluid" id="fundamentos" data-infosource={5} src={img + "fundamentos_curriculo2.png"} data-content={pdfs.Transformacion_curricular} data-typecontent="pdf" alt="Fundamentos Currículo" />
                </a>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-6 ">
              <figure>
                <img className="botones-portada hvr-pop img-fluid" id="programas" data-infosource={5} src={img + "programas_estudio2.png"} data-content={pdfs.Tacaco} data-typecontent="programasEstudio" onClick={props.handlerOpenProgramasEducativos} alt="Programas de estudio de estudio" />
              </figure>
            </div>
            <div className="col-6 ">
              <figure>
                <img className="botones-portada hvr-pop img-fluid" id="reglamento" data-infosource={5} src={img + "reglamento2.png"} data-content={pdfs.Docs_oficiales_REA} data-typecontent="evaluacion" onClick={props.showModal} alt="Reglamento evaluación" />
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-6 ">
              <figure>
                <a href={serv + pdfs.Faro} rel="noopener noreferrer">
                  <img className="botones-portada hvr-pop img-fluid" id="faro" data-infosource={5} src={img + "faro2.png"} data-content={pdfs.Faro} data-typecontent="pdf" alt="Faro" />
                </a>
              </figure>
            </div>
            <div className="col-6 ">
              <figure>
                <a href={serv + pdfs.Docs_Oficiales_Perfil_Est} rel="noopener noreferrer">
                  <img className="botones-portada hvr-pop img-fluid" id="estudiante" data-infosource={5} src={img + "perfil_estudiantil2.png"} data-content={serv + pdfs.Docs_Oficiales_Perfil_Est} data-typecontent="pdf" alt="Perfil estudiante" />
                </a>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col-6 ">
              <figure>
                <a href={links.Protocolos} target="_blank" rel="noopener noreferrer"  >
                  <img className="botones-portada hvr-pop img-fluid" id="protocolos" data-infosource={5} src={img + "protocolos_actuacion2.png"} data-content={pdfs.Faro} data-typecontent="pdf" alt="Protocolos de actuación" />
                </a>
              </figure>
            </div>
            <div className="col-6 ">

            </div>
          </div>
       </div>
          <div className="col-2 ">
        
        </div>
      </div>
      <br />
      <div className="row text-center">
        <div className=" col-12">
          <img id="btn-volver-doc" data-tar="Home" onClick={props.changePage} className="  hvr-pop" src={img2 + "btn_salir.png"} alt="Salir" />
        </div>
      </div>
    </div>
  );
}

export default DocsOficialesMovil;