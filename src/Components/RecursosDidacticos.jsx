import React from 'react';
import images from "../data/images.json";
import dsLinks from "../data/links.json";
import assets from '../data/config/config.json';

var links = dsLinks[0];
const audio = assets.audio;
const img = assets.img.recursosDidacticos;


const  reproducirSonido = () => {
  console.log("Audio");  
  var tmpAudio = document.getElementById("recursos");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}

const RecursosDidacticos = (props) => {
  return ( 
    <div className="row">      
      <div className="col-4">
            <img className="titulos img-fluid" src={img + "titulo.png"} alt="Documentos educativos oficiales" />
               <img  onClick={reproducirSonido} className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" /> 
              <div onClick={reproducirSonido} id="textoDescripcion" className="texto_descripciones text-justify pr-3">
              <h2 className='desc'>Descripción:</h2>  { props.infoCategory }                
              </div>
              
              <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                  <img id="material_adicional" className="img-fluid btn hvr-wobble-bottom" src={images[0].GeneralEducatico } alt="Referenciar COLECCION GESPRO" />
              </a>
      </div>
               
      <div  className="col-8">

      <div className="botones_salir col-12 ">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
      </div>

        <div id="bnt-recursos" className="row">

            <div className="col-3 hover12 ladoDer">
              <figure>
                 <img className="btn img-fluid" id="preescolar" src= {images[0].RecDidacticosPreescolar}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Preescolar" />
              </figure>
              </div>

            <div className="col-3 hover12 centro">
                <figure>
              <img className="btn img-fluid" id="primaria" src= {images[0].RecDidacticosPrimaria}    data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Primaria" />
              </figure>
            </div>

            <div className="col-3 hover12 centro">
                <figure>
              <img className="btn img-fluid" id="secundaria" src= {images[0].RecDidacticosSecundaria}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Secundaria" />
              </figure>

            </div>
            <div className="col-3 hover12 ladoIzq">
                <figure>
              <img className="btn img-fluid" id="intercultural" src= {images[0].RecDidacticosIntercultualidad}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Intercultural" />
              </figure>

            </div>          
        </div>

        <div  className="row">
          <div className="col-3 hover12 ladoDer">
          <figure>
          <img className="btn img-fluid" id="jovenesAdultos" src= {images[0].RecDidacticosJovenesAdultos}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Jovenes y Adultos" />
          </figure>
                  
          </div>
          <div className="col-3 hover12 centro">
          <figure>
          <img className="btn img-fluid" id="feriaCientifica" src= {images[0].RecDidacticosFeriaCientifica}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Feria Científica" />
          </figure>
          </div>

          <div className="col-3 hover12 centro">
          <figure>
          <img className="btn img-fluid" id="banderaAzul" src= {images[0].RecDidacticosBanderaAzul}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Bandera Azul" />
          </figure>
          </div>

          <div className="col-3 hover12 ladoIzq">
          <figure>
          <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
          <img className="btn img-fluid" id="educatico" src= {images[0].RecDidacticosEducatico}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="educatico" />
          </a>
          </figure>
          </div>


        
           

        </div>
        </div>
        <audio src={ audio +  "recursos_didacticos.mp3"} id="recursos"   preload="true"  ></audio>
        </div>
     );
}
 
export default RecursosDidacticos;