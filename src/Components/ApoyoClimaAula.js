import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";




class ApoyoClimaAula extends Component {
  render() {
    return (
      <div>
            <div className="row">
      <div className="col-5">
            <img className="titulos img-fluid" src={images[0].ApoyoClimaAulaTitulo } alt="Apoyo clima en el aula" />
               <img className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion } alt="Descripción" />
              <div id="textoDescripcion3">
                {textos[0].Tacaco}
              </div>
              <img id="programas" className="img-fluid" src={images[0].GeneralProgramasEstudio } alt="Proramas de estudio" />
      </div>
      <div  className="col-7">
        <div id="botones-aula" className="row">
            <div className="col-6 hover11 ">
              <figure>
                <img className="botones-portada derecha img-fluid" id="interacciones" src={images[0].ApoyoClimaAulaInteracciones }  alt="interacciones" />
              </figure>
              </div>
            <div className="col-6 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="inclusion"  src={images[0].ApoyoClimaAulaInclusion }  alt="Inclusión" />
              </figure>
            </div>

        </div>
        <div className="row">
          <div className="col-6 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="recomendaciones" src={images[0].ApoyoClimaAulaRecomendaciones } alt="Recomendaciones" />
            </figure>
            </div>
          <div className="col-6 hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={images[0].ApoyoClimaAulaPautas } alt="Pautas" />
            </figure>
          </div>
          <div className="col-6 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="ficha" src={images[0].ApoyoClimaAulaFicha }  alt="Fichas" />
            </figure>
            </div>
          <div className="col-6 hover11">
              <figure>
            <img className="botones-portada img-fluid" id="emociones" src={images[0].ApoyoClimaAulaEmociones } alt="Emociones" />
            </figure>
          </div>
          <div className="col-12 hover11 centro">
              <figure>
            <img className="botones-portada img-fluid" id="interculturalidad" src={images[0].ApoyoClimaAulaIntercultural }  alt="Interculturalidad" />
            </figure>
          </div>
      </div>
        </div>
  </div>
      <div className="row">
          <div className="col-12 pie">
            <img data-tar="Home" onClick={this.props.changePage}  className="botones-portada img-fluid" id="" src={images[0].BtnSalir } alt="Salir" />
      </div>
        </div>
      </div>
    );
  }
}

export default ApoyoClimaAula;