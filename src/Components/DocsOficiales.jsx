import React  from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];

const DocsOficiales = ( props ) => {
  return ( 
    <div className="row">
      <div className="col-4">
            <img className="titulos img-fluid" src={images[0].DocsOficialesTitulo } alt="Documentos educativos oficiales" />
               <img className="descripciones img-fluid" src={images[0].GeneralCajaDescripcion  } alt="Descripción" />
              <div id="textoDescripcion" class="texto_descripciones2">
              <h2 class='desc'>Descripción:</h2>  {props.infoCategory}
              </div>
 
      </div>

      <div className="col-8" >
        <div className="row">
            <div className="col-4 hover11 ladoIzq">
              <figure>
                <img className="botones-portada img-fluid" id="politica" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={images[0].DocsOficialesPoliticaEducativa } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Políticas educativas" />
              </figure>
              </div>
            <div className="col-4 hover11 centro">
                <figure>
              <img className="botones-portada img-fluid" id="perfil" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={images[0].DocsOficialesPerfildocente } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Perfil docente" />
              </figure>
            </div>
            <div className="col-4 hover11 ladoDer">
                <figure>
              <img className="botones-portada img-fluid" id="estudiante" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {images[0].DocsOficialesPerfilEstudiante } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Perfil estudiante" />
              </figure>
            </div>
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 fondo" >   
              <img id="transformacion" className="img-fluid" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }   src= {images[0].DocsOficialesTransformacionCurricular }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Transformación curricular" />
            </div>
            <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-4 hover11 ladoIzq">
              <figure>
            <img className="botones-portada  img-fluid" id="faro" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src=  {images[0].DocsOficialesFaro } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Faro" />
            </figure>
          </div>
          <div className="col-4 hover11 centro">
              <figure>
            <img className="botones-portada  img-fluid" id="fundamentos" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src= {images[0].DocsOficialesFundCurriculo }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Fundamentos Currículo" />
            </figure>
          </div>
          <div className="col-4 hover11 ladoDer">
              <figure>
            <img className="botones-portada  img-fluid" id="reglamento" data-infosource={5} onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut }  src={images[0].DocsOficialesReglamento }  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal}  alt="Reglamento" />
            </figure>
          </div>
          <div className="col-12 pie">
            <img  data-tar="Home" onClick={props.changePage}   className="btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default DocsOficiales;