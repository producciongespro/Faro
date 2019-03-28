import React, { Component } from 'react';
import images from "../data/images.json";
import textos from "../data/textos.json";




class ApoyosEvaluacion extends Component {
  render() {
    return (
      <div className="container" > 
          <div className="row">
          <img alt="esferas" className="img-flotante" src={images[0].EvaluacionEsferas } />
                    <div className="col-6">
                          <div className="row">
                                <div className="col-12">
                                  <img alt="Apoyos para la evaluación" className="img-fluid" src={images[0].EvaluacionTitulo } />
                                </div>
                          </div>
                          <div className="row row-text" >
                                  <div className="col-12 text-justify  div-texto">
                                      {textos[0].Lorem}
                                  </div>
                            </div>
                  </div>

                    <div className="col-6">
                        <div className="row row-celdas">
                          <div className="col-4  col-sin-padding">
                            <img id="imgRubricas" className="img-fluid btn" alt="Rúbricas" src={images[0].EvaluacionLRubricas   } />                            
                          </div>
                          <div className="col-4 col-sin-padding"  >
                            <img id="imgProceso" className="img-fluid btn" alt="Proceso" src={images[0].EvaluacionProceso   } />                            
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-4">
                            
                          </div>
                          <div className="col-4 bg-success col-sin-padding">
                            <img id="imgLogro" className="img-fluid btn" alt="Logros" src={images[0].EvaluacionLogros   } />                            
                          </div>
                        </div>

                    </div>         
          
          </div>

        <div className="row row-btnsalir">
          <div className="col-12 text-right"  > 
            <img data-tar="Home" onClick={this.props.changePage} src={images[0].BtnSalir} className="img-fluid btn"  alt="Botón Salir"/>
          </div>
        </div>

      </div>
    );
  }
}

export default ApoyosEvaluacion;