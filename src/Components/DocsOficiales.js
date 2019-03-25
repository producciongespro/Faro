import React, { Component } from 'react';




class DocsOficiales extends Component {
  render() {
    return (
      <div>  
          <h1>Documentos Oficiales</h1>   
          <br/>
          
          docuemntos...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default DocsOficiales;