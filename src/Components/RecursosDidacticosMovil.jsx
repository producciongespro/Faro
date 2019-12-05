import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";

import dsLinks from "../data/links.json";

var links = dsLinks[0];


const RecursosDidacticosMovil = (props) => {
  return ( 
<div>
    <img className="titulos img-fluid" src={images[0].RecDidacticosTitulo} alt="Documentos educativos oficiales" />
    <div className="row">      
        <div className="col-1">
              
        </div>         
        <div  className="col-10">
            <div className="row">  
                <div className="col-4">
                <figure>
                    <img className=" img-fluid hvr-pop" id="" src= {images[0].RecDidacticosPreescolar}   data-infosource={4}   onClick={props.handlerOpenBuscador}   alt="Preescolar" />
                </figure>
                </div>
                <div className="col-4  ">
                    <figure>
                        <img className=" img-fluid hvr-pop" id="" src= {images[0].RecDidacticosPrimaria}    data-infosource={4}   onClick={props.handlerOpenBuscador}   alt="Primaria" />
                    </figure>
                </div>
                <div className="col-4  ">
                    <figure>
                    <img className=" img-fluid hvr-pop" id="" src= {images[0].RecDidacticosSecundaria}   data-infosource={4}   onClick={props.handlerOpenBuscador}  alt="Secundaria" />
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
                        <img className="img-fluid hvr-pop" id="" src= {images[0].RecDidacticosIntercultualidad}   data-infosource={4}  onClick={props.handlerOpenBuscador}  alt="Intercultural" />
                    </figure>
                </div>          
                <div className="col-4 ">
                    <figure>
                        <img className="img-fluid hvr-pop" id="" src= {images[0].RecDidacticosJovenesAdultos}   data-infosource={4}  onClick={props.handlerOpenBuscador}  alt="Jovenes y Adultos" />
                    </figure>    
                </div>
                <div className="col-4  ">
                    <figure>
                        <img className="img-fluid hvr-pop" id="" src= {images[0].RecDidacticosFeriaCientifica}   data-infosource={4}   onClick={props.handlerOpenBuscador}  alt="Feria Científica" />
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
                <div className="col-2">  
                </div>   
                <div className="col-4  ">
                    <figure>
                        <img className="img-fluid hvr-pop" id="" src= {images[0].RecDidacticosBanderaAzul}   data-infosource={4}   onClick={props.handlerOpenBuscador}  alt="Bandera Azul" />
                    </figure>
                </div>

                <div className="col-4  ">
                    <figure>
                        <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                        <img className="img-fluid hvr-pop" id="" src= {images[0].RecDidacticosEducatico}   data-infosource={4}   onClick={props.handlerOpenBuscador}  alt="educatico" />
                        </a>
                    </figure>
                </div>
                <div className="col-2">  
                </div> 

        </div>

        </div>
        <div className="col-2">  
        </div> 
    </div> 
    <br/>  
        <div class="row text-center">
            <div className="col-12 ">
                 <img  data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
            </div>
        </div>
</div>
     );
}
 
export default RecursosDidacticosMovil;