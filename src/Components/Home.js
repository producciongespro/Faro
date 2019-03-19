import React, { Component } from 'react';
import BotonNavigation    from "./BotonNavigation";


class Home extends Component {
  render() {
    return (
      <div>
       

      <div  className="titulo" >
          <h1>Inicio</h1>       
      </div>
      

     Inicio inicio inicio
     <br/>
     <BotonNavigation     method={this.props.method}  label="Documentos Oficiales"  tar="Oficiales"  />
     <br/>
     <BotonNavigation     method={this.props.method}  label="Perfil Docente"  tar="PerfilDocente"  />


      </div>
    );
  }
}

export default Home;
