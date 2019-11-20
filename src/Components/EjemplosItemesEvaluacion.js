import React, { Component } from 'react';
import images from '../data/images.json';
//import categoriasEvaluacion from '../data/evaluacion/categorias_evaluacion.json';

class EjemplosItemesEvaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron">
                    <h2>Ejemplos de itemes</h2>
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarEjemplosItemes} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>
                <div className="row">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate omnis saepe sint molestias quia nihil rerum optio nemo. Exercitationem, veniam. Rerum quisquam autem eveniet tempore doloribus quod hic quibusdam error?
                </div>
            </div>
         );
    }
}
 
export default EjemplosItemesEvaluacion;