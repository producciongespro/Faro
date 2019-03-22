import React, { Component } from 'react';
import urlPdf from "../data/pdf.json";



class Modal extends Component {
  render() {
    return (
      <div className="modal" >     
        <div  className="row-encabezado" >
        <span  onClick={this.props.hideModal}  className="char-boton" >X</span>
        </div>
        <h1> {this.props.label } </h1>

        
        <hr/>       

        <embed  src={urlPdf[0][this.props.nameModal] } type='application/pdf' width='100%' height='100%'></embed>



      </div>
    );
  }
}

export default Modal;
