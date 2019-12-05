import React, { Component } from 'react';
import images from '../data/images.json';
import ejemplosItemesPrimaria from '../data/evaluacion/ejemplos_itemes_primaria.json';
import ejemplosItemesSecundaria from '../data/evaluacion/ejemplos_itemes_secundaria.json';
import assets from '../data/config/config.json';


//console.log("ejemplosItemesPrimaria",ejemplosItemesPrimaria[0]["Estudios sociales"] );
const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general; 

class EjemplosItemesEvaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asignaturas: null,
            asignatura: null,
            itemes: null
        }
    }
    //Valor de la asignatura seleccionada para guiar la carga de los itemes 
    valor = "";
    //CArga su valor en tiempo de ejecución dependiendo del nivel seleccionado
    ejemplosItemesJson = "";
    materiasPrimaria = ["Ciencias", "Francés", "Italiano", "Inglés", "Matemática"];
    materiasSecundaria = ["Biología", "Ciencias", "Cívica", "Español", "Estudios Sociales", "Física", "Francés", "Inglés", "Italiano", "Química"]

    handlerCargarAsignatura = (e) => {
        const nivel = e.target.value;
        switch (nivel) {
            case "primaria":
                this.setState({ asignaturas: this.materiasPrimaria });
                this.ejemplosItemesJson = ejemplosItemesPrimaria;
                break;
            case "secundaria":
                this.setState({ asignaturas: this.materiasSecundaria });
                this.ejemplosItemesJson = ejemplosItemesSecundaria;
                break;

            default:
                console.log("Opcion fuera de rango");
                break;
        }
    }

    

    handlerSeleccionarAsignatura = (e) => {
        this.valor = e.target.value;
        //console.log("valor", this.valor);             
    }

    handlerCargarItemes = () => {
        this.setState({
            itemes: this.ejemplosItemesJson[0][this.valor]
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12  text-right alert alert-secondary">
                        <img className="bannerRecursos" src={img + "encabezado_ejemplos.jpg"} alt="Encabezado de " />
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarEjemplosItemes} src={imgGeneral + "btn_volver.png"} alt="Volver" />
                    </div>
                </div>



                <div className="input-group-prepend">
                    <label className="input-group-text etiquetas-busquedas" htmlFor="selNiv">
                        Nivel
                    </label>
                </div>

                <div className="row">
                    <div className="col-2">
                        <select className="custom-select buscadores-materias" onClick={this.handlerCargarAsignatura}>
                            <option value="" defaultValue disabled > Seleccione un nivel </option>
                            <option value="primaria"> Primaria </option>
                            <option value="secundaria"> Secundaria </option>
                        </select>
                    </div>




                    <div className="col-3">
                        <select onClick={this.handlerSeleccionarAsignatura} >
                            <option value="" defaultValue disabled> Seleccione una asignatura </option>
                            {
                                this.state.asignaturas != null && (
                                    this.state.asignaturas.map((item, i) => (
                                        <option key={"asignatura" + i} value={item}> {item}  </option>
                                    ))
                                )
                            }
                        </select>
                    </div>
                    <div className="col-7">
                        <button onClick={this.handlerCargarItemes} className="btn btn-secondary btn-lg">
                            Buscar
                        </button>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        {
                            this.state.itemes != null && (
                                <span> <strong> {this.state.itemes.length} </strong>  Itemes encontrados  </span>
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
                                    <a key={"item" + i} href={item.url} className="badge badge-info etiquetas-1" target="_blank" rel="noopener noreferrer">
                                        {item.nombre}
                                    </a>
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