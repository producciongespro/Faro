import React, { Component } from 'react';


import $ from 'jquery';
import 'jstree';


//Data json
import secundariaJson from '../data/documentos/programas_estudio_media.json';
import materiasMedia from '../data/documentos/programas_materias.media.json';




class ProgramasEstudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programaActual : "",
      ciclo3 : "",
      ciclo4 : "",
      ciclo5 : "" 
     };   
    

  }


 

  cargaArbol  =()=>  {      

    console.log("Arbol");
    $("#divSecundaria").slideDown( "slow" );  
 

     

  }


  cargarProgrmasMedia = (e) => {
    const opc = e.target.id;
    var dsSecundaria = secundariaJson[0];    
    console.log("Opcion", opc);
    
    //Caraga los programas de estudio de acuerdo a la selección
    //Secundaria -------------------     
      
      
      const aux = dsSecundaria[opc];
      
      this.setState(
            { ciclo3: "" ,
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
    
<button className="btn btn-outline-info"  onClick={this.cargaArbol} > Educación Media </button>      

          
          <div className="row">
            <div className="col-4 div-oculta" id="divSecundaria" >                        
              {
                materiasMedia.map( ( item, i ) => (
                  <span className="badge badge-info spn-materias"  id={item.id}  key={ i }  onClick={this.cargarProgrmasMedia}  >  {item.label}   </span>
                ) )
              }
            </div>
          
          
          <div className="col-8" id="visorProgramas">            
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