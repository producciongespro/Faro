import React, { Component } from 'react';
import images from "../data/images.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];

var img = images[0];




class DocsOficiales extends Component {
  render() {
    return (
      <div>        


<div className="row">
      <div className="col-5 col-derecha">
            <img className="titulos img-fluid" src={img.DesarrolloTitulo} alt="Documentos educativos oficiales" />
               <img className="descripciones3 img-fluid" src={img.GeneralCajaDescripcion} alt="Descripción" />
              <div id="textoDescripcion3">
                El tacaco es una planta trepadora endémica de Costa Rica, familia de las cucurbitáceas, y que produce un fruto comestible verde, ovoide, de unos siete centímetros de longitud.​ La parte comestible es una pulpa contenida en una bolsa fibrosa dentro de la cual hay una pepita aplastada y amarga que se extrae previamente.
              </div>
              <img id="programas" className="img-fluid hvr-wobble-bottom" src={img.DesarrolloEnlaceDesarrollo} alt="Enlaces desarrollo" />
      </div>
      <div id="botones-desarrollo" className="col-7">
          <img alt="" id="fondo-desarrollo" className="img-fluid" src={img.DesarrolloFondo2} />
        <div  className="row">
            <div  className="col-4  hover11 ">
              <figure>
                <img className="botones-portada  img-fluid" id="cursos" src={img.DesarrolloCursos} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}  alt="Cursos" />
              </figure>
              </div>
              <div className="col-4  ">

              </div>
            <div className="col-4 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="sitios" src={img.DesarrolloSitios}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}  alt="Sitios" />
              </figure>
            </div>

        </div>
        <div className="row botones-inferiores">
          <div  className="col-4 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="videoteca" src={img.DesarrolloVideoteca}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal}  alt="Videoteca" />
            </figure>
            </div>
          <div className="col-4 centro hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={img.DesarrolloReferencias} alt="Referencias" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal} />
            </figure>
          </div>
          <div className="col-4 hover11 ">
            <figure>
              <img className="botones-portada img-fluid" id="ficha" src={img.DesarrolloOtras}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={this.props.showModal} alt="Otras ofertas" />
            </figure>
            </div>
        </div>
        </div>
  </div>
<br/>
  <div className="row">
			<div className="col-12 pie">
				<img className="botones-portada hvr-pop img-fluid" data-tar="Home" onClick={this.props.changePage} src={img.BtnSalir } alt="Salir" />
			</div>
        </div>



      </div>        
    );
  }
}

export default DocsOficiales;