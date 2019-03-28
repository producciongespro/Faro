import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";




class ApoyosEvaluacion extends Component {
  render() {
    return (


      <div className="">
      <div className="row">
  
                <div className="col-5">
                    <img alt="esferas" className="img-flotante img-fluid" src={images[0].EvaluacionEsferas } />
                      <div className="row">
  
                            <div className="col-12">
                              <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={images[0].EvaluacionTitulo } />
                            </div>
                      </div>
                      <img className="descripciones2 img-fluid" src={images[0].GeneralCajaDescripcion} alt="Descripción" />
                     <div id="textoDescripcion2">
                       {textos[0].Tacaco}
                     </div>
              </div>
  
                <div className="col-7">
                    <div className="row row-celdas">
                      <div id="arriba" className="col-4 hover11 col-sin-padding">
                        <figure>
                          <img id="imgRubricas" className="img-fluid botones-portada btn" alt="Rúbricas"    src={images[0].EvaluacionLRubricas}  />
                        </figure>
                      </div>
                      <div  className="col-4 hover11 col-sin-padding"  >
                      <figure>
                        <img id="imgProceso" className="img-fluid botones-portada btn" alt="Proceso" src={images[0].EvaluacionProceso}  />
                      </figure>
                      </div>
                    </div>
  
                    <div className="row">
                      <div className="col-4">
  
                      </div>
                      <div className="col-4 hover11 col-sin-padding">
                      <figure>
                        <img id="imgLogro" className="img-fluid botones-portada btn" alt="Logros"  src={images[0].EvaluacionLogros} />
                      </figure>
                      </div>
                    </div>
  
                </div>
  
      </div>
  <div className="row botones-grandes">
    <div  className="col-6 hover12"  >
      <figure>
        <img className="botones-portada img-fluid" id="" src={images[0].EvaluacionFicha} alt="Ficha Conceptual" />
    </figure>
    </div>
    <div className="col-6 hover12" >
      <figure>
        <img className="botones-portada img-fluid" id="" src={images[0].EvaluacionEjemplos} alt="Ejemplos" />
      </figure>
    </div>
  </div>
  
      <div className="col-12 text-right"  >
        <img data-tar="Home" onClick={this.props.changePage} className="botones-portada img-fluid" id="salir" src={images[0].BtnSalir } alt="Salir" />  
    </div>
  </div>

    );
  }
}

export default ApoyosEvaluacion;