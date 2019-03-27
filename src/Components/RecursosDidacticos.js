import React, { Component } from 'react';




class RecursosDidacticos extends Component {
  render() {
    return (
      <div>  
          <h1>Recursos Didácticos</h1>   
          <br/>
          
          RecursosDidacticos...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default RecursosDidacticos;