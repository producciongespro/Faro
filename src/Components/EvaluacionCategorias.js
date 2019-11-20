import React, { Component } from 'react';
import images from '../data/images.json';
import categoriasEvaluacion from '../data/evaluacion/categorias_evaluacion.json';

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
                        {
                            console.log(categoriasEvaluacion[0][this.props.origen][0].subcategoria  )                            
                        }                    
                    </h1>                    
                </div>
                <div className="row">
                    <div className="col-12 text-right">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarCategoriasEvaluacion} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        {
                           
                           categoriasEvaluacion[0][this.props.origen][0].subcategoria.map((item, i)=>(
                                <button className="btn btn-outline-info btn-lg btn-block" key={"subcategoria"+i} > {item.nombre} </button>
                            ))
                            
                        }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EvaluacionCategorias;