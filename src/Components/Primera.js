import React, { Component } from 'react';
//import BotonNavigation from "./BotonNavigation";




class Primera extends Component {

  constructor () {
    super ();
    this.state = {
      nombrePaginga : ""      
    };
    this.mapArea = "";

    
  }


  

  componentDidMount () {
    console.log("Recien montado", this.props.nameCurrentPage);   
}

  componentDidUpdate() {
    console.log("Actualizado", this.props.nameCurrentPage );  
    
}





  createMapping ( ) {
    switch (this.props.nameCurrentPage) {
      case "Portada":
      console.log("Mapeando  Portada"); 
      
      this.mapArea = (
              <map name="image-map">
                  <area  data-tar="Home"  alt="ingresar"  onClick={this.props.changePage}  title="ingresar" href="#" coords="489,508,690,554" shape="rect" />
              </map>
              )                    
      break;

      case "Home":
      console.log("Mapeando Home");
      this.mapArea = (
        <map name="image-map">
          <area data-tar="Portada" alt="Portada" onClick={this.props.changePage}  title="Portada" href="#" coords="66,546,30" shape="circle" />
        </map>
      )
      break;
    
      default:
      console.log("Opción fuera de rango");
      
        break;
    }




  }



  render() {
    // console.log( "Pagina actual:", this.props.nameCurrentPage);
    this.createMapping();

          return (
            <div>              
              <img src={this.props.imgFondo.url }  alt="Imagen de fondo" useMap="#image-map"/>               
              {this.mapArea}       

            </div>
          );
  }


 




}

export default Primera;
