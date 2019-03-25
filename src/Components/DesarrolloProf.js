import React, { Component } from 'react';




class DocsOficiales extends Component {
  render() {
    return (
      <div>  
          <h1>Desarrollo Profesional</h1>   
          <br/>
          
          Profesional...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default DocsOficiales;