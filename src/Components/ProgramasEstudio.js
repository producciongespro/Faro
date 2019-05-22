import React, { Component } from 'react';


//import $ from 'jquery';
//import 'jstree';


//Data json
//Media (Secundaria) :
import mediaPDf from '../data/documentos/programas_pdf_media.json';
import materiasMedia from '../data/documentos/programas_materias_media.json';

//Primaria:
import primaPDF from '../data/documentos/programas_pdf_primaria.json';
import materiasPrima from '../data/documentos/programas_materias_primaria.json';








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
      ciclo5 : "" 
     };   
    

  }


 

  cargaBotones  = (e) =>  {     
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
            materiasPrima.map( ( item, i ) => (  <span className="badge badge-info spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasMedia}  >  {item.label}   </span>         ) ) 
            ) 
      break;

    
      default:
        console.log("Opcion fuera de rango");        
        break;
    }
      
    this.setState({ botonera: tmpBotonera  });    
  }


  cargarProgrmasMedia = (e) => {
    const opc = e.target.id;
    var dsPDF = primaPDF[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //primaria -------------------        
      
      const aux = dsPDF[opc];      
      this.setState(        
            { 
              ciclo1 : "",
              ciclo2 :"",              
              ciclo1_2 : "",
              ciclo3: "" ,
              ciclo4: "" ,
              ciclo5: "" 
            }
        );   
      
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
    var dsPDF = mediaPDf[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------        
      
      const aux = dsPDF[opc];      
      this.setState(
            { 
              ciclo1 : "",
              ciclo2 :"",
              ciclo1_2 : "",
              ciclo3: "" ,
              ciclo4: "" ,
              ciclo5: "" 
            }
        );   
      
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





  render() { 
    return ( 

      <React.Fragment>

    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center"> 
            <h1>Programas de Estudio</h1>
        </div>
        <div className="col-2 text-right"   >
            <span onClick={this.props.handlerCloseProgramasEducativos}  > 
                    <i className="far fa-times-circle"></i>
            </span>
        </div>
    </div>
    
      <div className="row">
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
          <button className="btn btn-outline-danger btn-block"  onClick={this.cargaBotones} > Educ. Intercultural </button>      
        </div>
        <div className="col-2">
          <button className="btn btn-outline-warning btn-block"  onClick={this.cargaBotones} > Educ. Jóvenes y Adultos </button>      
        </div>
        <div className="col-2">
          <button className="btn btn-outline-dark btn-block"  onClick={this.cargaBotones} > Apoyos Educativos </button>      
        </div>
      </div>

          
          <div className="row">
       
                <div className="col-4">
                  {this.state.botonera}
                </div>

                
                
                <div className="col-8" id="visorProgramas">
                    {this.state.ciclo1_2}            
                    {this.state.ciclo3} 
                    {this.state.ciclo4} 
                    {this.state.ciclo5} 
                </div>
          
          
          </div>
</React.Fragment>

     );
  }
}
 
export default ProgramasEstudio;