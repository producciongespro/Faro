import React from 'react';
import $ from 'jquery';
import 'jstree';





const cargaArbol = () => {

  console.log("Arbol");

  $("#jstree").slideDown( "slow" );
  

  $('#jstree').jstree(); 
  
  $('#jstree').on("changed.jstree", function (e, data) {
      const opc =  data.selected[0];
      console.log(opc);
      
  
  //Caraga los programas de estudio de acuerdo a la selección
  switch (opc) {
    case "primariaCien":
        $("#visorProgramas").html(
          '<a href="https://www.mep.go.cr/" target= "_blank" > <i class="fas fa-file-pdf"></i> Ciencias primer Ciclo   </a>'  +
          '<br>' + 
          '<a href="https://www.mep.go.cr/" target= "_blank"> <i class="fas fa-file-pdf"></i> Ciencias Segundo Ciclo   </a>'
          )
      break;
      case "apoyosEducativos":
        $("#visorProgramas").html(
          '<a href="nacion.com"> <i class="fas fa-file-pdf"></i> Educacón Especial Hellen Keller</a>'          
          )
      break;
  
    default:
      break;
  }

  });

  $('button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1');
    $('#jstree').jstree('select_node', 'child_node_1');
    $.jstree.reference('#jstree').select_node('child_node_1');
  }); 
  

}

const ProgramasEstudio = (props) => {
    return ( 

<React.Fragment>

    <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center"> 
            <h1>Programas de Estdio</h1>
        </div>
        <div className="col-2 text-right"   >
            <span onClick={props.handlerCloseProgramasEducativos}  > 
                    <i className="far fa-times-circle"></i>
            </span>
        </div>
    </div>
    
<button onClick={cargaArbol} > Ver categorías </button>      
          
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
                          <li>Educación Media
                            <ul>
                                <li>Ciencias</li>
                                <li>Español</li>
                                <li>Matemática</li>
                                <li id="mediaEstu">Estudios Sociales</li>
                                <li id="mediabiol">Biología</li>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus ut, inventore pariatur in minima, at nostrum, debitis recusandae consectetur adipisci? Rem error atque aliquam ullam magnam quod necessitatibus optio.
          </div>
          
          
          </div>
</React.Fragment>


     );
}
 
export default ProgramasEstudio;