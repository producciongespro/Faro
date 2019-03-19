import React, { Component } from 'react';
import BotonNavigation from "./BotonNavigation";


class Oficiales extends Component {
  render() {
    return (
      <div>
       

      <div  className="titulo" >
          <h1>Documentos Oficiales</h1>       
      </div>
      

      documentos importantes
      <BotonNavigation     method={this.props.method}  label="Inicio"  tar="Home"  />


      </div>
    );
  }
}

export default Oficiales;
