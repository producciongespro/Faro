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
              <div className="col-4">

              <div className="row mt-2">
                  <div className="col-12">
                    <img  className="img-fluid"  alt="Apoyos para el planeamiento" src={images[0].TituloApoyos  } />
                  </div>
              </div>

              <div className="row row-text" >
                  <div className="col-12 text-justify  div-texto">
                      {textos[0].Lorem}
                  </div>
              </div>

              

              </div>

              
              <div className="col-8">

                  <div className="row mt-5">
                    <div className="col-12">
                    <img  className="img-fluid btn"  alt="Apoyos para el planeamiento" src={images[0].ApoyosPlantilla  } />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <img  className="img-fluid btn"  alt="Apoyos para el planeamiento" src={images[0].ApoyosGuia  } />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <img  className="img-fluid btn"  alt="Apoyos para el planeamiento" src={images[0].ApoyosEjemplo  } />
                    </div>
                  </div>


              </div>
          </div>
          <br />
          <div className="row row-btnsalir">
              <div className="col-12 text-right">
                  <img   data-tar="Home" onClick={this.props.changePage} className="img-fluid btn"  alt="Salir" src={images[0].BtnSalir } />                  
              </div>
          </div>
      </div>
    );
  }
}

export default ApoyosPlan;