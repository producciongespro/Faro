import React, { Component } from 'react';
import BotonNavigation    from "./BotonNavigation";
import fondoMAestra from "../img/maestra.jpg";


class Home extends Component {
  render() {
    return (
      <div>
       

      <div  className="titulo" >
          <h1>Inicio</h1>       
      </div>
      

     <img src={fondoMAestra} alt="Maestra" />
     <br/>
     <BotonNavigation     method={this.props.method}  label="Documentos Oficiales"  tar="Oficiales"  /> ...
   
     <BotonNavigation     method={this.props.method}  label="Perfil Docente"  tar="PerfilDocente"  />


      </div>
    );
  }
}

export default Home;
