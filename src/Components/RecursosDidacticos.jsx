import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];


const RecursosDidacticos = (props) => {
  return ( 
    <div className="row">


      <div className="col-4">
            <img className="titulos img-fluid" src={images[0].RecDidacticosTitulo} alt="Documentos educativos oficiales" />
               <img className="descripciones img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" /> 
              <div id="textoDescripcion" className="texto_descripciones2">
              <h2 className='desc'>Descripción:</h2>  { props.infoCategory }                
              </div>
              <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                  <img id="material_adicional" className="img-fluid btn hvr-wobble-bottom" src={images[0].GeneralEducatico } alt="Educatico" />
              </a>
      </div>


      <div className="col-8">
        <div className="row">
            <div className="col-4 hover12 ladoIzq">
              <figure>
                <img className="btn img-fluid" id="prescolar" src= {images[0].RecDidacticosPreescolar  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Preescolar" />
              </figure>
              </div>
            <div className="col-4 hover12 centro">
                <figure>
              <img className="btn img-fluid" id="primaria" src= {images[0].RecDidacticosPrimaria  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.showModal}   alt="Primaria" />
              </figure>
            </div>
            <div className="col-4 hover12 ladoDer">
                <figure>
              <img className="btn img-fluid" id="secundaria" src= {images[0].RecDidacticosSecundaria  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={4} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Secundaria" />
              </figure>
            </div>
        </div>
      
          <div className="col-12 pie">
            <img data-tar="Home" onClick={props.changePage}  className="btn img-fluid hvr-pop" id="salir" src= {images[0].BtnSalir  }   alt="Salir" />
          </div>
        </div>
      </div>
   );
}
 
export default RecursosDidacticos;