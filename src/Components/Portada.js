import React, { Component } from 'react';
//import BotonNavigation from "./BotonNavigation";


class Portada extends Component {


  mostrarEstado ( ) {
    console.log("Mostrar");
    
    
    
  }


  render() {

          return (
            <div>    
          {
            //console.log(this.props.imgFondo)
            
          } 
          <img data-tar="Home"  onClick={this.props.changePage}  src={this.props.imgFondo.url }  alt="portada" />

            </div>
          );
  }
}

export default Portada;
