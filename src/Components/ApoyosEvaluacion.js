import React, { Component } from 'react';




class ApoyosEvaluacion extends Component {
  render() {
    return (
      <div>  
          <h1>Apoyos para la Evaluación</h1>   
          <br/>
          
          evaluación...
          <hr/>
          <hr/>
          <button data-tar="Home" className="btn btn-success"  onClick={this.props.changePage} > SALIR </button>
      </div>
    );
  }
}

export default ApoyosEvaluacion;