import React from 'react';
import dsLinks from "../data/links.json";
import config from '../data/config/config.json';

var links = dsLinks[0];
const audio = config.audio;
const img = config.img.recursosDidacticos;
const imgGenerales = config.img.general;


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
            <img  
            tabIndex="1" 
            role="banner" 
            className="titulos img-fluid" 
            src={img + "titulo.png"} 
            alt="Banner de Recursos didacticos" 
            />
               
               <img tabIndex="2" 
               id="imgFondoDescripcion" 
               onClick={reproducirSonido} 
               onKeyPress={reproducirSonido} 
               className="descripciones3 img-fluid" 
               src={imgGenerales + "caja_descripcion.png"}  
               alt="Descripción de la sección de Recursos Didácticos" 
               /> 


              <div 
              onClick={reproducirSonido} 
              id="textoDescripcion" 
              className="texto_descripciones text-justify pr-3">
              <h2 
              className='desc'>Descripción:</h2>  { props.infoCategory }                
              </div>
              

              <a 
              href={links.Educatico} 
              target="_blank" 
              rel="noopener noreferrer"  
              >
                  <img  
                  tabIndex="2" 
                  id="material_adicional" 
                  className="img-fluid btn hvr-wobble-bottom" 
                  src={img + "banner_gespro.gif"} 
                  data-tar="Construccion"  
                  onClick={props.changePage} 
                  onKeyPress={props.changePage} 
                  alt="Enlace a Educatico. Abre en una ventana nueva"/>
              </a>

          <div>
          <a 
          href={links.FQT} 
          target="_blank" 
          rel="noopener noreferrer"  >
            <img  
            tabIndex="2" 
            id="material_adicional_fqt" 
            className="img-fluid btn hvr-wobble-bottom" 
            src={img + "fqt.gif"}  
            data-infosource={4}       
            alt="Enlace a Fundación Quirós Tanzi. Abre en una ventana nueva" />
          </a>
          </div>
             
      </div>
               
      <div  className="col-8">
      <div className="botones_salir col-12 ">
            <img  
            role="button"  
            tabIndex="5"  
            data-tar="Home" 
            onClick={props.changePage} 
            onKeyPress={props.changePage}  
            className="derecha btn img-fluid hvr-pop"  
            src= {imgGenerales + "btn_salir.png" }  
            alt="Regresar a la portada" />
      </div>




        <div id="bnt-recursos" className="row">
        <div className="col-2 hover12 ladoDer">
        </div> 
           <div className="col-3 hover12 centro">
          <figure role="button">
          <a 
            href={links.Coleccion} 
            target="_blank" 
            rel="noopener noreferrer"  >
            <img 
            tabIndex="3" 
            className="btn img-fluid feriaCientifica" 
            id="coleccionGespro" 
            src= {img+"bnt_gespro.png"} 
            data-infosource={4} 
            onMouseOver={props.onMouseOver}   
            onMouseOut={ props.onMouseOut } 
            alt="Recursos de la colección GESPRO" />
          </a>
          </figure>
          </div>

          <div className="col-3 hover12 centro">
          <figure role="button">
          <img 
          tabIndex="3" 
          className="btn img-fluid banderaAzul" 
          id="banderaAzul" src= {img+"agenda_estudiantil.png"} 
          data-tar="agendaEstudiantil"  
          onClick={props.changePage} 
          onKeyPress={props.changePage} 
          data-infosource={4} 
          onMouseOver={props.onMouseOver}   
          onMouseOut={ props.onMouseOut }    
          alt="Recursos Agenda Estudiantil" />
          </figure>
          </div>

          <div className="col-3 hover12 ladoIzq">
          <figure role="button">
          <a 
          href={links.Educatico} 
          target="_blank" 
          rel="noopener noreferrer"  >
          {/* <img className="btn img-fluid" id="educatico" src= {img+"educatico.png"} data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenBuscador}  alt="educatico" /> */}
          <img 
          tabIndex="3" 
          className="btn img-fluid educatico" 
          id="educatico" 
          src= {img+"educatico.png"} 
          data-infosource={4} 
          onMouseOver={props.onMouseOver}   
          onMouseOut={ props.onMouseOut } 
          alt="Enlace a educatico" />
          </a>
          </figure>
          </div>
    
          <div className="col-1 hover12 ladoDer">
        </div> 

        </div>

        </div>
        <audio 
        src={ audio +  "recursos_didacticos.mp3"} 
        id="recursos"   
        preload="true"  
        ></audio>
        </div>
     );
}
 
export default RecursosDidacticos;