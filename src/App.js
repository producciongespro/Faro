import React, { Component } from 'react';
//CSS
import "./css/master.css";
import "./css/home.css";

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
import Catalogo from "./Components/Catalogo";


//Json
import images from "./data/images.json";
import descripciones from "./data/descripciones/descripciones.json";
import DetallesPlanenamiento from "./data/planeamiento/descripciones.json";
import DetallesRecursos from "./data/recursos/descripciones.json";
import DetallesEvaluacion from "./data/evaluacion/descripciones.json";
import DetallesAula from "./data/clima_aula/descripciones.json";
import DetallesDocumentos from "./data/documentos/descripciones.json";


console.log(descripciones[2].general );




class App extends Component { 

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "Splash",
      currentPage : <Splash  urlImage={images[0].logoFaro }  />,
      modalActive : false,
      modalComponent: "",
      typeContent : ""      
    };          
    
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
        tmpComponent = <ApoyosPlan  showModal={this.showModal} infoCategory={descripciones[2].general}   onMouseOver={ this.handlerShowInfoCategories} changePage={this.changePage}/> 
      break;
      case "ApoyosEvaluacion":
          tmpComponent = <ApoyosEvaluacion  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "RecursosDidacticos":
        tmpComponent = <RecursosDidacticos  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "ApoyoClimaAula":
          tmpComponent = <ApoyoClimaAula infoCategory={descripciones[1].general} onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "DesarrolloProf":
        tmpComponent = <DesarrolloProf   infoCategory={descripciones[0].general}   onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}  showModal={this.showModal} changePage={this.changePage}/> 
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
          currentPage:  tmpComponent          
         }
       )
    });       
     
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
  let infoSource = e.target.dataset.infosource;  
  console.log("infoSource",infoSource);  
  //console.log(opcion);  
  document.getElementById("textoDescripcion").innerHTML =  descripciones[infoSource][opcion];  
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
