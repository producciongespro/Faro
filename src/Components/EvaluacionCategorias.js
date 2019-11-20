import React, { Component } from 'react';
import images from '../data/images.json';

class EvaluacionCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron">
                    <h1>
                        {this.props.origen}                    
                    </h1>                    
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarCategoriasEvaluacion} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-success"> Prueba </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EvaluacionCategorias;