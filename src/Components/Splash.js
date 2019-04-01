import React, { Component } from 'react';




class Splash extends Component {
  render() {
    return (
        <div className="container bg-white mt-5">
        <br/><br/><br/>
      <div className="row ">     
          <div className="col-12 text-center"  >
              <img src={this.props.urlImage} alt="Logo Faro" />              
          </div>
      </div>
      <br/> <br/> <br/>
        <div className="row">     
        <div className="col-12 text-center">
                Espere un momento por favor...       
        </div>
        </div>
        <br/><br/><br/>
        </div>
    );
  }
}

export default Splash;
              
              
