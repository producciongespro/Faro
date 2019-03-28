import React, { Component } from 'react';
import images from "../data/images.json";




class RecursosDidacticos extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-4">
            <img className="titulos img-fluid" src="images/tituloRecursos.png" alt="Documentos educativos oficiales" />
               <img className="descripciones img-fluid" src="images/descripcion.png" alt="Descripción" />
              <div id="textoDescripcion">
                El tacaco es una planta trepadora endémica de Costa Rica, familia de las cucurbitáceas, y que produce un fruto comestible verde, ovoide, de unos siete centímetros de longitud.​ La parte comestible es una pulpa contenida en una bolsa fibrosa dentro de la cual hay una pepita aplastada y amarga que se extrae previamente.
              </div>
              <img id="programas" className="img-fluid" src ={images[0].GeneralEducatico } alt="Educatico" />
      </div>
      <div className="col-8">
        <div className="row">
            <div className="col-4 hover12 ladoIzq">
              <figure>
                <img className="botones-portada img-fluid" id="prescolar" src= {images[0].RecDidacticosPreescolar  } alt="Preescolar" />
              </figure>
              </div>
            <div className="col-4 hover12 centro">
                <figure>
              <img className="botones-portada img-fluid" id="primaria" src= {images[0].RecDidacticosPrimaria  }   alt="Primaria" />
              </figure>
            </div>
            <div className="col-4 hover12 ladoDer">
                <figure>
              <img className="botones-portada img-fluid" id="secundaria" src= {images[0].RecDidacticosSecundaria  }  alt="Secundaria" />
              </figure>
            </div>
        </div>
      
          <div className="col-12 pie">
            <img data-tar="Home" className="btn"  onClick={this.props.changePage}  className="btn img-fluid" id="salir" src= {images[0].BtnSalir  }   alt="Salir" />
          </div>
        </div>
      </div>
    );
  }
}

export default RecursosDidacticos;