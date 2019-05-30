import React, { Component } from 'react';


//import $ from 'jquery';

//Data json Programas
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

//--------------------- PLANTILLAS JSON


import plantillasMedia from '../data/planeamiento/plantillas/plantillas_secundaria.json';
import comboMedia from '../data/planeamiento/plantillas/docs_secundaria.json';

import plantillasPrimaria from '../data/planeamiento/plantillas/plantillas_primaria.json';
import comboPrimaria from '../data/planeamiento/plantillas/docs_primaria.json';

import plantillasPreescolar from '../data/planeamiento/plantillas/plantillas_preescolar.json';
import comboPreescolar from '../data/planeamiento/plantillas/docs_preescolar.json';

import plantillasGenerales from '../data/planeamiento/plantillas/plantillas_generales.json';
import comboGenerales from '../data/planeamiento/plantillas/docs_generales.json';






class Tags_info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programaActual : "",
      botonera : <span> Oprima cualquier boton para seleccionar la categoría... </span>,    
      linkPdf : ""      
     };     
     this.botonesNav="";
     this.urlImgtitulo="";
     this.colorFondo="";
     this.programasPdf = {
      "mediaPDF" : mediaPDf[0],
      "preescolarPDF" : preescolarPDF[0],
      "adultosPDF" : adultosPDF[0],
      "intercultPDF" : intercultPDF[0],
      "apoyoPDF" : apoyoPDF[0],
      "primaPDF" : primaPDF[0]
     }

     this.combosMaterias = {
          "comboMedia" : comboMedia[0],
          "comboPrimaria" : comboPrimaria[0],
          "comboPreescolar" : comboPreescolar[0],
          "comboGenerales" : comboGenerales[0]
     }
  }



  componentWillMount ( ) {
    console.log(this.props.idCat);
    if (this.props.idCat === "programas" ) {
      this.urlImgtitulo = "https://recursos.mep.go.cr/ws_faro/p3-documentos-oficiales/proramas_titulo.png";
      this.colorFondo="col-2  color-morado";
      this.botonesNav = (
            <React.Fragment>
                <div className="col-2">
                  <button  id="btnPreescolar" className="btn btn-outline-primary btn-block"   onClick={this.cargaBotonesProgramas } > Educ. Preescolar </button>      
                </div>
                <div className="col-2">
                  <button id="btnPrimaria" className="btn btn-outline-info btn-block"   onClick={this.cargaBotonesProgramas} > Educ. Primaria </button>      
                </div>
                <div className="col-2">
                  <button  id="btnMedia" className="btn btn-outline-success btn-block"  onClick={this.cargaBotonesProgramas} > Educ. Media </button>      
                </div>
                <div className="col-2">
                  <button id="btnIntercultural" className="btn btn-outline-danger btn-block"  onClick={this.cargaBotonesProgramas} > Educ. Intercultural </button>      
                </div>
                <div className="col-2">
                  <button id="btnAdultos"  className="btn btn-outline-warning btn-block"  onClick={this.cargaBotonesProgramas} > Educ. Jóvenes y Adultos </button>      
                </div>
                <div className="col-2">
                  <button id="btnApoyo" className="btn btn-outline-dark btn-block"  onClick={this.cargaBotonesProgramas} > Apoyos Educativos </button>      
                </div>
               
            </React.Fragment>
      )


    };
    if (this.props.idCat === "plantilla") {
      this.urlImgtitulo = "https://recursos.mep.go.cr/ws_faro/p03-apoyos-plan/plantilla_planeamiento.png";
      this.colorFondo="col-2   text-center color-amarillo";
    
      this.botonesNav = (
        <React.Fragment>
            <div className="col-2">
              <button  id="btnPreescolar" className="btn btn-outline-primary  btn-block"   onClick={this.cargaBotonesPlantilla} > Educ. Preescolar </button>      
            </div>
            <div className="col-2">
              <button id="btnPrimaria" className="btn btn-outline-info btn-block"   onClick={this.cargaBotonesPlantilla} > Educ. Primaria </button>      
            </div>
            <div className="col-2">
              <button  id="btnMedia" className="btn btn-outline-success btn-block"  onClick={this.cargaBotonesPlantilla} > Educ. Secundaria </button>      
            </div>
            <div className="col-2">
              <button id="btnGeneral" className="btn btn-outline-danger btn-block"  onClick={this.cargaBotonesPlantilla} > Generales </button>      
            </div>            
        </React.Fragment>
  )
      
    }



  }



  //limpiar campos

  limpiarCampos = () => {
    this.setState({    
      linkPdf : ""      
      });
  }



 // ------------------------ BOTONES ----------------------------- 

 cargaBotonesProgramas  = (e) =>  { 
    
    //Limpia los campos links a pdfs
    this.limpiarCampos();
    
    const opc = e.target.id;
    var tmpBotonera;


    switch (opc) {
      case "btnMedia":   
      tmpBotonera  = (
           materiasMedia.map( ( item, i ) => (  <span className="animated color-bs badge badge-success spn-materias"  id={item.id}  key={ i }  data-categoria = "mediaPDF" onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
           )   
      break;
      case "btnPrimaria":
        tmpBotonera  = (
            materiasPrima.map( ( item, i ) => (  <span className="animated color-bs badge badge-info spn-materias"  id={item.id}  key={ i }  data-categoria = "primaPDF" onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnApoyo":
        tmpBotonera  = (
            materiasApoyo.map( ( item, i ) => (  <span className="animated color-bs badge badge-dark spn-materias"  id={item.id}  key={ i }  data-categoria = "apoyoPDF" onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnIntercultural":
        tmpBotonera  = (
          materiasIntercultural.map( ( item, i ) => (  <span className="animated color-bs badge badge-danger spn-materias"  id={item.id}  key={ i }  data-categoria = "intercultPDF" onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnAdultos":
        tmpBotonera  = (
          materiasAdultos.map( ( item, i ) => (  <span className="animated color-bs badge badge-warning spn-materias"  id={item.id}  key={ i }  data-categoria = "adultosPDF" onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnPreescolar":
        tmpBotonera  = (
          materiasPreescolar.map( ( item, i ) => (  <span className="animated color-bs badge badge-primary spn-materias"  id={item.id}  key={ i } data-categoria = "preescolarPDF"   onClick={this.cargarUrlProgrmasPDF}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      
    
      default:
        console.log("Opcion fuera de rango");        
        break;
    }
      
    this.setState({ botonera: tmpBotonera  });    
  }


  cargaBotonesPlantilla  = (e) =>  { 
    
    //Limpia los campos links a pdfs
    this.limpiarCampos();
    
    const opc = e.target.id;
    var tmpBotonera;


    switch (opc) {
      case "btnMedia":   
      tmpBotonera  = (
        plantillasMedia.map( ( item, i ) => (  <span className="animated badge badge-success spn-materias"  data-categoria="comboMedia"   id={item.id}  key={ i }  onClick={this.cargarComboPlantilla}  >  {item.label}   </span>         ) ) 
           )   
      break;
      case "btnPrimaria":
        tmpBotonera  = (
            plantillasPrimaria.map( ( item, i ) => (  <span className="badge badge-info spn-materias animated"  data-categoria="comboPrimaria"   id={item.id}  key={ i }  onClick={this.cargarComboPlantilla}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnPreescolar":
        tmpBotonera  = (
          plantillasPreescolar.map( ( item, i ) => (  <span className="badge badge-primary spn-materias animated"   data-categoria="comboPreescolar"   id={item.id}  key={ i }  onClick={this.cargarComboPlantilla}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      case "btnGeneral":
        tmpBotonera  = (
          plantillasGenerales.map( ( item, i ) => (  <span className="badge badge-primary spn-materias animated" data-categoria="comboGenerales"   id={item.id}  key={ i }  onClick={this.cargarComboPlantilla}  >  {item.label}   </span>         ) ) 
            ) 
      break;
      
    
      default:
        console.log("Opcion fuera de rango");        
        break;
    }
      
    this.setState({ botonera: tmpBotonera  });    
  }




  // ---------------------------- LINKS A LOS PROGRAMAS EN PDF --------------------    
  cargarUrlProgrmasPDF = (e) => {
    const opc = e.target.id;
    const categoria = e.target.dataset.categoria;
    var dsPDF = this.programasPdf[categoria];
    console.log("Dataset", dsPDF );
        
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();  
      this.setState ({ 
        programaActual : opc,
        linkPdf : 
        <div className="col-12 text-center  div-container-animated animated  ">
            <a href= {aux.url}  className="lnk-recursos" target= "_blank" rel="noopener noreferrer" > <img src="https://recursos.mep.go.cr/ws_faro/generales/ico_pdf.png" alt="icono pdf" />  <br/> { aux.nombre}</a> 
        </div>
        
      });        

  }

 

  // ---------------------------- Links a los combos de plantillas ------------------------------------------ //
  cargarComboPlantilla = (e) => {

    console.log("ID Categoria",  e.target.dataset.categoria );    

    const opc = e.target.id;
    //Obitnene la categoria a la que pertenece el TAG (ej: comboPrimaria)
    var dsPDF =  this.combosMaterias[e.target.dataset.categoria]   ;
    console.log("Dataset", dsPDF );
        
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------        
      
      const aux = dsPDF[opc];      
      this.limpiarCampos();

    
        this.setState ({ 
              linkPdf :  
                <React.Fragment>  
                  <a href= {aux.lineamientos}  className="lnk-yellow"  target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf ico-wine"></i>    Lineamiento  para plan de  { aux.nombre  } </a> 
                      <br/>
                  <a href= {aux.plantilla}  className="lnk-yellow"  > <i className="fas fa-file-word ico-wine"></i>    Plantilla  de   { aux.nombre  } </a> 
                      <br/>
                  <a href= {aux.ejemplo}  className="lnk-yellow"  target= "_blank" rel="noopener noreferrer" > <i className="fas fa-file-pdf ico-wine"></i>    Ejemplo  de   { aux.nombre  } </a> <br/>  
                  </React.Fragment>,
              programaActual : opc 
          });            
  }




  render() { 
    return ( 

      <React.Fragment>

    <div className="row">
  
        <div className="col-10 text-center"> 
        <img className="img-fondo" src= {this.urlImgtitulo}    alt="titulo"/>
        
        </div>
        <div className={this.colorFondo}   >
            <span  onClick={this.props.handlerCloseProgramasEducativos}  > 
                    <i className="far fa-times-circle ico-cerrar"></i>
            </span>
        </div>
    </div>
    <hr/><hr/>
      <div className="row ">
          {this.botonesNav}
      </div>

      <hr/>
          
          <div className="row">
       
                <div className="col-6">
                  {this.state.botonera}
                </div>                
                <div className="col-6 visor2" id="visorProgramas">               
                    {this.state.linkPdf}                    
                </div>        
          </div>
</React.Fragment>
     );
  }
}
 
export default Tags_info;