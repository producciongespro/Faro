import React, { Component } from 'react';
import images from "../data/images.json";




class ApoyoClimaAula extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                
                <img alt="Apoyos para el clima" src={/* images[0].ClimaTitulo */ 1 +1   } />

              </div>
            </div>
          </div>
        </div>




          
          <br/>
          
          ApoyoClimaAula...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default ApoyoClimaAula;