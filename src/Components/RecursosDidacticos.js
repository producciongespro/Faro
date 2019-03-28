import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";




class RecursosDidacticos extends Component {
  render() {
    return (
      <div className="row">


      <div className="col-4">
            <img className="titulos img-fluid" src={images[0].RecDidacticosTitulo} alt="Documentos educativos oficiales" />
               <img className="descripciones img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" /> 
              <div id="textoDescripcion">
                {textos[0].Tacaco  }                
              </div>
              <img id="programas" className="img-fluid btn" src={images[0].GeneralEducatico } alt="Educatico" />
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