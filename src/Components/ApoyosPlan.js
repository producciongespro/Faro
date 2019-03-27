import React, { Component } from 'react';
import textos from "../data/textos.json";
import images from "../data/images.json";




//TODO Revisar cuando carga esto

//console.log("json");
//console.log(textos[0] ) ;



class ApoyosPlan extends Component {
  render() {
    return (
      <div>  
          <div className="row" >
              <div className="col-6">

              <div className="row mt-2">
                  <div className="col-12">
                    <img  className="img-fluid"  alt="Apoyos para el planeamiento" src={images[0].TituloApoyos  } />
                  </div>
              </div>

              <div className="row mt-5 ml-5" >
                  <div className="col-12 text-justify">
                      {textos[0].Lorem}
                  </div>
              </div>

              

              </div>

              
              <div className="col-6">

                  <div className="row mt-5">
                    <div className="col-12">
                    <img  className="img-fluid"  alt="Apoyos para el planeamiento" src={images[0].ApoyosPlantilla  } />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <img  className="img-fluid"  alt="Apoyos para el planeamiento" src={images[0].ApoyosGuia  } />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <img  className="img-fluid"  alt="Apoyos para el planeamiento" src={images[0].ApoyosEjemplo  } />
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