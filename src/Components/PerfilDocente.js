import React, { Component } from 'react';
import BotonNavigation from "./BotonNavigation";


class PerfilDocente extends Component {
  render() {
    return (
      <div>
       

      <div  className="titulo" >
          <h1>Perfil docente</h1>       
      </div>
      

        Perfil docente
        <BotonNavigation     method={this.props.method}  label="Inicio"  tar="Home"  />


      </div>
    );
  }
}

export default PerfilDocente;
