import React, { Component } from 'react';
import $ from 'jquery';
import 'jstree';


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

  

  cargaArbol () {

    console.log("Arbol");
    

    $('#jstree').jstree(); 
    
    $('#jstree').on("changed.jstree", function (e, data) {
        const opc =  data.selected[0];
        console.log(opc);
        
    
    //Caraga los programas de estudio de acuerdo a la selección
    switch (opc) {
      case "primariaCien":
          $("#visorProgramas").html(
            '<a href="nacion.com"> <i class="fas fa-file-pdf"></i> Ciencias primer Ciclo   </a>'  +
            '<br>' + 
            '<a href="nacion.com"> <i class="fas fa-file-pdf"></i> Ciencias Segundo Ciclo   </a>'
            )
        break;
        case "apoyosEducativos":
          $("#visorProgramas").html(
            '<a href="nacion.com"> <i class="fas fa-file-pdf"></i> Educacón Especial Hellen Keller</a>' 
           
            )
        break;
    
      default:
        break;
    }

    });

    $('button').on('click', function () {
      $('#jstree').jstree(true).select_node('child_node_1');
      $('#jstree').jstree('select_node', 'child_node_1');
      $.jstree.reference('#jstree').select_node('child_node_1');
    }); 
    
 
  }





  
  
  selectTypeContent () {    

    var tmpContent;
    
    switch (this.props.typeContent) {
      case "video":
      //console.log("Video");       
        tmpContent = <iframe width="100%" height="400px" src={this.props.content} title="iframe-video" ></iframe>
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
                        <h2 className="text-center">Plantilla Planeamiento</h2>                        
 
                        <hr/>
                        <h4>Plantillas en formato Word</h4>
                        <ul>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/ejemplo_plan_ciencias.docx" > <i className="far fa-file-word"></i> Plan de Ciencias</a>
                          </li>
                          <li>
                            <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/ejemplo_plan_ciencias.docx" > <i className="far fa-file-word"></i> Plan de Estudios sociales</a>
                          </li>
                        </ul>
                        <br/>
                        <a href="https://recursos.mep.go.cr/ws_faro/pdf/apoyos_planeamiento/plantilla/lineamientos.pdf" target ="_blank"  rel="noopener noreferrer" >
                          <strong>
                          <i className="far fa-file-pdf"></i> Lineamientos para completar la plantilla                            
                          </strong>
                        </a>                         

                      </React.Fragment>
                    )
       break;
       case "programasEstudio" :
        this.modalAncho =  this.modalAncho + " modal-lg";
        this.classModalBody = this.classModalBody + " modal-alto";
        tmpContent = ( <React.Fragment>  
          <button onClick={this.cargaArbol} ></button>      
          
<div className="row">
  <div className="col-4" id="jstree" >     
              <ul>
                <li>Educación Preescolar</li>
                <li>
                  Educación Primaria
                  <ul>
                    <li id="primariaCien" >Ciencias</li>
                    <li id="primariaEspa">Español</li>
                    <li id="primariaMate">Matemática</li>
                    <li id="primariaEstu">Estudios Sociales</li>
                    <li id="primariaIngl">Inglés</li>
                    <li id="primariaFran">Francés</li>
                    <li id="primariaItal">Italiano</li>
                  </ul>
                </li>
                <li>Educación Media
                  <ul>
                      <li>Ciencias</li>
                      <li>Español</li>
                      <li>Matemática</li>
                  </ul>
                </li>
                <li id="apoyosEducativos">Apoyos Educativos</li>
                <li>Educación Intercultural</li>
                <li>Educación para jóvenes y adultos</li>
              </ul>            
  </div>


<div className="col-8" id="visorProgramas">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus ut, inventore pariatur in minima, at nostrum, debitis recusandae consectetur adipisci? Rem error atque aliquam ullam magnam quod necessitatibus optio.
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
