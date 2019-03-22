import React, { Component } from 'react';




class Splash extends Component {
  render() {
    return (
      <div>     
          <img src={this.props.urlImage} alt="Logo Faro" />
          <br/>
          Espere un momento por favor...
      </div>
    );
  }
}

export default Splash;
