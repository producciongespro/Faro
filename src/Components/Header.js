import React, { Component } from 'react';
import BotonNavigation    from "./BotonNavigation";


class Header extends Component {
  render() {
    return (
          <div>
            <BotonNavigation     method={this.props.method}  label="Inicio"  tar="Home"  /> 
            <BotonNavigation     method={this.props.method}  label="Portada"  tar="Portada"  /> 
          </div>
    );
  }
}

export default Header;
