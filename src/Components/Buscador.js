import React, { Component } from 'react';
//import referencias from '../data/config/config.json';
/*
import dataOtros from '../data/recursos/generales.json';
import dataIngles from '../data/recursos/recursos_ingles.json';
import dataFrances from '../data/recursos/recursos_frances.json';
import dataItaliano from '../data/recursos/recursos_italiano.json';
import dataMediacion from '../data/recursos/recursos_mediacion.json';
import dataArtesPlasticas from '../data/recursos/recursos_artes_plasticas.json';
import dataPreescolar from '../data/recursos/recursos_preescolar.json';
*/
import config from '../data/config/config.json';
var plataformaUsada = sessionStorage.getItem('tipoPlataforma');
var bannerPrescolar, bannerPrimaria, bannerSecundaria, bannerFerias;
const img = config.img.recursosDidacticos;
const imgGenerales = config.img.general;


//var materiasPrimaria = ["Artes Plásticas", "Ciencias", "Educación Vial", "Español", "Estudios Sociales", "Francés", "Inglés", "Italiano", "Matemática", "Mediación"]
//var materiasSecundaria = ["Biología", "Ciencias", "Cívica", "Español", "Estudios Sociales", "Física", "Francés", "Inglés", "Italiano", "Matemática", "Mediación", "Química"]
var anoSecundaria = [
    {
        "label": "Séptimo",
        "id": "7"
    },
    {
        "label": "Octavo",
        "id": "8"
    },
    {
        "label": "Noveno",
        "id": "9"
    },
    {
        "label": "Décimo",
        "id": "10"
    },
    {
        "label": "Undécimo",
        "id": "11"
    },
    {
        "label": "Duodécimo",
        "id": "12"
    }
];
var annoPrimaria = [
    {
        "label": "Primero",
        "id": "1"
    },
    {
        "label": "Segundo",
        "id": "2"
    },
    {
        "label": "Tercero",
        "id": "3"
    },
    {
        "label": "Cuarto",
        "id": "4"
    },
    {
        "label": "Quinto",
        "id": "5"
    },
    {
        "label": "Sexto",
        "id": "6"
    }
];




class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            materia: ""
        };
        this.anno = "";
        this.poblacion = "";
        this.apoyos = "0";
        this.mensaje = "";
        this.claseCSSMaterias = "input-group mb-3";
        this.claseCSSPoblacion = "form-check";
        this.planEstudios = "";
        this.materiasPrimaria = JSON.parse (localStorage.getItem("asignaturaPrimaria"));
        this.materiasSecundaria = JSON.parse(localStorage.getItem("asignaturaSecundaria"));
        
        //Oculta la materia en caso de preescolar
        this.cargarAmbientePreescolar();
        
        
    }


    elegirBanner = () => {
        switch (plataformaUsada) {
            case "escritorio":
                bannerPrescolar = "preescolar_banner.png";
                bannerPrimaria = "primaria_banner.png";
                bannerSecundaria = "secundaria_banner.png";
                bannerFerias = "encabezado_feria_cientifica.png";
                break;
            case "movil":
                bannerPrescolar = "preescolar_bannerMovil.png";
                bannerPrimaria = "primaria_bannerMovil.png";
                bannerSecundaria = "secundaria_bannerMovil.png";
                bannerFerias = "encabezado_feria_cientificaMovil.png";
                break;
            default:
                bannerPrescolar = "preescolar_banner.png";
                bannerPrimaria = "primaria_banner.png";
                bannerSecundaria = "secundaria_banner.png";
                bannerFerias = "encabezado_feria_cientifica.png";
                break;
        }
    }


    handlerobtenerMateria = (e) => {
        const tmpMateria = e.target.value;       
        this.setState({ materia: tmpMateria });        
    }

    handlerObtenerAnno = (e) => {
        this.anno = e.target.value;
        console.log(this.anno);
    }

    handlerObtenerApoyos = (e) => {
        let chk = e.target.checked;
        console.log("Valor de apoyos", chk);
        if (chk) {
            this.apoyos = "1"
        } else {
            this.apoyos = "0"
        }
        console.log("Apyos", this.apoyos);
    }



    handleBuscar = () => {
        const origen = this.props.origen;
        console.log("origen", origen);


        switch (origen) {
            case "Preescolar":
                this.buscarRecursosPreescolar();
                break;
            case "Primaria":
            case "Secundaria":
            case "Intercultural":
                this.buscarRecursosGenerales();
            break;
            case "jovenesAdultos":
                this.buscarRecursosJovenesAdultos();
            break;

            default:
                console.log("parametro Origen fuera de rango");

                break;
        }

    }


    buscarRecursosJovenesAdultos = () => {
        console.log("Buscador Jovenes adultos");
        var dataJovenesAdultos = [];


        //CArga del storage
        let tmpArray = JSON.parse(localStorage.getItem("arrayRecursos"));

        console.log("tmpArray",tmpArray);
        

        //filtra el arreglo con solo datos de preescolar
        for (let index = 0; index < tmpArray.length; index++) {
            if (tmpArray[index].id_nivel === "5") {
                dataJovenesAdultos.push(tmpArray[index]);
            }

        }

        console.log("dataPreescolar", dataJovenesAdultos);

        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < dataJovenesAdultos.length; index++) {
            arrayHtml = (


                <div key={"tarjeta" + index} className="col-4">
                <div className="card">
                    <img
                        src={dataJovenesAdultos[index].img_educatico}
                        className="card-img-top"
                        alt={"imagen previa del recurso " + dataJovenesAdultos[index].nombre}
                    />
                    <div className="card-body">
                        <a href={dataJovenesAdultos[index].url}
                         target="_blank"
                         rel="noopener noreferrer"
                        >
                            <h5 className="card-title">
                                {dataJovenesAdultos[index].nombre}
                            </h5>
                        </a>
                        <p className="card-text">
                            {dataJovenesAdultos[index].descripcion}
                        </p>
                    </div>
                    <div className="card-body">                        
                        <a
                            href={dataJovenesAdultos[index].url}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver recurso <i className="fas fa-eye" ></i>                                    
                    </a>
                    </div>
                </div>
            </div>

                
            )
            arrayTmp.push(arrayHtml);
        };
        this.setState({ tarjetas: arrayTmp });
    };


    buscarRecursosPreescolar = () => {
        console.log("Buscador preescolar");
        var dataPreescolar = [];


        //CArga del storage
        let tmpArray = JSON.parse(localStorage.getItem("arrayRecursos"));

        //filtra el arreglo con solo datos de preescolar
        for (let index = 0; index < tmpArray.length; index++) {
            if (tmpArray[index].nombreNivel === "Preescolar") {
                dataPreescolar.push(tmpArray[index]);
            }

        }

        console.log("dataPreescolar", dataPreescolar);

        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < dataPreescolar.length; index++) {
            arrayHtml = (


                <div key={"tarjeta" + index} className="col-4">
                <div className="card">
                    <img
                        src={dataPreescolar[index].img_educatico}
                        className="card-img-top"
                        alt={"imagen previa del recurso " + dataPreescolar[index].nombre}
                    />
                    <div className="card-body">
                        <a href={dataPreescolar[index].url}
                         target="_blank"
                         rel="noopener noreferrer"
                        >
                            <h5 className="card-title">
                                {dataPreescolar[index].nombre}
                            </h5>
                        </a>
                        <p className="card-text">
                            {dataPreescolar[index].descripcion}
                        </p>
                    </div>
                    <div className="card-body">                        
                        <a
                            href={dataPreescolar[index].url}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver recurso <i className="fas fa-eye" ></i>                                    
                    </a>
                    </div>
                </div>
            </div>

                
            )
            arrayTmp.push(arrayHtml);
        };
        this.setState({ tarjetas: arrayTmp });
    };


    buscarRecursosGenerales = () => {
        let dataGeneral = [];
        console.log("origen:", this.props.origen);
        console.log("Materia recibido", this.state.materia);

        const arrayRecursos = JSON.parse(localStorage.getItem("arrayRecursos"));
        console.log("array antes del filtro", arrayRecursos);

        for (let index = 0; index < arrayRecursos.length; index++) {
            if (arrayRecursos[index].materia === this.state.materia) {
                dataGeneral.push(arrayRecursos[index]);
            }

        }
        console.log("dataGeneral (DAtos filtrados por MATERIA:)", dataGeneral);

        var arrayHtml;
        var arrayTmp = [];

        for (let index = 0; index < dataGeneral.length; index++) {


            //Expresión regular para año
            let strAnno = dataGeneral[index].anno;
            let pattAnno = new RegExp(this.anno);
            let resAnno = pattAnno.test(strAnno);

            console.log("resAnno", resAnno);

            if (this.props.origen === dataGeneral[index].nombreNivel && resAnno && dataGeneral[index].apoyos === this.apoyos) {


                //console.log( "Nombre del recurso", dataGeneral[index].nombre );
                //console.log( "Año:", dataGeneral[index].anno );                

                arrayHtml = (
                    <div key={"tarjeta" + index} className="col-4">
                        <div className="card">
                            <img
                                src={dataGeneral[index].img_educatico}
                                className="card-img-top"
                                alt={"imagen previa del recurso " + dataGeneral[index].nombre}
                            />
                            <div className="card-body">
                                <a href={dataGeneral[index].url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                >
                                    <h5 className="card-title">
                                        {dataGeneral[index].nombre}
                                    </h5>
                                </a>
                                <p className="card-text">
                                    {dataGeneral[index].descripcion}
                                </p>
                            </div>
                            <div className="card-body">
                                <span>
                                    Años <strong>{ dataGeneral[index].anno}</strong>
                                </span>
                                <br/>
                                <a
                                    href={dataGeneral[index].url}
                                    className="card-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver recurso <i className="fas fa-eye" ></i>                                    
                            </a>
                            </div>
                        </div>
                    </div>
                )
                arrayTmp.push(arrayHtml);
            }
        };

        if (arrayTmp.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {arrayTmp.length}   </span>  </React.Fragment>);
        }
        this.setState({ tarjetas: arrayTmp });
    }


    cargarAmbientePreescolar() {
        if (this.props.origen === "preescolar") {
            //Carga el json de preescolar
            //dataGeneral = dataPreescolar;
        }
    }




    render() {
        this.elegirBanner();
        return (
            <React.Fragment>
                <div className="row">

                    <div className="col-sm-12  text-right">
                        {
                            this.props.origen === "Preescolar" && <img alt="Preescolar" className="bannerRecursos" src={img + bannerPrescolar} />
                        }
                        {
                            this.props.origen === "Primaria" && <img alt="Primaria" className="bannerRecursos" src={img + bannerPrimaria} />
                        }
                        {
                            this.props.origen === "Secundaria" && <img alt="Secundaria" className="bannerRecursos" src={img + bannerSecundaria} />
                        }
                        {
                            this.props.origen === "Intercultural" && <img alt="intercultural" className="bannerRecursos" src={img + "encabezado_intercultural.png"} />
                        }
                        {
                            this.props.origen === "JovenesAdultos" && <img alt="jovenesAdultos" className="bannerRecursos" src={img + "encabezado_jovenes_adultos.png"} />
                        }
                        {
                            this.props.origen === "FeriaCientifica" && <img alt="feriaCientifica" className="bannerRecursos" src={img + bannerFerias} />
                        }
                        {
                            this.props.origen === "BanderaAzul" && <img alt="banderaAzul" className="bannerRecursos" src={img + "encabezado_bandera_azul.png"} />
                        }

                        {
                            plataformaUsada === "movil" ?
                                (
                                    <img className="hvr-pop boton-volverMovil img-fluid" onClick={this.props.handlerCerrarBuscador} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                                :
                                (
                                    <img className="botones-portada hvr-pop boton-volver img-fluid derecha" onClick={this.props.handlerCerrarBuscador} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                        }

                    </div><br /><br />
                </div>





                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            {/* Columna 1 ASIGNATURA (MATERIA) */}
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    {
                                        (this.props.origen === "Primaria" || this.props.origen === "Secundaria") &&
                                        (
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Asignatura</label>
                                        )
                                    }
                                    {
                                        this.props.origen === "Intercultural" &&
                                        (
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Unidad</label>
                                        )
                                    }
                                </div>
                                {
                                    (this.props.origen !== "Preescolar"  &&  this.props.origen !== "jovenesAdultos") &&
                                    (
                                        <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerobtenerMateria} >
                                            <option defaultValue value="" >Seleccione:</option>
                                            {
                                                this.props.origen === "Primaria" &&
                                                this.materiasPrimaria.map((item, i) => (
                                                    <option key={"materia" + i} value={item.nombre} >  {item.nombre}  </option>
                                                ))
                                            }
                                            {
                                                this.props.origen === "Secundaria" &&
                                                this.materiasSecundaria.map((item, i) => (
                                                    <option key={"materia" + i} value={item.nombre} >  {item.nombre}  </option>
                                                ))
                                            }
                                            {
                                                this.props.origen === "Intercultural" &&
                                                (
                                                    <React.Fragment>
                                                        <option value="Educación Indígena" > Educación Indígena  </option>
                                                        <option value="Contextualización y pertinencia cultural" > Contextualización y pertinencia cultural  </option>
                                                    </React.Fragment>
                                                )
                                            }
                                        </select>
                                    )
                                }
                            </div>
                            {/* Fin de Columna 1 ASIGNATURA (MATERIA) */}
                        </div>

                        <div className="col-sm-3  ">
                            {/* Columna 2 AÑO -  */}
                            {
                                // SI NIVEL ES DIFERNETE DE INTERCULTURAL SE RENDERIZA EL SELECT AÑO
                                (this.props.origen !== "intercultural") && (
                                    (this.props.origen !== "Preescolar" && this.props.origen !== "jovenesAdultos") ? (
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">Año</label>
                                            </div>
                                            <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                                <option defaultValue value="" > Todos </option>
                                                {
                                                    this.props.origen === "Primaria" &&
                                                    annoPrimaria.map((item, i) => (
                                                        <option key={"anno" + i} value={item.label} >  {item.label}  </option>
                                                    ))
                                                }
                                                {
                                                    this.props.origen === "Secundaria" &&
                                                    anoSecundaria.map((item, i) => (
                                                        <option key={"anno" + i} value={item.label} >  {item.label}  </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    ) :
                                        (
                                            // mensaje de preescolar                                 
                                            <span>Oprima el botón buscar para desplegar los recursos.</span>

                                        )


                                )


                            }

                        </div>

                        <div className="col-sm-3">
                            {/* Columna 3 PLAN DE ESTUDIOS EN CASO DE FRANCÉS - INGLÉS - ITALIANO*/}
                            {
                                //Select que se genera al seleccionar francés
                                this.state.materia === "Francés" &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selfrances">Plan de estudio</label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selfrances" onClick={this.handlerObtenerPlanEstudios} >
                                            <option value="" disabled> Seleccione una opción:</option>
                                            <option value="Francés como Lengua Extranjera">Francés como Lengua Extranjera</option>
                                            <option value="Secciones de Francés avanzado">Secciones de Francés avanzado</option>
                                        </select>
                                    </div>
                                )
                            }
                            {
                                //Select que se genera al seleccionar inglés
                                this.state.materia === "Inglés" &&
                                (
                                    this.props.origen === "primaria" ?
                                        (
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selIngles">Plan de estudio</label>
                                                </div>
                                                <select className="custom-select buscadores-materias" id="selIngles" onClick={this.handlerObtenerPlanEstudios} >
                                                    <option value="" disabled> Seleccione una opción:</option>
                                                    <option value="Inglés como Lengua Extranjera">Inglés como Lengua Extranjera</option>
                                                    <option value="Secciones Bilingües Español-Inglés">Secciones Bilingües Español-Inglés</option>
                                                </select>
                                            </div>
                                        ) :
                                        (
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selIngles">Plan de estudio</label>
                                                </div>
                                                <select className="custom-select buscadores-materias" id="selIngles" onClick={this.handlerObtenerPlanEstudios} >
                                                    <option value="" disabled> Seleccione una opción:</option>
                                                    <option value="Inglés como Lengua Extranjera">Inglés como Lengua Extranjera</option>
                                                    <option value="Liceos Experimentales Bilingües/Secciones Bilingües Español-Inglés">Liceos Experimentales Bilingües/Secciones Bilingües Español-Inglés</option>
                                                </select>
                                            </div>
                                        )
                                )

                            }
                            {
                                //Select que se genera al seleccionar Italiano en secundaria
                                (this.state.materia === "Italiano" && this.props.origen === "secundaria") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selfrances">Plan de estudio</label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selfrances" onClick={this.handlerObtenerPlanEstudios} >
                                            <option value="" disabled> Seleccione una opción:</option>
                                            <option value="Lengua Italiana">Lengua Italiana</option>
                                            <option value="Aspectos Culturales">Aspectos Culturales</option>
                                        </select>
                                    </div>
                                )
                            }
                        </div>

                        <div className="col-sm-3">


                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkApyos" onClick={this.handlerObtenerApoyos} />
                                <label className="form-check-label" htmlFor="chkApyos">
                                    Apoyos educativos <br />  especiales
                                </label>
                            </div>


                        </div>




                    </div>


                    <div className="row">
                        <div className="col-sm-12 text-right">
                            <button onClick={this.handleBuscar} type="button" className="btn btn-secondary btn-lg btn_BuscarR2">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-sm-12">

                            <h6>
                                {this.mensaje}
                            </h6>
                        </div>
                    </div>


                    <div className="row">
                        {
                            this.state.tarjetas
                        }
                    </div>



                </div>


            </React.Fragment >
        );
    }
}

export default Buscador;