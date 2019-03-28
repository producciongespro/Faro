import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";





class DocsOficiales extends Component {
  render() {
    return (
    
          <div className="row">
      <div class="col-4">
            <img class="titulos img-fluid" src={images[0].DocsOficialesTitulo } alt="Documentos educativos oficiales" />
               <img class="descripciones img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" />
              <div id="textoDescripcion">
                      {textos[0].Tacaco  }
              </div>
              <img id="programas" class="img-fluid btn" src={images[0].GeneralProgramasEstudio }  alt="Descripción" />
      </div>

      <div className="col-8" >
        <div className="row">
            <div className="col-4 hover11 ladoIzq">
              <figure>
                <img className="botones-portada img-fluid" id="politica" src=  {images[0].DocsOficialesPoliticaEducativa } alt="Políticas educativas" />
              </figure>
              </div>
            <div className="col-4 hover11 centro">
                <figure>
              <img className="botones-portada img-fluid" id="perfil" src={images[0].DocsOficialesPerfildocente }  alt="Perfil docente" />
              </figure>
            </div>
            <div className="col-4 hover11 ladoDer">
                <figure>
              <img className="botones-portada img-fluid" id="estudiante" src= {images[0].DocsOficialesPerfilEstudiante } alt="Perfil estudiante" />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 fondo" >   
              <img id="transformacion" className="img-fluid" src= {images[0].DocsOficialesTransformacionCurricular }   alt="Transformación curricular" />
            </div>
            <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4 hover11 ladoIzq">
              <figure>
            <img className="botones-portada  img-fluid" id="faro" src=  {images[0].DocsOficialesFaro }  alt="Faro" />
            </figure>
          </div>
          <div className="col-4 hover11 centro">
              <figure>
            <img className="botones-portada  img-fluid" id="fundamentos" src= {images[0].DocsOficialesFundCurriculo }  alt="Fundamentos Currículo" />
            </figure>
          </div>
          <div className="col-4 hover11 ladoDer">
              <figure>
            <img className="botones-portada  img-fluid" id="reglamento" src={images[0].DocsOficialesReglamento }  alt="Reglamento" />
            </figure>
          </div>
          <div className="col-12 pie">
            <img  data-tar="Home" onClick={this.props.changePage}   className="btn img-fluid"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>
        </div>
      </div>

    </div>
    
    );
  }
}

export default DocsOficiales;