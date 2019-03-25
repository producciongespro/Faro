import React, { Component } from 'react';
import "./css/master.css";

import images from "./data/images.json";
//Componentes
import Modal from "./Components/Modal";
import Splash from "./Components/Splash";
import Portada from "./Components/Portada";
import Home from "./Components/Home";
import DocsOficiales from "./Components/DocsOficiales";
import DesarrolloProf from "./Components/DesarrolloProf";





class App extends Component {

  

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "Portada",
      currentPage : <Splash  urlImage={images[0].logoFaro }  />,
      modalActive : false,
      modalComponent: "",
      typeContent : ""
    };
    this.changePage = this.changePage.bind(this);    
    this.loadHome = this.loadHome.bind(this); 
    this.showModal = this.showModal.bind(this); 
    this.closeModal = this.closeModal.bind(this); 
    
    setTimeout(() => {
      this.loadHome();
    }, 1000);
 
  }


  loadHome ( ) {    
    this.setState ({      
      nameCurrentPage : "Portada",      
      currentPage : <Portada  changePage={this.changePage}  showModal ={ this.showModal }  />      
    });        
  }



  changePage (e) { 
    e.preventDefault();     
    const targetPage = e.target.dataset.tar;
    var tmpComponent;        
    console.log("Target", targetPage );

    switch (targetPage) {
      case "Portada":
        tmpComponent = <Portada  changePage={this.changePage}/> 
      break;
      case "Home":
        tmpComponent = <Home  changePage={this.changePage}/> 
      break;
      case "DocsOficiales":
        tmpComponent = <DocsOficiales  changePage={this.changePage}/> 
      break;
      case "DesarrolloProf":
        tmpComponent = <DesarrolloProf  changePage={this.changePage}/> 
      break;
    
      default:
      console.log("Opción fuera de rango");
      
        break;
    }
    this.setState({ 
      nameCurrentPage: targetPage      
    }, () => {
       //console.log(this.state.valor) => 1
       console.log( "Página actual", this.state.nameCurrentPage );
       this.setState (
         {
          currentPage:  tmpComponent
         }
       )
    });    
     
  }


  showModal (e ) {
    const content = e.target.dataset.content;
    const typeContent = e.target.dataset.typecontent;
    console.log(content);
    

    this.setState({ 
      modalActive: true,
      typeContent: typeContent
    }, () => {
        console.log("modal activo", this.state.modalActive);
         this.setState ({
          modalComponent : <Modal closeModal={this.closeModal}  content={content[0]} typeContent={this.state.typeContent }   />
         })               
    });  
  }


  closeModal ( ) {
    this.setState({ 
      modalActive: false      
    }, () => {
        console.log("modal activo", this.state.modalActive);                
    });  
  }
 

render() {    
    return (
      <div>
          <div className="contenedor">    
            <div className="visor" >
                {this.state.currentPage}
            </div>        
          </div>
              {this.state.modalActive? this.state.modalComponent : "" }        
       </div>
    );
  }






}

export default App;
