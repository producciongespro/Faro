import React, { Component } from 'react';
import Modal from "./Modal";




class Primera extends Component {

  constructor () {
    super ();
    this.state = {
      modalComponent : "Nulo",
      modalVisible :   false,
      nameModal : "",
      titleModal : ""
    };
    this.mapArea = "";
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    
  }


  

  componentDidMount () {
    console.log("Recien montado", this.props.nameCurrentPage);   
}

  componentDidUpdate() {
    console.log("Actualizado", this.props.nameCurrentPage ); 
    console.log(this.state.modalVisible);
     
    
}

showModal(e) {
  e.preventDefault();  

  this.setState({ 
    modalVisible : true,
    nameModal : e.target.dataset.tar,
    titleModal : e.target.title
  }, () => {     
        console.log( "state.nameModal:", this.state.nameModal );
        console.log( "state.titleModal:", this.state.titleModal );
        
     this.setState (
       {
        modalComponent : <Modal  hideModal={this.hideModal}  label={this.state.titleModal} nameModal={this.state.nameModal}  />
       }
     )
  }); 



  
}


hideModal() {
  this.setState ({
    modalVisible : false
  })
}



  createMapping ( ) {
    switch (this.props.nameCurrentPage) {
      case "Portada":
      console.log("Mapeando  Portada"); 
      
      this.mapArea = (
              <map name="image-map">
                  <area  data-tar="Home"  alt="ingresar"  onClick={this.props.changePage}  title="ingresar" href="Home" coords="489,508,690,554" shape="rect" />
              </map>
              )                    
      break;

      case "Home":
      console.log("Mapeando Home");
      this.mapArea = (
            <map name="image-map">
                <area data-tar="Portada"  alt="Portada" title="Portada"  onClick={this.props.changePage}  href="Portada" coords="67,545,28" shape="circle" />
                <area data-tar="Oficiales" alt="Oficiales" title="Oficiales" onClick={this.props.changePage}  href="Oficiales" coords="501,131,567,141,552,237,484,223" shape="poly" />
            </map>
      )
      break;

      case "Oficiales":
      console.log("Mapeando Oficiales");
      this.mapArea = (
        <map name="image-map">
            <area   onClick={this.showModal } data-tar="Politica_educativa"  alt="Política educativa" title="Política educativa" href="Politica_educativa" coords="272,202,63" shape="circle" />
            <area  data-tar="Perfil_docente"  onClick={this.showModal }  alt="Perfil docente" title="Perfil docente" href="Perfil_docente" coords="401,77,68" shape="circle" />
            <area  data-tar="Home" onClick={this.props.changePage}  alt="Inicio" title="Inicio" href="Home" coords="679,551,785,596" shape="rect" />
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
              <img src={this.props.imgFondo }  alt="Imagen de fondo" useMap="#image-map"/>               
              {this.mapArea}
              {this.state.modalVisible? this.state.modalComponent: ""  }       

            </div>
          );
  }


 




}

export default Primera;
