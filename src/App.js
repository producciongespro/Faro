import React, { Component } from 'react';
import "./css/master.css";
import "./css/home.css";


import images from "./data/images.json";
//Componentes
import Modal from "./Components/Modal";
import Splash from "./Components/Splash.jsx";
import Portada from "./Components/Portada.jsx";
import Home from "./Components/Home.jsx";
import DocsOficiales from "./Components/DocsOficiales.jsx";
import DesarrolloProf from "./Components/DesarrolloProf.jsx";
import ApoyosPlan from "./Components/ApoyosPlan.jsx";
import ApoyosEvaluacion from "./Components/ApoyosEvaluacion.jsx";
import RecursosDidacticos from "./Components/RecursosDidacticos.jsx";
import ApoyoClimaAula from "./Components/ApoyoClimaAula.jsx";
import Catalogo from "./Components/Catalogo.jsx";


class App extends Component { 

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "Splash",
      currentPage : <Splash  urlImage={images[0].logoFaro }  />,
      modalActive : false,
      modalComponent: "",
      typeContent : "",
      infoCategory : ""
    };          
    
  }

  tmpComponent=""

  detalles = {
    tacaco : "El TACACO es una planta trepadora endémica de Costa Rica, familia de las cucurbitáceas, y que produce un fruto comestible verde, ovoide, de unos siete centímetros de longitud.​ La parte comestible es una pulpa contenida en una bolsa fibrosa dentro de la cual hay una pepita aplastada y amarga que se extrae previamente.",
    cursos : "Estos son los cursos para llevar" ,
    sitios : "sitios web recomendados",
    videoteca : "Videoteca de videoconferencias",
    pautas : "Pautas, bla bla bla",
    ficha : "Ficha ficha ficha"

  }

componentDidMount ( ) {
    setTimeout(() => {
      this.loadPortada();
    }, 1000);
  }


  loadPortada = ( )  => {     
    //Método que carga la Portada
    this.setState ({      
      nameCurrentPage : "Portada",      
      currentPage : <Portada  changePage={this.changePage}  showModal ={ this.showModal }  />      
    });        
  }



  changePage = (e) => { 
    e.preventDefault();     
    const targetPage = e.target.dataset.tar;
    var tmpComponent;        
    //console.log("Target", targetPage );

    switch (targetPage) {
      case "Portada":
        tmpComponent = <Portada showModal={this.showModal}  changePage={this.changePage}/> 
      break;
      case "Home":
        tmpComponent = <Home showModal={this.showModal}  changePage={this.changePage}/> 
      break;
      case "DocsOficiales":
        tmpComponent = <DocsOficiales  showModal={this.showModal}     changePage={this.changePage}/> 
      break;
      case "ApoyosPlan":
        tmpComponent = <ApoyosPlan  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "ApoyosEvaluacion":
          tmpComponent = <ApoyosEvaluacion  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "RecursosDidacticos":
        tmpComponent = <RecursosDidacticos  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "ApoyoClimaAula":
          tmpComponent = <ApoyoClimaAula  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "DesarrolloProf":
        tmpComponent = <DesarrolloProf   infoCategory={this.state.infoCategory}   onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}  showModal={this.showModal} changePage={this.changePage}/> 
      break;

    
      default:
        console.log("Opción fuera de rango");      
      break;
    }
    this.setState({ 
      nameCurrentPage: targetPage         
    }, () => {
       //console.log(this.state.valor) => 1
       //console.log( "Página actual", this.state.nameCurrentPage );
       this.setState (
         {
          currentPage:  tmpComponent,
          infoCategory: this.detalles.tacaco
         }
       )
    });  
    
    this.tmpComponent= tmpComponent;
     
  }


  handlerOpenCatalog = () => {
    this.setState ({
      currentPage : <Catalogo/>
    })
  }


  showModal = (e) => {
    const content = e.target.dataset.content;
    const typeContent = e.target.dataset.typecontent;
    console.log(content);
    

    this.setState({ 
      modalActive: true,
      typeContent: typeContent
    }, () => {
        console.log("modal activo", this.state.modalActive);
         this.setState ({
          modalComponent : <Modal closeModal={this.closeModal}  content={content} typeContent={this.state.typeContent }   />
         })               
    });  
  }


  closeModal = ( ) => {
    this.setState({ 
      modalActive: false      
    }, () => {
        console.log("modal activo", this.state.modalActive);                
    });  
  }


handlerShowInfoCategories = (e) => {
  let opcion = e.target.id; 
  //console.log(opcion);
  console.log(this.detalles[opcion]);

this.setState((state, props) => ( {
  infoCategory: this.detalles[opcion],
  currentPage:  this.tmpComponent
} ))


/*
  this.setState({
    infoCategory: this.detalles[opcion]
  })
  
*/
  
}
 

render() {    
    return (      
      <div className="visor" >
            {this.state.currentPage}                          
            {this.state.modalActive? this.state.modalComponent : "" }        
      </div>
    );
  }

}

export default App;
