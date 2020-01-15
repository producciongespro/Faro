import React, { Component } from 'react';


import ejemplosItemesPrimaria from '../data/evaluacion/ejemplos_itemes_primaria.json';
import ejemplosItemesSecundaria from '../data/evaluacion/ejemplos_itemes_secundaria.json';
import assets from '../data/config/config.json';


//console.log("ejemplosItemesPrimaria",ejemplosItemesPrimaria[0]["Estudios sociales"] );
const img = assets.img.apoyosEvaluacion;
const imgGenerales = assets.img.general;
var bannerEjemplos;
var plataformaUsada = sessionStorage.getItem('tipoPlataforma');

class EjemplosItemesEvaluacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asignaturas: null,
            asignatura: null,
            itemes: null,
            asignaturaSeleccionada : false            
        }
    }
    //Valor de la asignatura seleccionada para guiar la carga de los itemes 
    valor = "-1";
    //CArga su valor en tiempo de ejecución dependiendo del nivel seleccionado
    ejemplosItemesJson = "";
    materiasPrimaria = ["Ciencias", "Francés", "Italiano", "Inglés", "Matemática" ];
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

    elegirBanner = () =>{
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
        this.valor = e.target.value;
        console.log("***Valor", this.valor);
        if (parseInt(this.valor) !== -1) {
            this.setState({ asignaturaSeleccionada: true });  
        } else {
            this.setState({ asignaturaSeleccionada: false });  
        }
                 
    }

    handlerCargarItemes = () => {
        this.setState({
            itemes: this.ejemplosItemesJson[0][this.valor]
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
                        
                            <select id="selNiv" className="custom-select buscadores-materias" onClick={this.handlerCargarAsignatura}>
                                <option value="" defaultValue  > Seleccione un nivel </option>
                                <option value="primaria"> Primaria </option>
                                <option value="secundaria"> Secundaria </option>
                            </select>
                        
                    </div> </div>
                    <div className="input-grou col-sm-4">
                        <div className="input-group-prepend">     
                            <label className="input-group-text etiquetas-busquedas" htmlFor="selAsig">
                                Asignatura
                            </label>
                       
                            <select id="selAsig" className="custom-select buscadores-materias" onClick={this.handlerSeleccionarAsignatura} >
                                <option value= {-1} defaultValue > Seleccione una asignatura </option>
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
                            this.state.asignaturaSeleccionada &&
                            (
                                <button onClick={this.handlerCargarItemes} className="btn btn-secondary btn-lg">
                                Buscar
                                </button>
                            )
                        }
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