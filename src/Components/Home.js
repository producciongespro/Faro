import React, { Component } from 'react';




class Home extends Component {
  render() {
    return (
      <div>  
          <h1>Inicio</h1>   
          <br/>
          <span data-tar="DocsOficiales"  onClick={this.props.changePage}  >Documentos oficiales</span>
          <br/>
          <hr/>
          <span  data-tar="DesarrolloProf" onClick={this.props.changePage}>Desarollo Profesional</span>
          <br/>
          <hr/>
          <span data-tar="ApoyosPlan"  onClick={this.props.changePage}  >Apoyos en el planeamiento</span>
          <br/>
          <hr/>
          <button data-tar="Portada" className="btn btn-success"  onClick={this.props.changePage} > Portada </button>
          
      </div>
    );
  }
}

export default Home;