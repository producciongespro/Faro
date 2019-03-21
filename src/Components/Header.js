import React, { Component } from 'react';
import BotonNavigation    from "./BotonNavigation";


class Header extends Component {
  render() {
    return (
          <div>
            <BotonNavigation     navigate={this.props.changePage}  label="Portada"  tar="Portada"  /> 
            <BotonNavigation     navigate={this.props.changePage}  label="Inicio"  tar="Home"  /> 
            
          </div>
    );
  }
}

export default Header;
