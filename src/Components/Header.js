import React, { Component } from 'react';
import BotonNavigation    from "./BotonNavigation";


class Header extends Component {
  render() {
    return (
          <div>
            <BotonNavigation     navigate={this.props.changePage}  label="Inicio"  tar="Home"  /> 
            <BotonNavigation     navigate={this.props.changePage}  label="Portada"  tar="Portada"  /> 
          </div>
    );
  }
}

export default Header;
