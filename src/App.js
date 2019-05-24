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
import CatalogoWeb from './Components/CatalogoWeb';
import Catalogo from "./Components/Catalogo";
import ProgramasEstudio from './Components/ProgramasEstudio';



//Json
import images from "./data/images.json";
import descripciones from "./data/descripciones/descripciones.json";




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
    }, 500);
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
        tmpComponent = <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal}  handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos}   changePage={this.changePage}/> 
      break;
      case "ApoyosPlan":
        tmpComponent = <ApoyosPlan  showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={ this.handlerShowInfoGeneral}   onMouseOver={ this.handlerShowInfoCategories} changePage={this.changePage}  handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos}     /> 
      break;
      case "ApoyosEvaluacion":
          tmpComponent = <ApoyosEvaluacion  infoCategory={descripciones[3].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "RecursosDidacticos":
        tmpComponent = <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={ this.handlerShowInfoGeneral} onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "ApoyoClimaAula":
          tmpComponent = <ApoyoClimaAula infoCategory={descripciones[1].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog}  showModal={this.showModal} changePage={this.changePage}/> 
      break;
      case "DesarrolloProf":
        tmpComponent = <DesarrolloProf   infoCategory={descripciones[0].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}   handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal}   /> 
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


  //Métodos de Programas de estudio ------------------------------------

  handlerOpenProgramasEducativos = (e) => {
    const id = e.target.id;
    console.log("id", id);
       
    this.setState ({
      currentPage : <ProgramasEstudio   idCat={id}  handlerCloseProgramasEducativos={ () => this.handlerCloseProgramasEducativos (id, e )   } />
    })
  }


  handlerCloseProgramasEducativos = (id) => {
    

    console.log("Boton-", id  );

    if (id === "programas" ) {
        this.setState ({
          currentPage :  <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={ this.handlerShowInfoGeneral}   handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos}   onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal}     changePage={this.changePage}/>       
        })      
    }
    if (id === "plantilla") {
      this.setState ({
        currentPage :  <ApoyosPlan  showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={ this.handlerShowInfoGeneral}   onMouseOver={ this.handlerShowInfoCategories} changePage={this.changePage}  handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos}     /> 
      }) 
    }
    

 
  }

// Fin de métodos de Programas de estudio -------------------------------





//Métodos de catologo ------------------------------------

  handlerOpenCatalog = (e) => {
    const id = e.target.id;    
    this.setState ({
      currentPage : <Catalogo   idCat={id}  handlerCloseCatalog={ this.handlerCloseCatalog} />
    })
  }


  handlerCloseCatalog = () => {
    this.setState ({
      currentPage : <DesarrolloProf   infoCategory={descripciones[0].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}   handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal}   /> 
    })
  }

// Fin de métodos de catalogo -------------------------------



//Método para abrir catálogo web -----------------------------------------
handlerOpenCatalogWeb = (e) => {  
  this.setState ({
    currentPage : <CatalogoWeb     handlerCloseCatalogWeb={ this.handlerCloseCatalogWeb} />
  })
}


handlerCloseCatalogWeb = (e) => {  
  e.preventDefault();
  console.log(e.target);
  
  this.setState ({
    currentPage : <DesarrolloProf   infoCategory={descripciones[0].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}   handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal}   /> 
  })
}
//Fin Método para abrir catálogo web -----------------------------------------


showModal = (e) => {
    const content = e.target.dataset.content;
    const typeContent = e.target.dataset.typecontent;
    //console.log(content);   
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


  
handlerShowInfoCategories (e) {
/*  Muestra en la caja de texto de la izquierda la información de cada botón con el fin de contextalizar 
al usuario de lo que va  a acceder.
Se ejecuta con el evento "mouseover" */
  let opcion = e.target.id; 
  let infoSource = e.target.dataset.infosource;  
  //console.log("infoSource",infoSource);  
  //console.log(opcion);  
  document.getElementById("textoDescripcion").innerHTML = "<h2 class='desc'>Descripción:</h2>" + descripciones[infoSource][opcion];  
}



handlerShowInfoGeneral (e) {
/*  Muestra la información general de la categoría. Este método se ejecuta con el evento 
"mouseOut" de los botones  */
  let infoSource = e.target.dataset.infosource;
  //console.log("Mouse out", infoSource ); 
  document.getElementById("textoDescripcion").innerHTML = "<h2 class='desc'>Descripción:</h2>" + descripciones[infoSource].general;    
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
