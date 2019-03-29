import React, { Component } from 'react';



class Modal extends Component {

  constructor () {
    super ();
    this.state = {
      htmlContent : ""
    };
    this.selectTypeContent = this.selectTypeContent.bind(this);

    setTimeout( this.selectTypeContent, 10 );
  }


  
  
  selectTypeContent () {
    var tmpContent;
    switch (this.props.typeContent) {
      case "video":
      console.log("Video");      
        tmpContent = <iframe width="100%" height="400px" src={this.props.content} title="iframe-video" ></iframe>
      break;
      case "html":
      console.log("html");      
        tmpContent = this.props.content
      break;
      case "audio":
      console.log("audio");      
        tmpContent =  <audio controls  autoPlay src={this.props.content}></audio>                   
      break;
      case "pdf":
      console.log("pdf");      
        tmpContent = <embed  src={this.props.content+"#toolbar=1" }    type='application/pdf' width='100%' height='100%'></embed>                  
      break;
    
      default:
        console.log("Opcion fuera de rango en modal");        
      break;
    }

    this.setState({ 
      htmlContent: tmpContent      
    }, () => {
       //console.log(this.state.valor) => 1
       
    }); 

  }



  render() {    
      
    return (      
      <div>
    <div className="modal fade show" id="modalScreen"   >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">

        <div className="col-12 text-right">
                <button   onClick={this.props.closeModal}  type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
        </div>
   
            <div className="modal-body">
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
