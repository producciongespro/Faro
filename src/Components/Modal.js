import React, { Component } from 'react';
import $ from 'jquery';
import assets from '../data/config/config.json';

import plantillasGenerales from '../data/documentos/lineamientos_planeamiento_generales.json';
import plantillasPreescolar from '../data/documentos/lineamientos_planeamiento_prescolar.json';
import plantillasPrimaria from '../data/documentos/lineamientos_planeamiento_primaria.json';
import plantillasSecundaria from '../data/documentos/lineamientos_planeamiento_secundaria.json';
import config from '../data/config/config.json';
const serv = config.servidor;


const video = assets.video;
const audio = assets.audio;
const imgGeneral = assets.img.general;
const img = assets.img.desarrolloProfesional;
const imgApoyoPlan = assets.img.apoyosPlan;
const imgHome = assets.img.home;

class Modal extends Component {

  constructor() {
    super();
    this.state = {
      htmlContent: "",
      // ancho_modal : modalScreen
    };
    this.selectTypeContent = this.selectTypeContent.bind(this);
    setTimeout(this.selectTypeContent, 10);
  }

  classModalBody = "modal-body border-modal-body"; // Se agrega "modal-body large cuando carga un pdf"
  modalAncho = "modal-dialog"; // clase que contiene el tamaño del modal
  plantillasDePreescolar = plantillasPreescolar[0];
  plantillasDePrimaria = plantillasPrimaria[0];
  plantillasDeSecundaria = plantillasSecundaria[0];
  plantillasGenerales = plantillasGenerales[0];

  mostrarDiv(e) {
    const opcion = e.target.title;
    $('#' + opcion).slideToggle("slow");

  }

  selectTypeContent() {

    var tmpContent;
    switch (this.props.typeContent) {
      case "video":
        //console.log("Video");       
        this.modalAncho = this.modalAncho + " modal-lg";
        
       tmpContent = (
            <iframe className="borde-video" title="video ministra" width="100%" height="500" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )

        break;
      case "html":
        //console.log("html");        
        tmpContent = this.props.content
        break;
      case "audio":
        //console.log("audio");        
        tmpContent = <audio controls autoPlay src={this.props.content}></audio>
        break;
      case "pdf":
        //console.log("pdf"); 
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " modal-alto";
        tmpContent = <embed src={this.props.content + "#toolbar=1"} type='application/pdf' width='100%' height='100%'></embed>
        break;
      case "help":
        //console.log("pdf"); 
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " borde-modal borde-bottom-amarillo";
        tmpContent =
          <React.Fragment>
            <div>
              <img className="img-fluid  modal-img-titulo" src={imgHome + "caja.png"} alt="fondo indicaciones" />
              <img className="img-ico-audio modal-img-titulo" src={imgGeneral + "audio.png"} onClick={this.playAudio} alt="Icono activar audio" />
              <audio src={audio + "intro.mp3"} id="audioIntro" ></audio>
            </div>
              <p>
                Los recursos de esta caja de herramientas están organizados en seis categorías con el propósito de que usted pueda dirigirse a la sección más atinente a su necesidad de información.  Estas categorías son:
              </p>
              <ul>
                <li>Apoyos para el clima del aula</li>
                <li>Apoyos para la evaluación</li>
                <li>Recursos didácticos</li>
                <li>Documentos oficiales</li>
                <li>Desarrollo profesional</li>
                <li>Apoyos para el planeamiento</li>
              </ul>
              <p>
                Para disponer de los distintos recursos, dé un clic a los diferentes accesorios que acompañan a la imagen de la educadora.  Cada uno de estos objetos representa una de las categorías.  <br />
                Dentro de cada categoría encontrará una descripción de la sección, así como una serie de accesos a documentos, enlaces, plantillas, y otros materiales de utilidad para su quehacer docente.
                          Al colocar el puntero del mouse sobre cada acceso, podrá leer la descripción del recurso específico que se le está proveyendo. <br />
                En las diferentes pantallas que acceda, dispondrá de botones que le permitirá retornar a la pantalla anterior o volver al menú principal.
              </p>
            
          </React.Fragment>
        break;
      case "defHabilidades":
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody +" borde-modal borde-bottom-azul";
        tmpContent = (<React.Fragment>
          <div>
            <img className="img-fluid  modal-img-titulo" src={imgApoyoPlan + "btn_habilidad.png"} alt="fondo indicaciones" />
          </div>
            <h2 className="text-center">Definición</h2>
            <br />Las habilidades son capacidades aprendidas por la población estudiantil,  que utiliza para enfrentar situaciones problemáticas de la vida diaria.  Estas se adquieren mediante el aprendizaje de la experiencia directa, a través del modelado o la imitación, por lo que trasciende la simple transmisión del conocimiento, lo cual promueve la visión y  formación integral  de las personas, de cómo apropiarse del conocimiento sistematizado para crear su propio aprendizaje.
              <br /><br /><br /><br />
              <strong>Fuente</strong> <cite> :   Alfaro et al. Por qué un currículo por habilidades en la reforma curricular de Costa Rica.  Ministerio de Educación Pública, Dirección de Desarrollo Curricular.  </cite>
        </React.Fragment>
        )
        break;

      case "acercaDe":
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody +" borde-modal borde-bottom-turquesa";
        tmpContent = (<React.Fragment>
          <div>
            <img className="img-fluid modal-img-titulo" src={imgHome + "acercade.png"} alt="fondo indicaciones" />
          </div>
                  <strong>Dirección de Recursos Tecnológicos</strong><br />
                  <strong>Departamento de Gestión y Producción</strong><br />
                  Luis Angel Chacón Campos <br />
                  Patricia Hernández Conejo<br />
                  Óscar Pérez Ramírez <br />
                  Ana Teresa Araya Salazar <br />
                  Karla Guevara Murillo <br />
                  <br /><br />

                  <strong>Dirección de Desarrollo Curricular</strong> <br />
                  <strong> Viceministerio Académico</strong><br />
                  Tatiana Navarro Mata<br />
                  Nelson Campos Quesada <br />
                  Henry Arias Guido <br />
              <br />
              <strong>Fuente</strong> <cite> :   MEP.CR  </cite>
            {/* </div> */}
          {/* </div> */}
        </React.Fragment>
        )
        break;


      case "opcOrientaciones":
        // this.modalAncho =  this.modalAncho + " modal-lg";
        //this.classModalBody = this.classModalBody + " modal-alto";
        tmpContent = (<React.Fragment>
          <div className="container">

            <div className="row ">

              <div className="col-4 text-center">


                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_mediacion_pedagogica.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + "ico_pdf.png"} alt="pdf documento general" />
                </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_adultos.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + "ico_pdf.png"} alt="pdf jóvenes y adultos" />
                </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_Preescolar.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + "ico_pdf.png"} alt="pdf educación preescolar" />
                </a>
              </div>

            </div>

            <div className="row">

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_mediacion_pedagogica.pdf"} target="_blank" rel="noopener noreferrer">
                  Orientaciones para la mediación generales
                </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_adultos.pdf"} target="_blank" rel="noopener noreferrer">
                  Orientaciones para la mediación jóvenes y adultos
              </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_Preescolar.pdf"} target="_blank" rel="noopener noreferrer">
                  Orientaciones para la mediación pedagógica por habilidades para la Educación Preescolar
              </a>
              </div>

            </div>

          </div>
        </React.Fragment>
        )
        break;

      case "refUtiles":
        this.modalAncho = this.modalAncho + " modal-lg";
        // this.classModalBody = this.classModalBody + " modal-alto";
        this.classModalBody = this.classModalBody +" borde-modal borde-bottom-celeste";
        tmpContent = (<React.Fragment>
          <div>
            <img className="img-fluid modal-img-titulo" src={img + "btn_referencias.png"} alt="fondo indicaciones" />
          </div>

          {/* <div className="texto-indicaciones">
            <div className="container"> */}
              <h2 className="text-center">Útiles para la docencia</h2>
              {/* <br />

              <div className="col-12"> */}
                <p>
                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/lectura2017.pdf" target="_blank" rel="noopener noreferrer"> <strong> Lectura 2017</strong> </a>  y
                        <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/lectura2018.pdf" target="_blank" rel="noopener noreferrer"><strong> Lectura 2018: </strong>  </a>
                  Se presenta una compilación de actividades de mediación pedagógica, propuestas por docentes de educación primaria de doce Direcciones Regionales, por medio de las cuales se fortalece la comprensión lectora, respondiendo a los momentos de antes, durante y después de la lectura.
                      </p>
                <p>
                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/escritura2017.pdf" target="_blank" rel="noopener noreferrer"><strong>Escritura 2017:</strong>  </a>
                  Se presenta una compilación de actividades de mediación pedagógica, propuestas por docentes de educación primaria de doce Direcciones Regionales, que fomentan la escritura en el estudiantado, en concordancia con el programa de estudio.
                      </p>
                <hr />
                <h5 className="tit_ref2"><strong>Dispositivos Móviles para la Educación:</strong> </h5>
                <p>
                  <a href="https://multimedia.uned.ac.cr/pem/aprendizaje_moviles/pag/conceptos.html" target="_blank" rel="noopener noreferrer"><strong>Aprendizajes Móviles:</strong> </a> Este recurso publicado por la UNED de Costa Rica presenta las principales características de los dispositivos móviles, por un lado, la ubicuidad, en la que se aprende desde cualquier momento y lugar, por otro lado, la adaptabilidad o flexibilidad de estos dispositivos gracias a la conexión e ideas de cómo aprovecharlas en el área educativa.
                      </p>
              {/* </div>
            </div>
          </div> */}
        </React.Fragment>
        )
        break;


      default:
        console.log("Opcion fuera de rango en modal");
        break;
    }

    this.setState({
      htmlContent: tmpContent
    }, () => {
      //console.log("Cambio estado contenido");

    });

  }


  playAudio() {
    let audioIntro = document.getElementById("audioIntro");
    audioIntro.play();
  }



  render() {
    return (

      <div>
        <div className="modal fade show  element-top" id="modalScreen"   >
          <div className={this.modalAncho} role="document">
            {/* <div className="modal-content text-center"> */}
              {/* <div className="col-12 text-right"> */}
              <div className="modal-content">
              <div className="modal-header">
                <button onClick={this.props.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div  className={this.classModalBody} >
                {
                  console.log("classModalBody:", this.classModalBody )
                  
                }
                {this.state.htmlContent}
              </div>

            </div>
          </div>
        </div>

        <div className="modal-backdrop fade show"></div>
      </div>
    );
  }
}

export default Modal;
