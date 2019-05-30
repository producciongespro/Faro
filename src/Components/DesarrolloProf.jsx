import React from 'react';
import images from "../data/images.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];

var img = images[0];



const DesarrolloProf = (props) => {

  return ( 
    <React.Fragment>        


<div className="row">
      <div className="col-5 col-derecha">
            <img className="titulos img-fluid" src={img.DesarrolloTitulo} alt="Documentos educativos oficiales" />
               <img className="descripciones4 img-fluid" src={img.GeneralCajaDescripcion} alt="Descripción" />
              <div  id="textoDescripcion" className="texto_descripciones text-justify pr-3" >
              <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
              </div>
              <a href={links.IDP} target="_blank" rel="noopener noreferrer"  >
                <img id="material_adicional" className="img-fluid hvr-wobble-bottom" src={img.DesarrolloEnlaceDesarrollo} alt="Enlaces desarrollo" />
              </a>
      </div>

      <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>
      <div id="botones-desarrollo" className="col-7">
          <img alt="" id="fondo-desarrollo" className="img-fluid" src={img.DesarrolloFondo2} />
        <div  className="row" id="desarrolloIDP">
            <div  className="col-4  hover11 ">
              <figure>
                <img className="botones-portada  img-fluid" id="cursos" src={img.DesarrolloCursos} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.handlerOpenCatalog}  alt="Cursos" />
              </figure>
              </div>
              <div className="col-4  ">

              </div>
            <div className="col-4 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="sitios" src={img.DesarrolloSitios}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.handlerOpenCatalogWeb }  alt="Sitios" />
              </figure>
            </div>

        </div>
        <div className="row botones-inferiores">
          <div  className="col-4 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="videoteca" src={img.DesarrolloVideoteca}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}  onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenCatalog}  alt="Videoteca" />
            </figure>
            </div>
          <div className="col-4 centro hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={img.DesarrolloReferencias}  data-content= {pdfs.Tacaco }  data-typecontent ="refUtiles" data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Referencias" />
            </figure>
          </div>
          <div className="col-4 hover11 ">
            <figure>
              <img className="botones-portada img-fluid" id="ficha" src={img.DesarrolloOtras}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.handlerOpenCatalog}  alt="Otras ofertas" />
            </figure>
            </div>
        </div>
        </div>
  </div>
<br/>
 



      </React.Fragment>      
   );
}
 
export default DesarrolloProf;