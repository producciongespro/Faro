import React, { Component } from 'react';




class DocsOficiales extends Component {
  render() {
    return (
      <div>  
          <div className="row">
      <div className="col-4">
            <img className="titulos img-fluid" src="images/tituloDocumentos.png" alt="Documentos educativos oficiales" />
               <img className="descripciones img-fluid" src="images/descripcion.png" alt="Descripción" />
              <div id="textoDescripcion">
                El tacaco es una planta trepadora endémica de Costa Rica, familia de las cucurbitáceas, y que produce un fruto comestible verde, ovoide, de unos siete centímetros de longitud.​ La parte comestible es una pulpa contenida en una bolsa fibrosa dentro de la cual hay una pepita aplastada y amarga que se extrae previamente.
              </div>
              <img id="programas" className="img-fluid" src="images/programas_estudio.png" alt="Descripción" />
      </div>
      <div className="col-8" >
        <div className="row">
            <div className="col-4 hover11 ladoIzq">
              <figure>
                <img className="botones-portada img-fluid" id="politica" src="images\politica.png" alt="" />
              </figure>
              </div>
            <div className="col-4 hover11 centro">
                <figure>
              <img className="botones-portada img-fluid" id="perfil" src="images\docente.png" alt="" />
              </figure>
            </div>
            <div className="col-4 hover11 ladoDer">
                <figure>
              <img className="botones-portada img-fluid" id="estudiante" src="images\estudiante.png" alt="" />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 fondo" >   
              <img id="transformacion" className="img-fluid" src="images\transformacion.png" alt="" />
            </div>
            <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4 hover11 ladoIzq">
              <figure>
            <img className="botones-portada  img-fluid" id="faro" src="images\faro.png" alt="" />
            </figure>
          </div>
          <div className="col-4 hover11 centro">
              <figure>
            <img className="botones-portada  img-fluid" id="fundamentos" src="images\fundamentos.png" alt="" />
            </figure>
          </div>
          <div className="col-4 hover11 ladoDer">
              <figure>
            <img className="botones-portada  img-fluid" id="reglamento" src="images\reglamento.png" alt="" />
            </figure>
          </div>
          <div className="col-12 pie">
            <img className="botones-portada img-fluid" id="" src="images\salir.png" alt="" />
          </div>
        </div>
      </div>

    </div>
      </div>
    );
  }
}

export default DocsOficiales;