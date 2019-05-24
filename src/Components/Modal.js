import React, { Component } from 'react';
import $ from 'jquery';
import imagesJson from "../data/images.json";
import audiosJson from "../data/audios.json";
import plantillasGenerales from '../data/documentos/lineamientos_planeamiento_generales.json';
import plantillasPreescolar from '../data/documentos/lineamientos_planeamiento_prescolar.json';
import plantillasPrimaria from '../data/documentos/lineamientos_planeamiento_primaria.json';
import plantillasSecundaria from '../data/documentos/lineamientos_planeamiento_secundaria.json';


class Modal extends Component {

  constructor () {
    super ();
    this.state = {
      htmlContent : ""      
    };
    this.selectTypeContent = this.selectTypeContent.bind(this);
    setTimeout( this.selectTypeContent, 10 );
  }

    images = imagesJson[0];
    audios = audiosJson[0];
    classModalBody = "modal-body"; // Se agrega "modal-body large cuando carga un pdf"
    modalAncho = "modal-dialog"; // clase que contiene el tamaño del modal
    plantillasDePreescolar = plantillasPreescolar[0];
    plantillasDePrimaria = plantillasPrimaria[0];
    plantillasDeSecundaria = plantillasSecundaria[0];
    plantillasGenerales = plantillasGenerales[0];

    mostrarDiv (e){
      const opcion = e.target.title;
        $('#'+opcion).slideToggle("slow");
         
    }
 
  
  selectTypeContent () {    

    var tmpContent;
    
    switch (this.props.typeContent) {
      case "video":        
      //console.log("Video");       
        this.modalAncho =  this.modalAncho + " modal-lg";          
        tmpContent = <video controls width="100%" src={this.props.content} type="video/mp4" autoPlay  ></video>
      break;
      case "html":
      //console.log("html");        
        tmpContent = this.props.content
      break;
      case "audio":
      //console.log("audio");        
        tmpContent =  <audio controls  autoPlay src={this.props.content}></audio>                   
      break;
      case "pdf":
      //console.log("pdf"); 
      this.modalAncho =  this.modalAncho + " modal-lg";
      this.classModalBody = this.classModalBody + " modal-alto";
        tmpContent = <embed  src={this.props.content+"#toolbar=1" }    type='application/pdf' width='100%' height='100%'></embed>                  
      break;
      case "help":
      //console.log("pdf"); 
            this.modalAncho =  this.modalAncho + " modal-lg";
            this.classModalBody = this.classModalBody + " modal-alto";
              tmpContent =   
                    <React.Fragment>
                      <div>
                        <img  className="img-fluid"  src= {this.images.BgIndicaciones} alt="fondo indicaciones"/>  
                      </div>
                      <div className="texto-indicaciones">

                      <p>
                          Los recursos de esta caja de herramientas están organizados en seis categorías con el propósito de que usted pueda dirigirse a la sección más atinente a su necesidad de información.  Estas categorías son:
                          </p>
                          <ul>
                            <li>Apoyos para el clima del aula</li>
                            <li>Apoyos para la evaluación</li>
                            <li>Documentos oficiales</li>
                            <li>Desarrollo profesional</li>
                            <li>Apoyos para el planeamiento</li>
                          </ul>
                          <p>
                          Para disponer de los distintos recursos, de un clic a los diferentes accesorios que acompañan a la imagen de la educadora.  Cada uno de estos objetos representa una de las categorías.  
                          A su vez, dentro de cada categoría encontrará una descripción de la sección, así como una serie de accesos a documentos, enlaces, plantillas, y otros materiales de utilidad para su quehacer docente. Al colocar el puntero del mouse sobre cada acceso, podrá leer la descripción del recurso específico que se le está proveyendo.
                          En las diferentes pantallas que acceda, dispondrá de botones que le permitirá retornar a la pantalla anterior o volver al menú principal.
                          </p>

                      </div>
                      <img  className="img-ico-audio"  src= {this.images.Audio} onClick={this.playAudio}  alt="Icono activar audio"/>                                         
                      <audio src={this.audios.intro}  id="audioIntro" ></audio>                                                       
                    </React.Fragment>
      break;
      case "plantillaPlan" :
      this.modalAncho =  this.modalAncho + " modal-lg";
      this.classModalBody = this.classModalBody + " modal-alto";
      tmpContent = ( <React.Fragment>
                        <img className="bannerModal"  src={this.images.bannerPlantillas} alt=""/>              

                        <hr/>
                        <h2 className="btn btn-primary" title="plantillas" onClick={this.mostrarDiv} >Plantillas en formato Word</h2>
                        <div id="plantillas"  className="div-oculta">
                        <ul>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/ejemplo_plan_ciencias.docx" > <i className="far fa-file-word"></i> Plan de Ciencias</a>
                          </li>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/ejemplo_plan_ciencias.docx" > <i className="far fa-file-word"></i> Plan de Estudios sociales</a>
                          </li>
                        </ul>
                        </div>
                        <br/>
                        <h2 className="btn btn-primary" title="lineamientos" onClick={this.mostrarDiv} >Lineamientos para completar las plantillas</h2>
                        <div id="lineamientos" className="div-oculta">
                            <table className="tg">
                              <tr>
                                <th className="tg">Preescolar</th>
                                <th className="tg">Primaria</th>
                                <th className="tg">Secundaria</th>
                                <th className="tg">Generales</th>
                              </tr>
                              <tr>
                                <td className="tg">
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Prescolar</a> 
                                </td>
                                <td className="tg">
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Español</a><br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Matemática</a> <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Ciencias</a> <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Estudios Sociales</a>  <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Educación física</a><br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Artes plásticas</a> <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Música</a> <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Artes industriales</a> <br/>  
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Educación para el hogar</a> <br/>
                                  <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Religión</a> 
                                </td>
                                <td className="tg">
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Español (programa viejo)</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Español (progama nuevo)</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Matemática</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Ciencias</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Biología</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Química</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Física</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Estudios sociales</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Cívica</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Psicologia</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Filosofía</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Afectividad y sexualidad</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Educación física</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Artes plásticas</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Música</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Artes industriales</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Educación para el hogar</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Religión</a><br/>
                                </td>
                                <td className="tg">
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Lineamientos para planeamiento (general)</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Inglés (primaria y secundaria - Plan nuevo)</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Ingles (primaria y secundaria - Plan viejo)</a><br/>
                                <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf">Inglés (primaria y secundaria)</a><br/>
                                </td>
                              </tr>
                            </table>
                         
                        </div>

                        <br/>
                        <h2 className="btn btn-primary" title="ejemplosPlan" onClick={this.mostrarDiv} >Ejemplos</h2>
                        <div id="ejemplosPlan" className="div-oculta">
                        <ul>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf"> <i className="far fa-file-pdf"></i> Ejemplo biología</a><br/>
                          </li>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf"><i className="far fa-file-pdf"></i> Ejemplo ciencias</a> <br/>
                          </li>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/tacaco.pdf"><i className="far fa-file-pdf"></i> Ejemplo Español</a> <br/>
                          </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    )
       break; 
       case "defHabilidades" :
        this.modalAncho =  this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " modal-alto";
        tmpContent = ( <React.Fragment>
                          <h2 className="text-center">Concepto de Habilidades</h2>                        
                          <h3 className="text-center">Ministerio de Educación Pública</h3>
                          <br/>
                          <div className="container">
                            <div className="row ">
                                <div className="col-12 text-justify">
                                  Las habilidades son capacidades aprendidas por la población estudiantil,  que utiliza para enfrentar situaciones problemáticas de la vida diaria.  Estas se adquieren mediante el aprendizaje de la experiencia directa, a través del modelado o la imitación, por lo que trasciende la simple transmisión del conocimiento, lo cual promueve la visión y  formación integral  de las personas, de cómo apropiarse del conocimiento sistematizado para crear su propio aprendizaje.
                                </div>
                            </div>
                          
   
                          <br/>
                          <strong>Fuente</strong> <cite> :   Alfaro et al. Por qué un currículo por habilidades en la reforma curricular de Costa Rica.  Ministerio de Educación Pública, Dirección de Desarrollo Curricular.  </cite>
                          </div>         


                        </React.Fragment>
                      )
         break;
         
         case "refUtiles" :
          this.modalAncho =  this.modalAncho + " modal-lg";
          this.classModalBody = this.classModalBody + " modal-alto";
          tmpContent = ( <React.Fragment>                
                  <div className="row">
                    <div className="col-12 text-center">
                      <h3>Referencias útiles para la docencia</h3>
                    </div>
                  </div>
                  <br/>
                  <div className="ro">
                    <div className="col-12">
                      <p>
                        <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/lectura2017.pdf" target = "_blank"  rel="noopener noreferrer"> Lectura 2017  </a> y 
                        <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/lectura2018.pdf" target = "_blank" rel="noopener noreferrer"> Lectura 2018 </a>: 
                         Se presenta una compilación de actividades de mediación pedagógica, propuestas por docentes de educación primaria de doce Direcciones Regionales, por medio de las cuales se fortalece la comprensión lectora, respondiendo a los momentos de antes, durante y después de la lectura. 
                      </p>
                      <p>
                      <a href="https://recursos.mep.go.cr/ws_faro/pdf/desarrollo_prof/ref_utilies/escritura2017.pdf" target = "_blank" rel="noopener noreferrer">Escritura 2017  </a>:
                      Se presenta una compilación de actividades de mediación pedagógica, propuestas por docentes de educación primaria de doce Direcciones Regionales, que fomentan la escritura en el estudiantado, en concordancia con el programa de estudio.
                      </p>
                      <h5>Dispositivos móviles para la educación</h5>
                      <p>                     
                          <a href="https://multimedia.uned.ac.cr/pem/aprendizaje_moviles/pag/conceptos.html" target = "_blank" rel="noopener noreferrer"> Aprendizajes Móviles </a> Este recurso publicado por la UNED de Costa Rica presenta las principales características de los dispositivos móviles, por un lado, la ubicuidad, en la que se aprende desde cualquier momento y lugar, por otro lado, la adaptabilidad o flexibilidad de estos dispositivos gracias a la conexión e ideas de cómo aprovecharlas en el área educativa.
                      </p>
                    </div>
                  </div>



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


  playAudio () {
    let audioIntro = document.getElementById("audioIntro");
    audioIntro.play();
  }



  render() {    
      
    return (      

      <div>
    <div className="modal fade show" id="modalScreen"   >
        <div className= {this.modalAncho}   role="document">
          <div className="modal-content">

        <div className="col-12 text-right">
                <button   onClick={this.props.closeModal}  type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
        </div>
   
            <div className= {this.classModalBody } >
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
