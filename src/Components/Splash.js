import React, { Component } from 'react';
import logo from "../img/logo_faro.jpg";



class Splash extends Component {
  render() {
    return (
      <div>     
          <img src={logo} alt="Logo Faro" />
          <br/>
          Espere un momento por favor...
      </div>
    );
  }
}

export default Splash;
