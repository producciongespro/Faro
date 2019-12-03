import React, { Component } from 'react';
//CSS
import "./css/animate.css";
import "./css/master.css";
import "./css/home.css";

//Componentes
import Modal from "./Components/Modal";
import Splash from "./Components/Splash.jsx";
import Portada from "./Components/Portada.jsx";
import Home from "./Components/Home.jsx";
import DocsOficiales from "./Components/DocsOficiales.jsx";
import DocsOficialesMovil from "./Components/DocsOficialesMovil.jsx";
import DesarrolloProf from "./Components/DesarrolloProf.jsx";
import DesarrolloProfMovil from "./Components/DesarrolloProfMovil.jsx";
import ApoyosPlan from "./Components/ApoyosPlan.jsx";
import ApoyosPlanMovil from "./Components/ApoyosPlanMovil.jsx";
import ApoyosEvaluacion from "./Components/ApoyosEvaluacion.jsx";
import ApoyosEvaluacionMovil from "./Components/ApoyosEvaluacionMovil.jsx";
import RecursosDidacticos from "./Components/RecursosDidacticos.jsx";
import Construccion from "./Components/Construccion.jsx";
import RecursosDidacticosMovil from "./Components/RecursosDidacticosMovil.jsx";
import ApoyoClimaAula from "./Components/ApoyoClimaAula.jsx";
import ApoyoClimaAulaMovil from "./Components/ApoyoClimaAulaMovil.jsx";
import CatalogoWeb from './Components/CatalogoWeb';
import Catalogo from "./Components/Catalogo";
import TagsInfo from './Components/Tags_info';
import Buscador from './Components/Buscador';
import BuscadorPlaneamiento from './Components/BuscadorPlaneamiento';
import HomeMovil from './Components/HomeMovil';
import PortadaMovil from './Components/PortadaMovil';
import EvaluacionCategorias from './Components/EvaluacionCategorias';
import EjemplosItemes from './Components/EjemplosItemesEvaluacion';
import DocumentosEvaluacion from './Components/DocumentosEvaluacion';




//Json
import images from "./data/images.json";
import descripciones from "./data/descripciones/descripciones.json";

class App extends Component {

  constructor() {
    super();
    this.state = {
      nameCurrentPage: "Splash",
      currentPage: <Splash urlImage={images[0].logoFaro} />,
      modalActive: false,
      modalComponent: "",
      typeContent: ""
    };
    this.plataforma = this.detectarPlataforma();
  }



  componentDidMount() {
    setTimeout(() => {
      this.loadPortada();
    }, 500);
  }


  detectarPlataforma() {
    let plataforma = navigator.platform;
    switch (plataforma) {
      case "Linux armv7l":
      case "Linux armv8l":
      case "iPhone":
        plataforma = "movil";
        break;
      case "win32":
        plataforma = "escritorio";
        break;
      default:
        plataforma = "escritorio";
        break;
    }
    sessionStorage.setItem("tipoPlataforma", plataforma);
    return plataforma;
  }


  loadPortada = () => {
    //Método que carga la Portada   

    switch (this.plataforma) {
      case "escritorio":
        this.setState({
          nameCurrentPage: "Portada",
          currentPage: <Portada changePage={this.changePage} showModal={this.showModal} />
        });
        break;
      case "movil":
        this.setState({
          nameCurrentPage: "Portada",
          currentPage: <PortadaMovil changePage={this.changePage} showModal={this.showModal} />
        });
        break;

      default:
        this.setState({
          nameCurrentPage: "Portada",
          currentPage: <Portada changePage={this.changePage} showModal={this.showModal} />
        });
        break;
    }

  }

  cargarHome = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpHome;
    //console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpHome = <HomeMovil showModal={this.showModal} changePage={this.changePage} />
        break;
      case "escritorio":
        tmpHome = <Home showModal={this.showModal} changePage={this.changePage} />
        break;

      default:
        tmpHome = <Home showModal={this.showModal} changePage={this.changePage} />
        break;
    }
    return tmpHome;

  }

  cargarClima = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpClima;
    console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpClima = <ApoyoClimaAulaMovil infoCategory={descripciones[1].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} showModal={this.showModal} changePage={this.changePage} />
        break;
      case "escritorio":
        tmpClima = <ApoyoClimaAula infoCategory={descripciones[1].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} showModal={this.showModal} changePage={this.changePage} />
        break;

      default:
        tmpClima = <ApoyoClimaAula infoCategory={descripciones[1].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} showModal={this.showModal} changePage={this.changePage} />
        break;
    }
    return tmpClima;

  }

  cargarEvaluacion = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpEvaluacion;
    console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpEvaluacion = <ApoyosEvaluacionMovil infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        break;
      case "escritorio":
        tmpEvaluacion = <ApoyosEvaluacion infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        break;

      default:
        tmpEvaluacion = <ApoyosEvaluacion infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        break;
    }
    return tmpEvaluacion;

  }

  cargarDocumentos = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpDocumentos;
    console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpDocumentos = <DocsOficialesMovil infoCategory={descripciones[5].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos} changePage={this.changePage} />
        break;
      case "escritorio":
        tmpDocumentos = <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos} changePage={this.changePage} />
        break;

      default:
        tmpDocumentos = <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos} changePage={this.changePage} />
        break;
    }
    return tmpDocumentos;

  }

  cargarRecursos = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpDocumentos;
    console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpDocumentos = <RecursosDidacticosMovil infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        break;
      case "escritorio":
        tmpDocumentos = <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        break;

      default:
        tmpDocumentos = <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        break;
    }
    return tmpDocumentos;

  }

  cargarDesarrollo = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpDocumentos;
    console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpDocumentos = <DesarrolloProfMovil infoCategory={descripciones[0].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal} />
        break;
      case "escritorio":
        tmpDocumentos = <DesarrolloProf infoCategory={descripciones[0].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal} />
        break;

      default:
        tmpDocumentos = <DesarrolloProf infoCategory={descripciones[0].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal} />
        break;
    }
    return tmpDocumentos;

  }


  cargarPlaneamiento = () => {
    //cualquier tontera
    //Realiza la comprobación del tipo de dispositivo para cargar
    // un home para dispotivos moviles
    let tmpDocumentos;
    //console.log("Plataforma", this.plataforma);
    switch (this.plataforma) {
      case "movil":
        //Carga componente 
        tmpDocumentos = <ApoyosPlanMovil showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} changePage={this.changePage} />
        break;
      case "escritorio":
        tmpDocumentos = <ApoyosPlan showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} changePage={this.changePage} />
        break;

      default:
        tmpDocumentos = <ApoyosPlan showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} changePage={this.changePage} />
        break;
    }
    return tmpDocumentos;

  }

  changePage = (e) => {
    e.preventDefault();
    const targetPage = e.target.dataset.tar;
    var tmpComponent;
    //console.log("Target", targetPage );

    switch (targetPage) {
      case "Portada":
        //tmpComponent = <Portada showModal={this.showModal}  changePage={this.changePage}/>         
        this.loadPortada();
        break;
      case "Home":
        //tmpComponent = <Home showModal={this.showModal}  changePage={this.changePage}/> 
        tmpComponent = this.cargarHome();
        break;
      case "DocsOficiales":
        tmpComponent = this.cargarDocumentos();
        //tmpComponent = <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal}  handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos}   changePage={this.changePage}/> 
        break;
      case "ApoyosPlan":
        tmpComponent = this.cargarPlaneamiento();
        break;
      case "ApoyosEvaluacion":
        tmpComponent = this.cargarEvaluacion();
        //tmpComponent = <ApoyosEvaluacion  infoCategory={descripciones[3].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage}  handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} /> 
        break;
      case "RecursosDidacticos":
        tmpComponent = this.cargarRecursos();
        //tmpComponent = <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={ this.handlerShowInfoGeneral} onMouseOver={ this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage}/> 
        break;
      case "ApoyoClimaAula":
        tmpComponent = this.cargarClima();
        // tmpComponent = <ApoyoClimaAula infoCategory={descripciones[1].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog}  showModal={this.showModal} changePage={this.changePage}/> 
        break;
      case "DesarrolloProf":
        tmpComponent = this.cargarDesarrollo();
        // tmpComponent = <DesarrolloProf   infoCategory={descripciones[0].general} onMouseOut={ this.handlerShowInfoGeneral}  onMouseOver={ this.handlerShowInfoCategories}  handlerOpenCatalog={this.handlerOpenCatalog}   handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal}   /> 
        break;
      case "Construccion":
        tmpComponent = <Construccion handlerCerrarEnconstruccion={this.handlerCerrarEnconstruccion} />
        break;
      case "DocumentosEvaluacion":
            tmpComponent = <DocumentosEvaluacion  handlerCerrarDocumentosEvaluacion={this.handlerCerrarDocumentosEvaluacion}  />
            break;
      default:
        console.log("Opción fuera de rango");
        break;
    }

    if (targetPage !== "Portada") {
      this.setState({
        nameCurrentPage: targetPage
      }, () => {
        //console.log(this.state.valor) => 1
        //console.log( "Página actual", this.state.nameCurrentPage );
        this.setState(
          {
            currentPage: tmpComponent
          }
        )
      });
    }
  }



  handlerCerrarEnconstruccion = () => {
    this.setState({ currentPage: this.cargarRecursos() });
  }

  handlerCerrarDocumentosEvaluacion = () => {
    this.setState({ currentPage: this.cargarEvaluacion() });
  }

  //Abrir buscador de recursos

  handlerOpenBuscador = (e) => {
    let origen = e.target.id;
    //console.log(origen);
    this.setState({
      currentPage: <Buscador origen={origen} handlerCerrarBuscador={this.handlerCerrarBuscador} />
    });
  }

  handlerCerrarBuscador = () => {
    switch (this.plataforma) {
      case "movil":
        this.setState({
          currentPage: <RecursosDidacticosMovil infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        });
        break;
      case "escritorio":
        this.setState({
          currentPage: <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        });
        break;
      default:
        this.setState({
          currentPage: <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenBuscador={this.handlerOpenBuscador} changePage={this.changePage} />
        });
        break;
    }
  }



  // ************ Buscador Apoyos Planeamiento  

  handlerOpenBuscadorPlaneamiento = (e) => {
    this.setState({ currentPage: <BuscadorPlaneamiento handlerCloseBuscadorPlaneamiento={this.handlerCloseBuscadorPlaneamiento} /> });
  }

  handlerCloseBuscadorPlaneamiento = (e) => {
    switch (this.plataforma) {
      case "movil":
        this.setState({
          currentPage: <ApoyosPlanMovil showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} />
        });
        break;
      case "escritorio":
        this.setState({
          currentPage: <ApoyosPlan showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} />
        });
        break;

      default:
        this.setState({
          currentPage: <ApoyosPlan showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenBuscadorPlaneamiento={this.handlerOpenBuscadorPlaneamiento} />
        });
        break;
    }



  }


  //************************************


  //Métodos de Programas de estudio ------------------------------------

  handlerOpenProgramasEducativos = (e) => {
    const id = e.target.id;
    console.log("id", id);
    this.setState({
      currentPage: <TagsInfo idCat={id} handlerCloseProgramasEducativos={() => this.handlerCloseProgramasEducativos(id, e)} />
    })
  }


  handlerCloseProgramasEducativos = (id) => {
    console.log("Boton-", id);

    if (id === "programas") {
      this.setState({
        currentPage: <DocsOficiales infoCategory={descripciones[5].general} onMouseOut={this.handlerShowInfoGeneral} handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} />
      })
    }
    if (id === "plantilla") {
      this.setState({
        currentPage: <ApoyosPlan showModal={this.showModal} infoCategory={descripciones[2].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} changePage={this.changePage} handlerOpenProgramasEducativos={this.handlerOpenProgramasEducativos} />
      })
    }
  }

  // Fin de métodos de Programas de estudio -------------------------------





  //Métodos de catologo ------------------------------------

  handlerOpenCatalog = (e) => {
    const id = e.target.id;
    this.setState({
      currentPage: <Catalogo idCat={id} handlerCloseCatalog={() => this.handlerCloseCatalog(id)} />
    })
  }


  handlerCloseCatalog = (id) => {
    console.log("Destino", id);
    if (id === "preescolar" || id === "primaria" || id === "secundaria") {
      this.setState({
        currentPage: <RecursosDidacticos infoCategory={descripciones[4].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} showModal={this.showModal} changePage={this.changePage} />
      });
    };

    if (id === "cursos" || id === "videoteca" || id === "ficha") {
      console.log("ID DIP");
      this.setState({
        currentPage: <DesarrolloProf infoCategory={descripciones[0].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal} />
      });
    }
  }

  // Fin de métodos de catalogo -------------------------------



  //Método para abrir catálogo web -----------------------------------------
  handlerOpenCatalogWeb = (e) => {
    this.setState({
      currentPage: <CatalogoWeb handlerCloseCatalogWeb={this.handlerCloseCatalogWeb} />
    })
  }


  handlerCloseCatalogWeb = (e) => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      currentPage: <DesarrolloProf infoCategory={descripciones[0].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} handlerOpenCatalog={this.handlerOpenCatalog} handlerOpenCatalogWeb={this.handlerOpenCatalogWeb} changePage={this.changePage} showModal={this.showModal} />
    })
  }
  //Fin Método para abrir catálogo web -----------------------------------------


  //Método para abrir Categorías evaluación -----------------------------------------
  handlerAbrirCategoriasEvaluacion = (e) => {
    const origen = e.target.dataset.origen;
    console.log("origen", origen);
    this.setState({
      currentPage: <EvaluacionCategorias origen={origen} handlerCerrarCategoriasEvaluacion={this.handlerCerrarCategoriasEvaluacion} handlerAbrirEjemplosItemes={this.handlerAbrirEjemplosItemes} />
    })
  }


  handlerCerrarCategoriasEvaluacion = (e) => {
    e.preventDefault();
    //console.log(e.target); 
    switch (this.plataforma) {
      case "movil":
        this.setState({
          currentPage: <ApoyosEvaluacionMovil infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        });
        break;
      case "escritorio":
        this.setState({
          currentPage: <ApoyosEvaluacion infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        });
        break;
      default:
        this.setState({
          currentPage: <ApoyosEvaluacion infoCategory={descripciones[3].general} onMouseOut={this.handlerShowInfoGeneral} onMouseOver={this.handlerShowInfoCategories} showModal={this.showModal} changePage={this.changePage} handlerAbrirCategoriasEvaluacion={this.handlerAbrirCategoriasEvaluacion} />
        });
        break;
    }
  }
  //Fin Método para abrir Categorías evaluación -----------------------------------------



  //Método para abrir ejemplos itemes evaluación -----------------------------------------
  handlerAbrirEjemplosItemes = (e) => {
    this.setState({
      currentPage: <EjemplosItemes handlerCerrarEjemplosItemes={this.handlerCerrarEjemplosItemes} />
    })
  }


  handlerCerrarEjemplosItemes = (e) => {
    e.preventDefault();
    //console.log(e.target);  
    this.setState({
      currentPage: <EvaluacionCategorias origen="Componentes de la calificación" handlerCerrarCategoriasEvaluacion={this.handlerCerrarCategoriasEvaluacion} handlerAbrirEjemplosItemes={this.handlerAbrirEjemplosItemes} />
    })
  }
  //Fin Método para abrir Categorías evaluación -----------------------------------------


  showModal = (e) => {
    const content = e.target.dataset.content;
    const typeContent = e.target.dataset.typecontent;
    //console.log(content);   
    this.setState({
      modalActive: true,
      typeContent: typeContent
    }, () => {
      console.log("modal activo", this.state.modalActive);
      this.setState({
        modalComponent: <Modal closeModal={this.closeModal} content={content} typeContent={this.state.typeContent} />
      })
    });
  }


  closeModal = () => {
    this.setState({
      modalActive: false
    }, () => {
      console.log("modal activo", this.state.modalActive);
    });
  }



  handlerShowInfoCategories(e) {
    /*  Muestra en la caja de texto de la izquierda la información de cada botón con el fin de contextalizar 
    al usuario de lo que va  a acceder.
    Se ejecuta con el evento "mouseover" */
    let opcion = e.target.id;
    let infoSource = e.target.dataset.infosource;
    //console.log("infoSource",infoSource);  
    //console.log(opcion);  
    document.getElementById("textoDescripcion").innerHTML = "<h2 class='desc'>Descripción:</h2>" + descripciones[infoSource][opcion];


  }



  handlerShowInfoGeneral(e) {
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
        {this.state.modalActive && this.state.modalComponent}

      </div>
    );
  }

}

export default App;
