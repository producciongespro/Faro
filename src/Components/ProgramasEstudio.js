import React, { Component } from 'react';


import $ from 'jquery';
import 'jstree';


//Data json
import secundariaJson from '../data/documentos/programas_estudio_media.json';




class ProgramasEstudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programaActual : ""
     };
    
    this.ciclo3 = "";
    this.ciclo4 = "";
    this.ciclo5 = "" ;

  }


 

  cargaArbol = () => {
    var opc="";
    var dsSecundaria = secundariaJson[0];

    console.log("Arbol");
    $("#jstree").slideDown( "slow" );  
    $('#jstree').jstree(); 
    
    $('#jstree').on("changed.jstree", function (e, data) {
        opc =  data.selected[0];     
        //Caraga los programas de estudio de acuerdo a la selección
        //Secundaria -------------------    

        //Detecta
        let patt = new RegExp('j1_');
        var res = patt.test(opc);      
          
      
        if (!res) {
          const aux = dsSecundaria[opc];
          console.log("Opcion", aux );  
        }


/*
        
        if (aux !== undefined ) {
          if (aux.ciclo3 !== "" ) {
            this.ciclo3 =  <a href= {aux.ciclo3}   target= "_blank" rel="noopener noreferrer" > <i class="fas fa-file-pdf"></i>  { aux.nombre  }   Tercer Ciclo   </a>
          }
          if (aux.ciclo4 !== "" ) {
            this.ciclo4 =  <a href= {aux.ciclo4}   target= "_blank" rel="noopener noreferrer"  > <i class="fas fa-file-pdf"></i>  { aux.nombre  }   Educación diversificada   </a>
          }
          if (aux.ciclo5 !== "" ) {
            this.ciclo5 =  <a href= {aux.ciclo5}   target= "_blank" rel="noopener noreferrer" > <i class="fas fa-file-pdf"></i>  { aux.nombre  }  Tercer Ciclo y Educación diversificada   </a>
          }    
        } 

      
        */
      });

      /*
    $('button').on('click', function () {
        $('#jstree').jstree(true).select_node('child_node_1');
        $('#jstree').jstree('select_node', 'child_node_1');
        $.jstree.reference('#jstree').select_node('child_node_1');
      }); 

      this.setState({ programaActual : opc  });
*/
  }





  render() { 
    return ( 

      <React.Fragment>

    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center"> 
            <h1>Programas de Estdio</h1>
        </div>
        <div className="col-2 text-right"   >
            <span onClick={this.props.handlerCloseProgramasEducativos}  > 
                    <i className="far fa-times-circle"></i>
            </span>
        </div>
    </div>
    
<button onClick={this.cargaArbol} > Ver categorías </button>      
          
          <div className="row">
            <div className="col-4 div-tree" id="jstree"  >     
                        <ul>
                          <li>Educación Preescolar</li>
                          <li>
                            Educación Primaria
                            <ul>
                              <li id="primariaCien" >Ciencias</li>
                              <li id="primariaEspa">Español</li>
                              <li id="primariaMate">Matemática</li>
                              <li id="primariaEstu">Estudios Sociales</li>
                              <li id="primariaIngl">Inglés</li>
                              <li id="primariaFran">Francés</li>
                              <li id="primariaItal">Italiano</li>
                              <li id="primariaFranBiling">Francés para secciones bilingües</li>
                              <li  >Artes Plásticas</li>
                              <li>Educación Musical</li>
                              <li>Orientación</li>
                              <li>Educación Física</li>
                              <li>Educación Religiosa</li>
                              <li>Artes Industriales</li>
                              <li id="primariaVida">Educación para la Vida Cotidiana</li>
                              <li id="primariaUnid">Escuelas Unidocentes</li>
          
                            </ul>
                          </li>
                          <li >Educación Media
                            <ul>
                                <li id="mediaCien">Ciencias</li>
                                <li id="mediaEspa">Español</li>
                                <li id="mediaMate" >Matemática</li>
                                <li id="mediaEstu">Estudios Sociales</li>
                                <li id="mediaBiol">Biología</li>
                                <li id="mediaQuim">Quimica</li>
                                <li id="mediaFisi">Física</li>
                                <li id="mediaIngl">Inglés</li>
                                <li id="mediaFran">Francés</li>
                                <li id="mediaAfec">Afectividad y Sexualidad </li>
                                <li id="mediaPsic">Psicología</li>
                                <li id="mediaFilo">Filosofía</li>
                                <li id="mediaArte">Artes Plásticas</li>
                                <li id="mediaMusi">Educación Musical</li>
                                <li id="mediaCivi">Edcuación Cívica</li>
                                <li id="mediaOrie">Orientación</li>
                                <li id="mediaEdFi">Educación Física</li>
                                <li id="mediaReli">Educación Religiosa</li>
                                <li id="mediaIndu">Artes Industriales</li>
                                <li id="mediaVida">Educación para la Vida Cotidiana</li>
                                <li id="mediaItal">Italiano</li>
                                <li id="mediaRura">Liceos Rurales</li>
                            </ul>
                          </li>
                          <li id="apoyosEducativos">Apoyos Educativos</li>
                          <li>Educación Intercultural</li>
                          <li>Educación para jóvenes y adultos</li>
                        </ul>            
            </div>
          
          
          <div className="col-8" id="visorProgramas">
              {this.ciclo3} <br/>
              {this.ciclo4} <br/>
              {this.ciclo5} <br/>
          </div>
          
          
          </div>
</React.Fragment>

     );
  }
}
 
export default ProgramasEstudio;