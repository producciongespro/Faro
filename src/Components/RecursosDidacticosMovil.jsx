import React from 'react';
import assets from '../data/config/config_m.json';
//import textos from "../data/textos.json";

import dsLinks from "../data/links.json";

var links = dsLinks[0];
const img = assets.img.recursosDidacticos;
const img2 = assets.img.general;

const RecursosDidacticosMovil = (props) => {
  return ( 
<div>
<img className="titulos img-fluid" src={img + "titulo.png"} alt="Documentos educativos oficiales" />
    <div className="row">      
        <div className="col-1">
              
        </div>         
        <div  className="col-10">
            <div className="row">  
                <div className="col-4">
                <figure>
                 <img className="hvr-pop  img-fluid" id="preescolar" src= {img+"preescolar.png"}   data-infosource={4}  onClick={props.handlerOpenBuscador}   alt="Preescolar" />
                </figure>
                </div>
                <div className="col-4  ">
                <figure>
                    <img className="hvr-pop img-fluid" id="primaria" src= {img+"primaria.png"} data-infosource={4}  onClick={props.handlerOpenBuscador}   alt="Primaria" />
                </figure>
                </div>
                <div className="col-4  ">
                <figure>
                    <img className="hvr-pop img-fluid" id="secundaria" src= {img+"secundaria.png"} data-infosource={4}   onClick={props.handlerOpenBuscador}  alt="Secundaria" />
                </figure>
                </div>
            </div>
        </div>
        <div className="col-1">
            
        </div> 
    </div> 

    <div className="row">      
        <div className="col-1">
              
        </div>  
        <div  className="col-10">
            <div className="row">  
                <div className="col-4  ">
                <figure>
                    <img className="hvr-pop img-fluid" id="intercultural" src= {img+"intercultural.png"} data-tar="Construccion"  onClick={props.changePage}      alt="Intercultural" />
                </figure>
                </div>          
                <div className="col-4 ">
                <figure>
                    <img className="hvr-pop img-fluid" id="jovenesAdultos" src= {img+"jovenes_adultos.png"} data-tar="Construccion"  onClick={props.changePage}    alt="Jovenes y Adultos" />
                </figure>   
                </div>
                <div className="col-4  ">
                <figure>
                    <img className="hvr-pop img-fluid" id="feriaCientifica" src= {img+"feria_cientifica.png"} data-infosource={4} data-tar="Construccion"  onClick={props.changePage}  alt="Feria Científica" />
                </figure>
                </div>
            </div>
        </div> 
        <div className="col-1">
            
        </div> 
    </div> 

    <div className="row">      
        <div className="col-2">
              
        </div>
        <div  className="col-8">
            <div className="row">
            <div className="col-1">  
            </div>   
            <div className="col-5  ">
                <figure>
                    <img className="hvr-pop img-fluid" id="banderaAzul" src= {img+"agenda_estudiantil.png"} data-infosource={4} data-tar="agendaEstudiantil"  onClick={props.changePage}    alt="Agenda Estudiantil" />
                </figure>
            </div>

                <div className="col-5  ">
                <figure>
                <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                    {/* <img className="btn img-fluid" id="educatico" src= {img+"educatico.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="educatico" /> */}
                    <img className="hvr-pop img-fluid" id="educatico" src= {img+"educatico.png"} data-infosource={4}  alt="educatico" />
          </a>
          </figure>
                </div>
                <div className="col-1">  
                </div> 

        </div>

        </div>
        <div className="col-2">  
        </div> 
    </div> 
    <div class="row text-center">
    <div className="col-3 "> </div>
            <div className="col-6 ">
                <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                <img id="material_adicional" className="img-fluid btn hvr-wobble-bottom" src={img + "coleccion_gespro.png"} data-tar="Construccion"  onClick={props.changePage} alt="Referenciar COLECCION GESPRO" />
              </a>
              </div>
              <div className="col-3 "> </div>
        </div>
        <div class="row text-center">
            <div className="col-12 ">
                 <img  data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {img2+"btn_salir.png" }  alt="Salir" />
            </div>
        </div>
</div>
     );
}
 
export default RecursosDidacticosMovil;