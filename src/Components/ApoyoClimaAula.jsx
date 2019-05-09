import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";
var pdfs = dsPdfs[0];
//var links = dsLinks[0];

const ApoyoClimaAula = (props) => {
  return ( 
    <React.Fragment>
            <div className="row">
      <div className="col-5">
            <img className="titulos img-fluid" src={images[0].ApoyoClimaAulaTitulo } alt="Apoyo clima en el aula" />
               <img className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion } alt="Descripción" />
              <div id="textoDescripcion" className="texto_descripciones">
              <h2 class='desc'>Descripción:</h2> {props.infoCategory}
              </div>              
      </div>
      <div  className="col-7">
        <div id="botones-aula" className="row">
            <div className="col-6 hover11 ">
              <figure>
                <img className="botones-portada derecha img-fluid" id="interacciones" src={images[0].ApoyoClimaAulaInteracciones } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={1}   onMouseOver={props.onMouseOver}  onClick={props.showModal} alt="interacciones" />
              </figure>
              </div>
            <div className="col-6 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="inclusion"  src={images[0].ApoyoClimaAulaInclusion }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Inclusión" />
              </figure>
            </div>

        </div>
        <div className="row">
          <div className="col-6 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="recomendaciones" src={images[0].ApoyoClimaAulaRecomendaciones } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Recomendaciones" />
            </figure>
            </div>
          <div className="col-6 hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={images[0].ApoyoClimaAulaPautas } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Pautas" />
            </figure>
          </div>
          <div className="col-6 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="ficha" src={images[0].ApoyoClimaAulaFicha } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Fichas" />
            </figure>
            </div>
          <div className="col-6 hover11">
              <figure>
            <img className="botones-portada img-fluid" id="emociones" src={images[0].ApoyoClimaAulaEmociones } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Emociones" />
            </figure>
          </div>
          <div className="col-12 hover11 centro">
              <figure>
            <img className="botones-portada img-fluid" id="interculturalidad" src={images[0].ApoyoClimaAulaIntercultural } data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={1}  onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Interculturalidad" />
            </figure>
          </div>
      </div>
        </div>
  </div>
      <div className="row">
          <div className="col-12 pie">
            <img data-tar="Home" onClick={props.changePage}  className="botones-portada img-fluid hvr-pop" id="" src={images[0].BtnSalir } alt="Salir" />
      </div>
        </div>
      </React.Fragment>
   );
}
 
export default ApoyoClimaAula;