import React, { Component } from 'react';
import $ from 'jquery';
import imagesJson from "../data/images.json";
import audiosJson from "../data/audios.json"




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

    mostrarDiv (){
      $("#plantillas").slideDown("slow")
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
                        <img className="bannerModal" src={this.images.bannerPlantillas} alt=""/>              

                        <hr/>
                        <h2 className="btn btn-primary"  onClick={this.mostrarDiv} >Plantillas en formato Word</h2>
                        <div id="plantillas" className="div-oculta">
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
                        <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/lineamientos.pdf" target ="_blank"  rel="noopener noreferrer" >
                          <strong>
                          <i className="far fa-file-pdf"></i> Lineamientos para completar la plantilla                            
                          </strong>
                        </a>                         

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
