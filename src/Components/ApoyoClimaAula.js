import React, { Component } from 'react';




class ApoyoClimaAula extends Component {
  render() {
    return (
      <div>  
          <h1>Apoyo clima en el aula</h1>   
          <br/>
          
          ApoyoClimaAula...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default ApoyoClimaAula;