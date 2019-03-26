import React, { Component } from 'react';
import textos from "../data/textos.json"



//TODO Revisar cuando carga esto

//console.log("json");
//console.log(textos[0] ) ;



class ApoyosPlan extends Component {
  render() {
    return (
      <div>  
          <div className="row" >
              <div className="col-4">

              <div className="row mt-2">
                  <div className="col-12">
                      <h1>Apoyos para el planeamiento</h1>
                  </div>
              </div>

              <div className="row mt-5 ml-5" >
                  <div className="col-12 text-justify">
                      {textos[0].Lorem}
                  </div>
              </div>

              

              </div>
              <div className="col-8">

                  <div className="row mt-5">
                    <div className="col-12">
                        <h3>PLANTILLA</h3>
                        <h6>de planeamiento</h6>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                        <h3>TABLA GUÍA</h3>
                        <h6>de habilidaes e indicadores</h6>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                        <h3>EJEMPLOS</h3>
                        <h6>para la mediación</h6>
                    </div>
                  </div>


              </div>
          </div>
          <hr/>
          <div className="row">
              <div className="col-12 text-right">
                  <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
              </div>
          </div>
      </div>
    );
  }
}

export default ApoyosPlan;