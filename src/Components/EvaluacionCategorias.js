import React, { Component } from 'react';
import images from '../data/images.json';
import categoriasEvaluacion from '../data/evaluacion/categorias_evaluacion.json';
import config from '../data/config/config.json';
const serv = config.servidor;

class EvaluacionCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            seleccion : null
         }
         this.subcategorias = "";
         this.obtenerSubCategorias();
    }

    obtenerSubCategorias = () =>{
        //console.log("categoriasEvaluacion", categoriasEvaluacion);        
        for (let index = 0; index < categoriasEvaluacion.length; index++) {
            if (this.props.origen === categoriasEvaluacion[index].categoria  ) {
                this.subcategorias =  categoriasEvaluacion[index].subcategorias;
            }            
        }
        console.log("this.subcategorias",  this.subcategorias );        
    }



    handlerSeleccionar = (e)=> {
        const i = e.target.dataset.indice;
        console.log("indice", this.subcategorias[i].detalles  );
        this.setState({ seleccion: this.subcategorias[i].detalles }, ()=> {
                console.log("Seleccion", this.state.seleccion );
                
        });

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
                <br/><br/>
                <div className="row">
                    <div className="col-4">
                        {                           
                           this.subcategorias.map((item, i)=>(
                                <button className="btn-outline-info  btn-block text-center" key={"subcategoria"+i}  data-indice={i}  title={item.nombre} onClick={this.handlerSeleccionar}  > {item.nombre} </button>
                            ))                        
                           
                        }
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6">
                        {
                            this.state.seleccion !== null && (
                                this.state.seleccion.map((item, i)=>(                                 
                                      (item.nombre !== "Ejemplos de ítemes") ? 
                                        (
                                        <div key={"opcion"+i  }  className="alert alert-primary text-center" role="alert">
                                            <a href={serv +  item.url} className="alert-link" target="_blank" rel="noopener noreferrer"  >
                                                {item.nombre}
                                            </a>                                            
                                        </div>
                                        ) :
                                        (
                                        <div key={"opcion"+i  }  className="alert alert-primary text-center botones-portada" role="alert"  onClick={this.props.handlerAbrirEjemplosItemes}  >                                            
                                               <strong> {item.nombre}</strong>                                            
                                        </div>
                                        )
                                ))
                            )
                        }
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
         );
    }
}
 
export default EvaluacionCategorias;