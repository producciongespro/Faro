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
               <img className="descripciones3 img-fluid" src={img.GeneralCajaDescripcion} alt="Descripción" />
              <div  id="textoDescripcion" className="texto_descripciones">
              <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
              </div>
              <a href={links.IDP} target="_blank" rel="noopener noreferrer"  >
                <img id="programas" className="img-fluid hvr-wobble-bottom" src={img.DesarrolloEnlaceDesarrollo} alt="Enlaces desarrollo" />
              </a>
      </div>
      <div id="botones-desarrollo" className="col-7">
          <img alt="" id="fondo-desarrollo" className="img-fluid" src={img.DesarrolloFondo2} />
        <div  className="row">
            <div  className="col-4  hover11 ">
              <figure>
                <img className="botones-portada  img-fluid" id="cursos" src={img.DesarrolloCursos} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.handlerOpenCatalog}  alt="Cursos" />
              </figure>
              </div>
              <div className="col-4  ">

              </div>
            <div className="col-4 hover11 ">
                <figure>
              <img className="botones-portada img-fluid" id="sitios" src={img.DesarrolloSitios}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }   onClick={props.showModal}  alt="Sitios" />
              </figure>
            </div>

        </div>
        <div className="row botones-inferiores">
          <div  className="col-4 hover11 ">
            <figure>
              <img className="botones-portada derecha img-fluid" id="videoteca" src={img.DesarrolloVideoteca}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}  onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Videoteca" />
            </figure>
            </div>
          <div className="col-4 centro hover11 ">
              <figure>
            <img className="botones-portada img-fluid" id="pautas" src={img.DesarrolloReferencias}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf" data-infosource={0} onMouseOver={props.onMouseOver}  onMouseOut={ props.onMouseOut }  onClick={props.showModal}  alt="Referencias" />
            </figure>
          </div>
          <div className="col-4 hover11 ">
            <figure>
              <img className="botones-portada img-fluid" id="ficha" src={img.DesarrolloOtras}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }    alt="Otras ofertas" />
            </figure>
            </div>
        </div>
        </div>
  </div>
<br/>
  <div className="row">
			<div className="col-12 pie">
				<img className="botones-portada hvr-pop img-fluid" data-tar="Home" onClick={props.changePage} src={img.BtnSalir } alt="Salir" />
			</div>
        </div>



      </React.Fragment>      
   );
}
 
export default DesarrolloProf;