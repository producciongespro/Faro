import React, { Component } from 'react';

//import $ from 'jquery';

//Data json
//Media (Secundaria) :
import mediaPDf from '../data/documentos/programas_pdf_media.json';
import materiasMedia from '../data/documentos/programas_materias_media.json';

//Primaria:
import primaPDF from '../data/documentos/programas_pdf_primaria.json';
import materiasPrima from '../data/documentos/programas_materias_primaria.json';

//Apoyo (Educación Especial)
import apoyoPDF from '../data/documentos/programas_pdf_apoyo.json';
import materiasApoyo from '../data/documentos/programas_materias_apoyo.json';

//Intercultural:
import intercultPDF from '../data/documentos/programas_pdf_intercult.json';
import materiasIntercultural from '../data/documentos/programas_materias_intercult.json';

// Jóvenes y adultos
import adultosPDF from '../data/documentos/programas_pdf_adultos.json';
import materiasAdultos from '../data/documentos/programas_materias_adultos.json';


//Preescolar
import preescolarPDF from '../data/documentos/programas_pdf_preescolar.json';
import materiasPreescolar from '../data/documentos/programas_materias_preescolar.json';







class ProgramasEstudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programaActual : "",
      botonera : <span> Oprima cualquier boton para seleccionar la categoría... </span>, 
      ciclo1 : "",
      ciclo2 :"",      
      ciclo1_2 : "",
      ciclo3 : "",
      ciclo4 : "",
      ciclo5 : "",
      especial : ""      
     };     
     this.botonesNav="";
     this.urlImgtitulo="";
  }



  componentWillMount ( ) {
    console.log(this.props.idCat);
    if (this.props.idCat === "programas" ) {
      this.urlImgtitulo = "https://recursos.mep.go.cr/ws_faro/p3-documentos-oficiales/proramas_titulo.png";
      
      this.botonesNav = (
            <React.Fragment>
                <div className="col-2">
                  <button  id="btnPreescolar" className="btn btn-outline-primary btn-block"   onClick={this.cargaBotones} > Educ. Preescolar </button>      
                </div>
                <div className="col-2">
                  <button id="btnPrimaria" className="btn btn-outline-info btn-block"   onClick={this.cargaBotones} > Educ. Primaria </button>      
                </div>
                <div className="col-2">
                  <button  id="btnMedia" className="btn btn-outline-success btn-block"  onClick={this.cargaBotones} > Educ. Media </button>      
                </div>
                <div className="col-2">
                  <button id="btnIntercultural" className="btn btn-outline-danger btn-block"  onClick={this.cargaBotones} > Educ. Intercultural </button>      
                </div>
                <div className="col-2">
                  <button id="btnAdultos"  className="btn btn-outline-warning btn-block"  onClick={this.cargaBotones} > Educ. Jóvenes y Adultos </button>      
                </div>
                <div className="col-2">
                  <button id="btnApoyo" className="btn btn-outline-dark btn-block"  onClick={this.cargaBotones} > Apoyos Educativos </button>      
                </div>
            </React.Fragment>
      )


    };
    if (this.props.idCat === "plantilla") {
      this.urlImgtitulo = "https://recursos.mep.go.cr/ws_faro/p03-apoyos-plan/plantilla_planeamiento.png";
      this.botonesNav = (
        <React.Fragment>
            <div className="col-2">
              <button  id="btnPreescolar" className="btn btn-outline-primary btn-block"   onClick={this.cargaBotonesPlantilla} > Educ. Preescolar </button>      
            </div>
            <div className="col-2">
              <button id="btnPrimaria" className="btn btn-outline-info btn-block"   onClick={this.cargaBotonesPlantilla} > Educ. Primaria </button>      
            </div>
            <div className="col-2">
              <button  id="btnMedia" className="btn btn-outline-success btn-block"  onClick={this.cargaBotonesPlantilla} > Educ. Media </button>      
            </div>
            <div className="col-2">
              <button id="btnIntercultural" className="btn btn-outline-danger btn-block"  onClick={this.cargaBotonesPlantilla} > Generales </button>      
            </div>            
        </React.Fragment>
  )
      
    }



  }



  //limpiar campos

  limpiarCampos = () => {
    this.setState({ 
      ciclo1 : "",
      ciclo2 :"",      
      ciclo1_2 : "",
      ciclo3 : "",
      ciclo4 : "",
      ciclo5 : "",
      especial : ""      
      });
  }


  noDisponible = () => {
    console.log("no disponible");
    
    this.setState({ ciclo1:  (<strong>
      <cite> Lo sentimos... Información no disponible. </cite>
    </strong>)   });
  }




 // ------------------------ BOTONES ----------------------------- 

  cargaBotones  = (e) =>  { 
    
    //Limpia los campos links a pdfs
    this.limpiarCampos();
    
    const opc = e.target.id;
    var tmpBotonera;


    switch (opc) {
      case "btnMedia":   
      tmpBotonera  = (
           materiasMedia.map( ( item, i ) => (  <span className="badge badge-success spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasMedia}  >  {item.label}   </span>         ) ) 
           )   
      break;
      case "btnPrimaria":
        tmpBotonera  = (
            materiasPrima.map( ( item, i ) => (  <span className="badge badge-info spn-materias"  id={item.id}  key={ i }  onClick={this.noDisponible}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnApoyo":
        tmpBotonera  = (
            materiasApoyo.map( ( item, i ) => (  <span className="badge badge-dark spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasApoyo}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnIntercultural":
        tmpBotonera  = (
          materiasIntercultural.map( ( item, i ) => (  <span className="badge badge-danger spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasIntercult}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnAdultos":
        tmpBotonera  = (
          materiasAdultos.map( ( item, i ) => (  <span className="badge badge-warning spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasAdultos}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnPreescolar":
        tmpBotonera  = (
          materiasPreescolar.map( ( item, i ) => (  <span className="badge badge-primary spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasPreescolar}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      
    
      default:
        console.log("Opcion fuera de rango");        
        break;
    }
      
    this.setState({ botonera: tmpBotonera  });    
  }




  // ---------------------------- LINKS A LOS PROGRAMAS EN PDF --------------------    


  cargarProgrmasMedia = (e) => {
    const opc = e.target.id;
    var dsPDF = mediaPDf[0];
    console.log("Dataset", dsPDF );
        
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();
      
      if (aux.ciclo3 !== "" ) {
        this.setState ({ ciclo3 : <a href= {aux.ciclo3}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }   Tercer Ciclo   </a> } );        
      }
      if (aux.ciclo4 !== "" ) {
        this.setState({ ciclo4 : <a href= {aux.ciclo4}   target= "_blank" rel="noopener noreferrer"  > <i className="fas fa-file-pdf"></i>  { aux.nombre  }   Educación diversificada   </a> });        
      }
      if (aux.ciclo5 !== "" ) {
        this.setState({ ciclo5 : <a href= {aux.ciclo5}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  Tercer Ciclo y Educación diversificada   </a> });            
      }      
    this.setState({ programaActual : opc  });     
  }

  cargarProgrmasPrima = (e) => {
    const opc = e.target.id;
    var dsPDF = primaPDF[0];    
    //console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //primaria -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();  
      
      if (aux.ciclo1 !== "" ) {
        this.setState ({ ciclo1 : <a href= {aux.ciclo1}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }   Primer Ciclo   </a> } );        
      }
      if (aux.ciclo2 !== "" ) {
        this.setState({ ciclo2 : <a href= {aux.ciclo2}   target= "_blank" rel="noopener noreferrer"  > <i className="fas fa-file-pdf"></i>  { aux.nombre  }   Segundo Ciclo   </a> });        
      }
      if (aux.ciclo1_2 !== "" ) {
        this.setState({ ciclo1_2 : <a href= {aux.ciclo1_2}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  Primero y Segundo Ciclos   </a> });            
      }      
    this.setState({ programaActual : opc  });     
  }

  cargarProgrmasApoyo = (e) => {
    const opc = e.target.id;
    var dsPDF = apoyoPDF[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();
      this.setState ({ especial : <a href= {aux.especial}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  </a> } );        
      this.setState({ programaActual : opc  });     
  }

  cargarProgrmasIntercult = (e) => {
    const opc = e.target.id;
    var dsPDF = intercultPDF[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //intercultural -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();
      this.setState ({ ciclo1_2 : <a href= {aux.ciclo1_2}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  </a> } );        
      this.setState({ programaActual : opc  });     
  }

  cargarProgrmasAdultos = (e) => {
    const opc = e.target.id;
    var dsPDF = adultosPDF[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //intercultural -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();
      this.setState ({ ciclo1_2 : <a href= {aux.ciclo1_2}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  </a> } );        
      this.setState({ programaActual : opc  });     
  }

  cargarProgrmasPreescolar = (e) => {
    const opc = e.target.id;
    var dsPDF = preescolarPDF[0];    
    console.log("Opcion", opc);
    console.log("PDF",  dsPDF);
    
    
    //Caraga los programas de estudio de acuerdo a la selección
    //intercultural -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();
      this.setState ({ ciclo1_2 : <a href= {aux.ciclo1_2}   target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf"></i>  { aux.nombre  }  </a> } );        
      this.setState({ programaActual : opc  });     
  }




  render() { 
    return ( 

      <React.Fragment>

    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center"> 
        <img src= {this.urlImgtitulo}    alt="titulo"/>
        
        </div>
        <div className="col-2 text-right"   >
            <span  onClick={this.props.handlerCloseProgramasEducativos}  > 
                    <i className="far fa-times-circle"></i>
            </span>
        </div>
    </div>
    
      <div className="row">
          {this.botonesNav}
      </div>

          
          <div className="row">
       
                <div className="col-4">
                  {this.state.botonera}
                </div>

                
                
                <div className="col-8" id="visorProgramas">
                    {this.state.ciclo1}
                    {this.state.ciclo1_2}            
                    {this.state.ciclo3} 
                    {this.state.ciclo4} 
                    {this.state.ciclo5}
                    {this.state.especial} 
                </div>
          
          
          </div>
</React.Fragment>

     );
  }
}
 
export default ProgramasEstudio;