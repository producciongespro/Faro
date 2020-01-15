import React from 'react';
import dsLinks from "../data/links.json";
import assets from '../data/config/config.json';

var links = dsLinks[0];
const audio = assets.audio;
const img = assets.img.recursosDidacticos;
const imgGenerales = assets.img.general;


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
               <img  id="imgFondoDescripcion" onClick={reproducirSonido} className="descripciones3 img-fluid" src={imgGenerales + "caja_descripcion.png"}  alt="Descripción" /> 
              <div onClick={reproducirSonido} id="textoDescripcion" className="texto_descripciones text-justify pr-3">
              <h2 className='desc'>Descripción:</h2>  { props.infoCategory }                
              </div>
              
              <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                  <img id="material_adicional" className="img-fluid btn hvr-wobble-bottom" src={img + "coleccion_gespro.png"} alt="Referenciar COLECCION GESPRO" />
              </a>
      </div>
               
      <div  className="col-8">

      <div className="botones_salir col-12 ">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {imgGenerales + "btn_salir.png" }  alt="Salir" />
      </div>

        <div id="bnt-recursos" className="row">

            <div className="col-3 hover12 ladoDer">
              <figure>
                 <img className="btn img-fluid preescolar" id="preescolar" src= {img+"preescolar.png"}   data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Preescolar" />
              </figure>
              </div>

            <div className="col-3 hover12 centro">
                <figure>
              <img className="btn img-fluid primaria" id="primaria" src= {img+"primaria.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}   alt="Primaria" />
              </figure>
            </div>

            <div className="col-3 hover12 centro">
                <figure>
              <img className="btn img-fluid secundaria" id="secundaria" src= {img+"secundaria.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Secundaria" />
              </figure>

            </div>
            <div className="col-3 hover12 ladoIzq">
                <figure>
              <img className="btn img-fluid intercultural" id="intercultural" src= {img+"intercultural.png"} data-tar="Construccion"  onClick={props.changePage}      alt="Intercultural" />
              </figure>

            </div>          
        </div>

        <div  className="row">
          <div className="col-3 hover12 ladoDer">
          <figure>
          <img className="btn img-fluid jovenesAdultos" id="jovenesAdultos" src= {img+"jovenes_adultos.png"} data-tar="Construccion"  onClick={props.changePage}    alt="Jovenes y Adultos" />
          </figure>
                  
          </div>
          <div className="col-3 hover12 centro">
          <figure>
          <img className="btn img-fluid feriaCientifica" id="feriaCientifica" src= {img+"feria_cientifica.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="Feria Científica" />
          </figure>
          </div>

          <div className="col-3 hover12 centro">
          <figure>
          <img className="btn img-fluid banderaAzul" id="banderaAzul" src= {img+"programa_azul.png"} data-tar="Construccion"  onClick={props.changePage}    alt="Bandera Azul" />
          </figure>
          </div>

          <div className="col-3 hover12 ladoIzq">
          <figure>
          <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
          {/* <img className="btn img-fluid" id="educatico" src= {img+"educatico.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="educatico" /> */}
          <img className="btn img-fluid educatico" id="educatico" src= {img+"educatico.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } alt="educatico" />
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