import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";

import dsLinks from "../data/links.json";

var links = dsLinks[0];


const RecursosDidacticos = (props) => {
  return ( 
    <div className="row">
      
      <div className="col-4">
            <img className="titulos img-fluid" src={images[0].RecDidacticosTitulo} alt="Documentos educativos oficiales" />
               <img className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" /> 
              <div id="textoDescripcion" className="texto_descripciones text-justify pr-3">
              <h2 className='desc'>Descripción:</h2>  { props.infoCategory }                
              </div>
              <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                  <img id="material_adicional" className="img-fluid btn hvr-wobble-bottom" src={images[0].GeneralEducatico } alt="Educatico" />
              </a>
      </div>

      <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>
          
      <div id="bnt-recursos" className="col-8">
        <div className="row">
            <div className="col-4 hover12 ladoDer">
              <figure>
                 <img className="btn img-fluid" id="preescolar" src= {images[0].RecDidacticosPreescolar  }   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Preescolar" />
              </figure>
              </div>
            <div className="col-4 hover12 centro">
                <figure>
              <img className="btn img-fluid" id="primaria" src= {images[0].RecDidacticosPrimaria  }    data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Primaria" />
              </figure>
            </div>
            <div className="col-4 hover12 ladoIzq">
                <figure>
              <img className="btn img-fluid" id="secundaria" src= {images[0].RecDidacticosSecundaria  }   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Secundaria" />
              </figure>
            </div>
        </div>
      

        </div>
      </div>
   );
}
 
export default RecursosDidacticos;