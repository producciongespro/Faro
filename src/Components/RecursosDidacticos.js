import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];




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
              <a href={links.Educatico} target="_blank" rel="noopener noreferrer"  >
                  <img id="programas" className="img-fluid btn" src={images[0].GeneralEducatico } alt="Educatico" />
              </a>
      </div>


      <div className="col-8">
        <div className="row">
            <div className="col-4 hover12 ladoIzq">
              <figure>
                <img className="btn img-fluid" id="prescolar" src= {images[0].RecDidacticosPreescolar  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}  alt="Preescolar" />
              </figure>
              </div>
            <div className="col-4 hover12 centro">
                <figure>
              <img className="btn img-fluid" id="primaria" src= {images[0].RecDidacticosPrimaria  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}   alt="Primaria" />
              </figure>
            </div>
            <div className="col-4 hover12 ladoDer">
                <figure>
              <img className="btn img-fluid" id="secundaria" src= {images[0].RecDidacticosSecundaria  } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}  alt="Secundaria" />
              </figure>
            </div>
        </div>
      
          <div className="col-12 pie">
            <img data-tar="Home" onClick={this.props.changePage}  className="btn img-fluid" id="salir" src= {images[0].BtnSalir  }   alt="Salir" />
          </div>
        </div>
      </div>
    );
  }
}

export default RecursosDidacticos;