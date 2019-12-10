import React, { Component } from 'react';
import categoriasEvaluacion from '../data/evaluacion/categorias_evaluacion.json';
import assets from '../data/config/config.json';

const serv = assets.servidor;

const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general;


class EvaluacionCategorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seleccion: null,
            claseBotones: "",
            claseBotones2: "",
        }
        this.subcategorias = "";
        this.obtenerSubCategorias();    
    }

    componentDidMount =()=>{
        this.cambiarClaseBotones();
    }


    cambiarClaseBotones = () => {        
        if (this.props.origen === "Funciones de la evaluación") {
            //Estilos para boton 1
            this.setState({claseBotones : "btn txt-ajustable btn-lg btn-block text-center btn-funcion" },()=>{
                console.log("clase",this.state.claseBotones);                
            });
            //******Estilos par boton 2 */
            this.setState({claseBotones2 : "btn txt-ajustable btn-lg btn-block text-center btn-funcion2" },()=>{
                console.log("clase",this.state.claseBotones);                
            });           
        } else {
             //******Estilos par boton 1 */
            this.setState({claseBotones : "btn btn-lg txt-ajustable btn-block text-center btn-component" },()=>{
                console.log("clase",this.state.claseBotones);
            });
               //******Estilos par boton 2 */
               this.setState({claseBotones2 : "btn btn-lg txt-ajustable btn-block text-center btn-component2" },()=>{
                console.log("clase",this.state.claseBotones);                
            });
        }
    }

    obtenerSubCategorias = () => {
        //console.log("categoriasEvaluacion", categoriasEvaluacion);        
        for (let index = 0; index < categoriasEvaluacion.length; index++) {
            if (this.props.origen === categoriasEvaluacion[index].categoria) {
                this.subcategorias = categoriasEvaluacion[index].subcategorias;
            }
        }
        console.log("this.subcategorias", this.subcategorias);        
    }



    handlerSeleccionar = (e) => {
        const i = e.target.dataset.indice;
        console.log("indice", this.subcategorias[i].detalles);
        this.setState({ seleccion: this.subcategorias[i].detalles }, () => {
            console.log("Seleccion", this.state.seleccion);

        });

    }

    render() {
        return (
            <div className="container">

              
                <div className="row">
                    <div className="col-12 text-right">
                        <h1>
                        {
                            this.props.origen === "Funciones de la evaluación" ?

                                (
                                    <img className="bannerRecursos" src={img + "encabezado_funciones.png"} alt="Encabezado" />
                                )
                                :
                                (
                                    <img className="bannerRecursos" src={img + "encabezado_componentes.png"} alt="Encabezado" />
                                )
                        }
                    </h1>
                
                        <img className="botones-portada hvr-pop boton-volver img-fluid derecha  " onClick={this.props.handlerCerrarCategoriasEvaluacion} src={imgGeneral + "btn_volver.png"} alt="Volver" />
                    </div>
                    </div>
                
                <br /><br />
                <div className="row">
                    <div className="col-5">
                        {
                            //Botones de la izquierda:
                            this.subcategorias.map((item, i) => (
                                <button className={this.state.claseBotones} key={"subcategoria" + i} data-indice={i} title={item.nombre} onClick={this.handlerSeleccionar}  > {item.nombre} </button>
                            ))

                        }
                    </div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-6">
                        {
                            this.state.seleccion !== null && (
                                this.state.seleccion.map((item, i) => (
                                    (item.nombre !== "Ejemplos de ítemes") ?
                                        (
                                            <div key={"opcion" + i} className={this.state.claseBotones2} role="button">
                                                <a href={serv + item.url} className="alert-link" target="_blank" rel="noopener noreferrer"  >
                                                    {item.nombre}
                                                </a>
                                            </div>
                                        ) :
                                        (
                                            <div key={"opcion" + i} className={this.state.claseBotones2} role="alert" onClick={this.props.handlerAbrirEjemplosItemes}  >
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