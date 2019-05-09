import React, { Component } from 'react';
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
                          { this.props.content }  
                      </div>
                      <img  className="img-ico-audio"  src= {this.images.Audio} onClick={this.playAudio}  alt="Icono activar audio"/>  
                      <img  className="img-ico-close"  src= {this.images.IcoCerrarX} alt="Cerrar modal"/> 
                      <audio src={this.audios.intro}  id="audioIntro" ></audio> 
                      
                                   
                    </React.Fragment>
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
