import React, { Component } from 'react';


import ejemplosItemesPrimaria from '../data/evaluacion/ejemplos_itemes_primaria.json';
import ejemplosItemesSecundaria from '../data/evaluacion/ejemplos_itemes_secundaria.json';
import assets from '../data/config/config.json';


//console.log("ejemplosItemesSecundaria", ejemplosItemesSecundaria );
const img = assets.img.apoyosEvaluacion;
const imgGenerales = assets.img.general;
var bannerEjemplos;
var plataformaUsada = sessionStorage.getItem('tipoPlataforma');

class EjemplosItemesEvaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asignaturas: null,            
            itemes: null,
            //Valor de la asignatura seleccionada para guiar la carga de los itemes 
            asignaturaSeleccionada: "vacio"
        }
    }
    // Nivel seleccionado (Primaria - Secundaria)
    nivelSeleccionado=null;
    //CArga su valor en tiempo de ejecución dependiendo del nivel seleccionado
    ejemplosItemesJson = "";
    asignaturasPrimaria = [];
    asignaturasSecundaria = [];

    componentDidMount() {
        this.cargarAsignaturaPrimaria();
        this.cargarAsignaturaSecundaria();
    }

    cargarAsignaturaPrimaria() {
        for (let index = 0; index < ejemplosItemesPrimaria.length; index++) {
            this.asignaturasPrimaria.push(ejemplosItemesPrimaria[index].asignatura);
        }
        //console.log("asignaturasPrimaria:",this.asignaturasPrimaria);        
    }

    cargarAsignaturaSecundaria() {
        for (let index = 0; index < ejemplosItemesSecundaria.length; index++) {
            this.asignaturasSecundaria.push(ejemplosItemesSecundaria[index].asignatura);
        }
        //console.log("asignaturasSecundaria:",this.asignaturasSecundaria);        
    }



    handlerCargarAsignatura = (e) => {
        this.nivelSeleccionado = e.target.value;
        switch (this.nivelSeleccionado) {
            case "Primaria":
                this.setState({ asignaturas: this.asignaturasPrimaria });
                this.ejemplosItemesJson = ejemplosItemesPrimaria;
                break;
            case "Secundaria":
                this.setState({ asignaturas: this.asignaturasSecundaria });
                this.ejemplosItemesJson = ejemplosItemesSecundaria;
                break;
            default:
                console.log("Opcion fuera de rango");
                break;
        }
    }

    elegirBanner = () => {
        //console.log("Plataforma es:",plataformaUsada);

        switch (plataformaUsada) {
            case "escritorio":
                bannerEjemplos = "encabezado_ejemplos.jpg";
                break;
            case "movil":
                bannerEjemplos = "encabezado_ejemplosMovil.jpg";
                break;
            default:
                bannerEjemplos = "encabezado_ejemplos.jpg";
                break;
        }
        // console.log("Banner:",bannerEjemplos);       
    }



    handlerSeleccionarAsignatura = (e) => {
        this.setState({ asignaturaSeleccionada: e.target.value }, () => {
            //console.log("Valor asignatura seleccionada", this.state.asignaturaSeleccionada);
            for (let index = 0; index < this.ejemplosItemesJson.length; index++) {
                if (this.ejemplosItemesJson[index].asignatura === this.state.asignaturaSeleccionada) {
                    //console.log(this.ejemplosItemesJson[index].itemes);
                    this.setState({ itemes: this.ejemplosItemesJson[index].itemes });
                }




            }
        });
    }



    render() {
        this.elegirBanner();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-right">
                        <h1>
                            <img className="bannerRecursos" src={img + bannerEjemplos} alt="Encabezado" />
                        </h1>
                        {
                            plataformaUsada === "movil" ?
                                (
                                    <img className="hvr-pop boton-volverMovil img-fluid" onClick={this.props.handlerCerrarEjemplosItemes} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                                :
                                (
                                    <img className="botones-portada hvr-pop boton-volver img-fluid derecha  " onClick={this.props.handlerCerrarEjemplosItemes} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                        }

                    </div>
                </div>

                <div className="row">
                    <div className="input-group col-sm-4">
                        <div className="input-group-prepend">
                            <label className="input-group-text etiquetas-busquedas" htmlFor="selNiv">
                                Nivel
                            </label>

                            <select id="selNiv" className="custom-select buscadores-materias" onChange={this.handlerCargarAsignatura}>
                                <option value="" defaultValue  > Seleccione un nivel </option>
                                <option value="Primaria"> Primaria </option>
                                <option value="Secundaria"> Secundaria </option>
                            </select>

                        </div> </div>
                    <div className="input-grou col-sm-4">
                        <div className="input-group-prepend">
                            <label className="input-group-text etiquetas-busquedas" htmlFor="selAsig">
                                Asignatura
                            </label>

                            <select id="selAsig" className="custom-select buscadores-materias" onChange={this.handlerSeleccionarAsignatura} >
                                <option value="vacio" defaultValue > Seleccione una asignatura </option>
                                {
                                    this.state.asignaturas != null && (
                                        this.state.asignaturas.map((item, i) => (
                                            <option key={"asignatura" + i} value={item}> {item}  </option>
                                        ))
                                    )
                                }
                            </select>
                        </div> </div>
                    <div className="col-sm-4">
                        {
                            /*
                            (this.state.asignaturaSeleccionada !== "vacio") &&
                            (
                                <button onClick={this.handlerCargarItemes} className="btn btn-secondary btn-lg">
                                Buscar
                                </button>
                            )
                            */
                        }
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            this.state.itemes != null && (
                                <span>
                                    <strong> {this.state.itemes.length} </strong>  
                                    Itemes encontrados en {this.state.asignaturaSeleccionada} de {this.nivelSeleccionado}
                                </span>
                            )
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            this.state.itemes != null &&
                            (
                                this.state.itemes.map((item, i) => (
                                    item.url === "nulo" ?
                                        (
                                            <span key={"item" + i} className="not-allowed badge badge-danger etiquetas-1">
                                                 <i className="fas fa-ban"></i> {item.nombre}
                                            </span>
                                        ) :
                                        (
                                            <a key={"item" + i} href={item.url} className="badge badge-info etiquetas-1" target="_blank" rel="noopener noreferrer">
                                                {item.nombre}
                                            </a>
                                        )
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default EjemplosItemesEvaluacion;