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
                <area data-tar="Portada"  alt="Portada" title="Portada"  onClick={this.props.changePage}  href="#" coords="67,545,28" shape="circle" />
                <area data-tar="Oficiales"  alt="Oficiales" title="Oficiales" onClick={this.props.changePage}  href="#" coords="501,131,567,141,552,237,484,223" shape="poly" />
            </map>
      )
      break;

      case "Oficiales":
      console.log("Mapeando Oficiales");
      this.mapArea = (
              <map name="image-map">
                  <area data-tar="Home" alt="Home" title="Home" onClick={this.props.changePage} href="#" coords="685,554,785,593" shape="rect" />
                  <area data-tar="politica_educativa" onClick={this.props.showModal} alt="politica_educativa" title="politica_educativa"   href="#" coords="275,201,66" shape="circle" />
              </map>
      )
      break;
    
      default:
      console.log("Opción fuera de rango");
      
        break;
    }




  }


  showModal(e) {
    console.log("Show Modal");    
    const tema = e.event.target.dataset.tar;
    console.log("Mostrando modal de", tema);
    
  }



  render() {
    // console.log( "Pagina actual:", this.props.nameCurrentPage);
    this.createMapping();       
          return (
            <div>              
              <img src={this.props.imgFondo }  alt="Imagen de fondo" useMap="#image-map"/>               
              {this.mapArea}       

            </div>
          );
  }


 




}

export default Primera;
