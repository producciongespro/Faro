import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ContenidoModal from './ContenidoModal';
import assets from '../data/config/config.json';
import pdfJson from "../data/pdf.json";
import dsLinks from "../data/links.json";

const audio = assets.audio;
const img = assets.img.docsOficiales;
const imgGenerales = assets.img.general;
const serv = assets.servidor;
var links = dsLinks[0];

const pdfs = pdfJson[0];
const reproducirSonido = () => {
  console.log("Audio");

  var tmpAudio = document.getElementById("oficiales");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}



const DocsOficiales = (props) => {

  const [show, setShow] = useState(false);
  const [tituloModal, setTituloModal] = useState(false);
  const handleClose = () => setShow(false);
  const [opcionModal, setOpcionModal] = useState(null);
  const [infoModal, setInfoModal] = useState(null);

  const handleAbriModal = (e) => {
    console.log(e.target.dataset.typecontent);
    setTituloModal(e.target.title);
    setOpcionModal(e.target.dataset.typecontent);
    /**
     * Información adicional para el modal. Por ejemplo en ecaso de pdf es la url del pdf
     */
    e.target.dataset.content && setInfoModal(e.target.dataset.content)
    setShow(true);
  }




  const modal = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title><h3 className="titulo-modal" >{tituloModal}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContenidoModal opcionModal={opcionModal} infoModal={infoModal} />
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <React.Fragment>
      <div className="row">
        {
          /* referencia
          *https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_role
          */
        }
        <div className="col-4" >
          <img
            tabIndex="1" role="banner"
            className="titulos img-fluid"
            src={img + "titulo_docs_oficiales.png"}
            alt="Baner de documentos educativos oficiales" />

          <img
            id="imgFondoDescripcion"
            onClick={reproducirSonido}
            onKeyPress={reproducirSonido}
            className="descripciones img-fluid"
            src={imgGenerales + "caja_descripcion.png"}
            alt="Descripción de la sección documentos oficiales" />

          <div
            tabIndex="2"
            onClick={reproducirSonido}
            id="textoDescripcion"
            className="texto_descripciones text-justify pr-3">
            <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
          </div>

        </div>

        <div className="col-8" >

          <div className="botones_salir col-12">
            <img
              tabIndex="5"
              data-tar="Home"
              role="button"
              onClick={props.changePage}
              onKeyPress={props.changePage}
              className="derecha btn img-fluid hvr-pop"
              src={imgGenerales + "btn_salir.png"}
              alt="regresar a portada"
            />
          </div>

          {
            /**
             * Botones de referencias a documentos educativos oficiales
             */
          }
          <div className="row">
            <div className="col-3">
              <figure role="button">
                <img
                  tabIndex="2"
                  alt="Documento Políticas Educativas"
                  className="botones-portada hvr-pop img-fluid politica ladoDer3"
                  id="politica"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "politica_educativa2.png"}
                  data-content={serv + pdfs.Politica_educativa}
                  data-typecontent="pdf"
                  onClick={handleAbriModal}
                  onKeyPress={handleAbriModal}

                />
              </figure>
            </div>
            <div className="col-3">
              <figure role="button">
                <img
                  tabIndex="3"
                  alt="Política curricular"
                  className="botones-portada hvr-pop img-fluid politica ladoDer2"
                  id="fundamentos"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "fundamentos_curriculo2.png"}
                  data-content={serv + pdfs.Transformacion_curricular}
                  data-typecontent="pdf"
                  onClick={handleAbriModal}
                  onKeyPress={handleAbriModal}

                />
              </figure>
            </div>
            <div className="col-3">
              <figure role="button">
                <img
                  tabIndex="3"
                  alt="Programas de estudio"
                  className="botones-portada hvr-pop img-fluid politica ladoIzq2"
                  id="programas"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "programas_estudio2.png"}
                  data-content={pdfs.Tacaco}
                  data-typecontent="programasEstudio"
                  onClick={props.handlerOpenProgramasEducativos}
                  onKeyPress={props.handlerOpenProgramasEducativos}

                />
              </figure>
            </div>
            <div className="col-3">
              <figure role="button">
                <img
                  tabIndex="3"
                  alt="Reglamento evaluación"
                  className="botones-portada hvr-pop img-fluid politica ladoIzq3"
                  id="reglamento"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "reglamento2.png"}
                  data-content={pdfs.Docs_oficiales_REA}
                  data-typecontent="evaluacion"
                  onClick={handleAbriModal}
                  onKeyPress={handleAbriModal}

                />
              </figure>
            </div>
          </div>



          <div className="row">
            <div className="col-3">
              <figure role="button" >
                <img
                  tabIndex="4"
                  alt="Propuesta Faro"
                  className="botones-portada hvr-pop img-fluid politica ladoDer3"
                  id="faro"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "faro2.png"}
                  data-content={serv + pdfs.Faro}
                  data-typecontent="pdf"
                  onClick={handleAbriModal}
                  onKeyPress={handleAbriModal}

                />
              </figure>
            </div>
            <div className="col-3">
              <figure role="button">
                <img
                  tabIndex="4"
                  alt="Perfil de estudiante"
                  className="botones-portada hvr-pop img-fluid politica ladoDer2"
                  id="estudiante"
                  data-infosource={5}
                  onMouseOver={props.onMouseOver}
                  onMouseOut={props.onMouseOut}
                  src={img + "perfil_estudiantil2.png"}
                  data-content={serv + pdfs.Docs_Oficiales_Perfil_Est}
                  data-typecontent="pdf"
                  onClick={handleAbriModal}
                  onKeyPress={handleAbriModal}

                />
              </figure>
            </div>
            <div className="col-3">
              <figure role="button">
                <a href={links.Protocolos} target="_blank" rel="noopener noreferrer"  >
                  <img
                    tabIndex="4"
                    alt="Protocolos de actuación"
                    role="button"
                    className="botones-portada hvr-pop img-fluid politica ladoIzq2"
                    id="protocolos"
                    data-infosource={5}
                    onMouseOver={props.onMouseOver}
                    onMouseOut={props.onMouseOut}
                    src={img + "protocolos_actuacion2.png"}

                  />
                </a>
              </figure>
            </div>


            <div className="col-3">
            </div>
          </div>


        </div>
        <audio src={audio + "docs_oficales.mp3"} id="oficiales" preload="true"  ></audio>
      </div>
      {modal()}
    </React.Fragment>
  );
}

export default DocsOficiales;