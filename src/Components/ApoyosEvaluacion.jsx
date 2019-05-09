import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
//import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0];
//links = dsLinks[0];

const ApoyosEvaluacion = (props) => {
  return ( 
    <React.Fragment>
      <div className="row">
  
                <div className="col-5">
                    <img alt="esferas" className="img-flotante img-fluid" src={images[0].EvaluacionEsferas } />
                      <div className="row">
  
                            <div className="col-12">
                              <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={images[0].EvaluacionTitulo } />
                            </div>
                      </div>
                      <img className="descripciones2 img-fluid" src={images[0].GeneralCajaDescripcion} alt="Descripción" />
                     <div id="textoDescripcion" className="texto_descripciones">
                       {props.infoCategory}
                     </div>
              </div>
  
                <div className="col-7">
                    <div className="row row-celdas">
                      <div id="arriba" className="col-4 hover11 col-sin-padding">
                        <figure>
                          <img id="rubricas" className="img-fluid btn" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Rúbricas"    src={images[0].EvaluacionLRubricas}  />
                        </figure>
                      </div>
                      <div  className="col-4 hover11 col-sin-padding"  >
                      <figure>
                        <img id="proceso" className="img-fluid btn" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Proceso" src={images[0].EvaluacionProceso}  />
                      </figure>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-4">
  
                      </div>
                      <div className="col-4 hover11 col-sin-padding">
                      <figure>
                        <img id="logro" className="img-fluid  btn" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Logros"  src={images[0].EvaluacionLogros} />
                      </figure>
                      </div>
                    </div>
  
                </div>
  
      </div>
  <div className="row botones-grandes">
    <div  className="col-3"  >

    </div>
    <div className="col-6 hover12" >
      <figure>
        <img className="btn img-fluid" id="" src={images[0].EvaluacionEjemplos}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  onClick={props.showModal} alt="Ejemplos de itemes para pruebas" />
      </figure>
    </div>
    <div  className="col-3"  >

</div>
    <div className="col-12 text-right"  >
        <img data-tar="Home" onClick={props.changePage} className="btn img-fluid hvr-pop" id="" src={images[0].BtnSalir } alt="Salir" />  
    </div>
  </div>
  </React.Fragment>
   );
}
 
export default ApoyosEvaluacion;