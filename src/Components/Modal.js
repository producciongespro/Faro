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
    this.imgPdf="";
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

console.log("selectTypeContent en ejecución");

    var tmpContent;
    switch (this.props.typeContent) {
      case "video":
        //console.log("Video");       
        this.modalAncho = this.modalAncho + " modal-lg";

        tmpContent = (
          <iframe className="borde-video" title="video ministra" width="100%" height="500" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )

        break;
        case "videoPlan":
          //console.log("Video");       
          this.modalAncho = this.modalAncho + " modal-lg";
  
          tmpContent = (
            <iframe className="borde-video" title="video Planeamiento" width="100%" height="500" src={video.planeamiento} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          )
  
          break;

          case "usoCaja":
            //console.log("Video");       
            this.modalAncho = this.modalAncho + " modal-lg";
    
            tmpContent = (
              <iframe className="borde-video" title="video Uso de la Caja de Herramientas" width="100%" height="500" src={video.usoCajaHerramientas} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
        this.classModalBody = this.classModalBody + " borde-modal borde-bottom-azul";
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

      case "evaluacion":
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " borde-modal borde-bottom-azul";
        tmpContent = (        
          <div className="row">
            <div className="col-sm-12">
              <a target="_blank" rel="noopener noreferrer"
                href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_norma.aspx?param1=NRM&nValor1=1&nValor2=85815&nValor3=111107&strTipM=FN">
                <i className="fas fa-link"></i> Enlace a la ficha del Decreto Ejecutivo 40862 (REA) (enlace que no varía con el tiempo)
              </a>
              <br/>
              <a target="_blank" rel="noopener noreferrer"
                href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=85815">
                <i className="fas fa-link"></i> Enlace al texto vigente del Decreto Ejecutivo 40862 (REA)
            </a>
            </div>
          </div>
        )
        break;

        case "linksVideosPlan":
          this.modalAncho = this.modalAncho + " modal-lg";
          this.classModalBody = this.classModalBody + " borde-modal borde-bottom-azul";
          tmpContent = (        
            <div className="row">
              <div className="col-sm-12">
                <a target="_blank" rel="noopener noreferrer"
                  href="https://youtu.be/bbzdlLlr478">
                  <i className="fas fa-link"></i> Transformación curricular
                </a>
                <br/>
                <a target="_blank" rel="noopener noreferrer"
                  href="https://youtu.be/RHfP979UENg">
                  <i className="fas fa-link"></i> Pensamiento Sistémico
              </a>
              <br/>
                <a target="_blank" rel="noopener noreferrer"
                  href="https://youtu.be/VvWvyqaeWgY">
                  <i className="fas fa-link"></i> Resolución de Problemas
              </a>
              </div>
            </div>
          )
          break;

      case "acercaDe":
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " borde-modal borde-bottom-turquesa";
        tmpContent = (<React.Fragment>
          <div>
            <img className="img-fluid modal-img-titulo" src={imgHome + "creditos.png"} alt="fondo indicaciones" />
          </div>


          <strong> Ministra de Educación</strong><br />
          Giselle Cruz Maduro<br /><br /> 


          <strong> Viceministerio Académico</strong><br />
          Melania Brenes Monge, viceministra<br />
          Henry Arias Guido, asesor nacional<br /> <br />



          <strong>Dirección de Recursos Tecnológicos</strong><br />
          Gabriela Castro Fuentes, directora<br />
          <strong>Departamento de Gestión y Producción</strong><br />
          <strong>Programadores</strong><br />
          Chacón Campos Luis, asesor nacional de informática  <br />
          Hernández Conejo Patricia, asesora nacional de informática <br />
          Pérez Ramírez Óscar, asesor nacional de informática  <br />
          Araya Salazar Ana Teresa, asesora nacional de informática <br />
          <strong> Diseño gráfico </strong><br />
          Guevara Murillo Karla, diseñadora gráfica  <br /><br />



          <strong>Instituto de Desarrollo Profesional</strong> <br />
          <strong>Dpto de Gestión de Recursos</strong><br />
          Ileana Ruiz Rodríguez, jefatura<br />
          Sigifredo Rojas Vargas, asesor nacional<br /><br />


          <strong>Dirección de Desarrollo Curricular</strong> <br />
          Ulate Espinoza María Alexandra, directora<br />
          Villalobos Bolaños Heidy, subdirectora <br />
          Campos Quesada Nelson, asesor nacional <br />
          Navarro Mata Tatiana Maria, investigación educativa <br /> <br />
         

         <strong>Departamento de Educación de la Primera Infancia </strong> <br />
         Alpizar Elizondo Guisselle, jefatura<br />
        Chaves León Gloria Rocío, asesoras nacionales <br />
        Madrigal Rojas  Vera<br />
        López Castillo Carolina<br />
        Madrigal López  Elizabeth <br />
        Díaz Madriz Adriana<br />
        Gamboa Naranjo Gabriela<br />
        Montoya García Ofelia<br />
        Coto Jiménez Johanna<br />
        Chaves Solís Xinia Patricia <br />
        Wong Apuy Maritza<br />
        Guardado García Yamileth<br /><br /> 


          <strong>Departamento de Educación de Personas Jóvenes y Adultos  </strong> <br />
          Alvarado Alvarado Marielos, jefatura<br />
          Aguilar Rojas Jean Carlo<br />
          Benavides Román Luis Miguel<br />
          Cerdas Solano Jaime Guillermo<br />
          Guevara Torres Silvia<br />
          Hérnandez López Manuel<br />
          Rojas Gutiérrez María Isabel<br />
          Umaña Benavides Maritza<br />
          Víquez Ortiz María Fernanda<br />
          Zamora Lazo Patricia<br /><br />



          <strong>Departamento de Educación Intercultural </strong> <br />
          Estrada Torres José Víctor, jefatura <br />
          Smith Castro Anger <br />
          Delgado Morales Patricia<br />
          Pineda Rodríguez Victor<br />
          Santacruz Molina Juan Carlos <br />
          Rojas Chaves Carmen <br />
          González Morales Maylin Eusebia<br />
          Zuñiga Hernandez Fidelia<br />
          Andrade Santos Gerardo<br /><br />

          <strong>Departamento de Educación Religiosa</strong> <br />
          Salazar Porras José Marvin, jefatura<br />
          Fernández Picado Marco Antonio <br />
          Mora Castillo Magalli<br />
          Fallas Mora Seidy<br /><br />


          <strong>Departamento de Evaluación de los Aprendizajes </strong> <br />
          Torres Arias Rocío, jefatura <br />
          Badilla Calderón Lilliam<br />
          Mora Guillén Ivannia <br />
          Leiva Méndez Julio César<br />
          Montoya Vargas Vera Rebeca<br />
          Marchena López Jorge <br />
          Barrantes Benavides Jockling<br /><br />

          <strong>Departamento de Primer y Segundo Ciclo</strong> <br />
          Venegas Fernández Anabelle, jefatura <br />
          Araya Fonseca Evelyn <br />
          Blanco Retana Bismarck <br />
          Calderón Solano Cecilia<br />
          Campos Centeno Ana Isabel <br />
          Valverde Rojas Marjorie<br />
          Fatjó Olasz Olga <br />
          Mena Picado Hermes<br />
          Navarro Garro Richard <br />
          Ramírez Chavarría Rosalia<br />
          Ramírez Vázquez Yaudy <br />
          Rosales Rodríguez María Luisa<br />
          Sequeira Sandoval Johnny <br />
          Solano Navarro Ruth<br />
          Varela Jara Edgar<br />
          Zuñiga Esquivel Xinia Liseth<br /><br />

          <strong>Departamento de Tercer Ciclo y Educación Diversificada </strong> <br />
          Corrales Zuñiga Rigoberto, jefatura <br />
          Aguilar Cabezas Ruth <br />
          Alpízar Mora Karla Gabriela<br />
          Alvarado Cruz  Ángel<br />
          Bermúdez Vives Carlos<br />
          Carvajal Barrantes Marvin<br />
          Chacón Navarro Jonathan Gerardo<br />
          De Lemos Morales Gustavo Adolfo<br />
          Granados Carvajal, María Maleni<br />
          Granados Sirias Marianella<br />
          Hernández  Quesada Oscar F.<br />
          Lara Bolaños Laura<br />
          Lizano Argüello Paula María<br />
          Martínez Rodríguez Roxana<br />
          Montoya Vargas, Luis Ricardo<br />
          Ortega Cordero Alfredo<br />
          Parés Zamora Monserrat <br />
          Parra Brenes Mónica<br />
          Quesada Campos, Yeimy<br />
          Quiros Quiros Hannia<br />
          Ramos Torres Yeimer<br />
          Rodriguez Gonzalez Eugenia M°<br />
          Rivera Espinoza Jenny Patricia<br />
          Salas Fonseca Gina Patricia <br />
          Sandí Ureña Rita<br />
          Serrano Echeverría Juan Pablo <br />
          Sevilla Solano Cecilia <br />
          Villegas Gacía Ana Lorena<br /><br />

          <strong>Departamento de Apoyos Educativos para el Estudiantado con Discapacidad </strong> <br />
          Aguilar Montoya Gilda María, jefatura <br />
          Segura Castillo Mario <br />
          Quirós Acuña Maybel <br />
          Cubero Orias Laura Jenenthe<br />
          Carvajal Granados Laurita <br />
          Jiménez Hidalgo Celia <br />
          Rivera Sánchez Paola <br />
          Barboza Zuñiga Nancy<br />
          Sánchez Duran Sileny <br />
          Fallas Moya Lisandro<br />
          Rodriguez Calvo Mariela<br />
          Alvarez Rodríguez Carolina<br />
          Rojas Vargas Lianeth<br /><br />


          <strong>Unidad de alta Dotación </strong> <br />
          Murillo Mayorga Alexander, jefatura<br />
          Marín Rojas Gina<br />
          Morales Palma Yamilette <br />
          Villalobos Chan Sandra Graciela<br />
          Ramírez Campos Ana Maria<br /><br />


          <strong>Fuente</strong> <cite> :   MEP.Costa Rica - Enero  </cite>
          {/* </div> */}
          {/* </div> */}
        </React.Fragment>
        )
        break;


      case "opcOrientaciones":
        // this.modalAncho =  this.modalAncho + " modal-lg";
        //this.classModalBody = this.classModalBody + " modal-alto";
        var plataformaUsada = sessionStorage.getItem('tipoPlataforma');
        switch (plataformaUsada) {
          case "escritorio": 
                this.imgPdf = "ico_pdf.png";
            break;
            case "movil": 
                this.imgPdf = "ico_pdf_peq.png";
            break;
            default:
              this.imgPdf = "ico_pdf.png";
            break;
        }
          tmpContent = (<React.Fragment>
          <div className="container">

            <div className="row ">

              <div className="col-4 text-center">


                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_mediacion_pedagogica.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + this.imgPdf} alt="pdf documento general" />
                </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_adultos.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + this.imgPdf} alt="pdf jóvenes y adultos" />
                </a>
              </div>

              <div className="col-4 text-center">
                <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_Preescolar.pdf"} target="_blank" rel="noopener noreferrer">
                  <img src={imgGeneral + this.imgPdf} alt="pdf educación preescolar" />
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










        case "opcIncidencias":
          // this.modalAncho =  this.modalAncho + " modal-lg";
          //this.classModalBody = this.classModalBody + " modal-alto";
          var plataformaUsada = sessionStorage.getItem('tipoPlataforma');
          switch (plataformaUsada) {
            case "escritorio": 
                  this.imgPdf = "cons_pedagogica.png";
              break;
              case "movil": 
                  this.imgPdf = "ico_pdf_peq.png";
              break;
              default:
                this.imgPdf2 = "cons_tecnica.png";
              break;
          }
            tmpContent = (<React.Fragment>
            <div className="container">

            <div className="col-12 text-center">
                <h3>Seleccione el tipo de incidencia</h3>
                </div><br/><br/>

              <div className="row ">
                               
                <div className="col-6 text-center">
                    <a href={serv + "faro_referencias/8_ref_apoyos_planea/orientacion/orientaciones_mediacion_pedagogica.pdf"} target="_blank" rel="noopener noreferrer">
                    <img  src={ imgGeneral + "cons_pedagogica.png" }  alt="pdf documento general" />
                  </a>
                </div>
  
                <div className="col-6 text-center">
                <a href="mailto:cajadeherramientas@mep.go.cr"> <img src={ imgGeneral + "cons_tecnica.png" } alt="correo de incidencias: cajadeherramientas@mep.go.cr" /></a> 
                </div>
             
  
              </div>
  
       
  
            </div>
          </React.Fragment>
          )
          break;


















      case "refUtiles":
        this.modalAncho = this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " borde-modal borde-bottom-celeste";
        tmpContent = (<React.Fragment>
          <div>
            <img className="img-fluid modal-img-titulo" src={img + "btn_referencias.png"} alt="fondo indicaciones" />
          </div>

          <h2 className="text-center">Útiles para la docencia</h2>
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

              <div className={this.classModalBody} >
                {
                  console.log("classModalBody:", this.classModalBody)

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
