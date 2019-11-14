import React, { Component } from 'react';
import dataGeneral from '../data/recursos/generales.json';
import images from '../data/images.json';

var materiasPrimaria = ["Artes Plásticas", "Ciencias", "Educación Vial", "Español", "Estudios Sociales", "Francés", "Inglés", "Matemáticas", "Mediación"]


var materiasSecundaria = ["Biología", "Ciencias", "Cívica", "Español", "Estudios Sociales", "Física", "Francés", "Inglés", "Matemáticas", "Mediación", "Química"]


var anoSecundaria = [
    {
        "label": "Sétimo",
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

var annoPrrescolar = [
    {
        "label": "Interactivo I",
        "id": "1"
    },
    {
        "label": "Interactivo II",
        "id": "2"
    },
    {
        "label": "Transición",
        "id": "3"
    }

]

var tipoPoblacion = [
    {
        "label": "Educación para adultos",
        "id": "adultos"
    },
    {
        "label": "Liceos rurales",
        "id": "rurales"
    }
]



class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            materia: ""
        };
        this.anno = "";
        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        this.claseCSSMaterias = "input-group mb-3";
        this.claseCSSPoblacion = "form-check";
        this.planEstudios = "";
        //Oculta la materia en caso de preescolar
        this.ocultarMateria();
    }


    handlerobtenerMateria = (e) => {
        //Limpia la variable plan en caso de que haya sido utilizada anteriormente:
        this.planEstudios="";

        let valor = e.target.value;
        console.log("materia", this.state.materia);
        this.setState({
            materia: valor
        })
    }

    handlerObtenerAnno = (e) => {
        this.anno = e.target.value;
        console.log(this.anno);
    }


    handlerObtenerPoblacion = (e) => {
        let chk = e.target.checked;
        console.log(chk);
        if (chk) {
            this.poblacion = e.target.value;
        } else {
            this.poblacion = "";
        }
        console.log("Poblacion", this.poblacion);
    }

    handlerObtenerApoyos = (e) => {
        let chk = e.target.checked;
        console.log("Valor de apoyos", chk);
        if (chk) {
            this.apoyos = "si"
        } else {
            this.apoyos = ""
        }
        console.log("Apyos", this.apoyos);
    }

    handlerObtenerPlanEstudios = (e) => {
        this.planEstudios = e.target.value
        console.log("Plan estudios", this.planEstudios);
    }



    buscarInfo = () => {

        //console.log(dataGeneral);
        //console.log("Materia a buscar", this.materia );
        //console.log("Año a buscar", this.anno );       

        var arrayHtml;
        var arrayTmp = [];

        for (let index = 0; index < dataGeneral.length; index++) {

            //Expresión regular para materia
            let strMateria = dataGeneral[index].materia;
            let pattMateria = new RegExp(this.state.materia);
            let resMateria = pattMateria.test(strMateria);

            //Expresión regular para año
            let strAnno = dataGeneral[index].anno;
            let pattAnno = new RegExp(this.anno);
            let resAnno = pattAnno.test(strAnno);


            // console.log(  "res Materia",  resMateria   );
            //console.log("res Año", resAnno );          
            //console.log("this.apoyos=", this.apoyos  );
            //console.log( "dataGeneral=", dataGeneral[index].apoyos );





            if (this.props.origen === dataGeneral[index].nivel && resMateria && resAnno && this.poblacion === dataGeneral[index].poblacion && this.apoyos === dataGeneral[index].apoyos &&  dataGeneral[index].plan === this.planEstudios  ) {


                //console.log( "Nombre del recurso", dataGeneral[index].nombre );
                //console.log( "Año:", dataGeneral[index].anno );                

                arrayHtml = (
                    <React.Fragment>
                        <h5>    {dataGeneral[index].nombre} </h5>
                        <span> <strong>  <i className="fab fa-diaspora"></i>  Descripción:</strong>  {dataGeneral[index].desc}  </span>
                        <br />
                        {
                            this.state.materia === "" && (
                                <React.Fragment>
                                    {
                                        (this.props.origen === "primaria" || this.props.origen === "secundaria") &&
                                        (
                                            <span> <strong>   <i className="fab fa-diaspora"></i>    Materia:</strong>  {dataGeneral[index].materia}     </span>
                                        )
                                    }
                                    {
                                        (this.props.origen === "intercultural") &&
                                        (
                                            <span> <strong>   <i className="fab fa-diaspora"></i>    Unidad:</strong>  {dataGeneral[index].materia}     </span>
                                        )
                                    }
                                    <br />
                                </React.Fragment>
                            )
                        }
                        {
                            this.anno === "" && (
                                <React.Fragment>
                                    <span> <strong>  <i className="fab fa-diaspora"></i>  Año:</strong>  {dataGeneral[index].anno}   </span>
                                    <br />
                                </React.Fragment>
                            )
                        }
                        <a href={dataGeneral[index].url} target="_blank" rel="noopener noreferrer" >  Ver recurso  </a>
                        <hr />
                    </React.Fragment>
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


    ocultarMateria() {
        if (this.props.origen === "preescolar") {
            this.claseCSSMaterias = this.claseCSSMaterias + " invisible";
            this.claseCSSPoblacion = this.claseCSSPoblacion + " invisible";
        }
    }




    render() {
        return (
            <React.Fragment>
                <div className="row">

                    <div className="col-12  text-right">
                        {
                            this.props.origen === "preescolar" && <img alt="Preescolar" className="bannerRecursos" src={images[0].RecDidacticosPreescolarBanner} />
                        }
                        {
                            this.props.origen === "primaria" && <img alt="Primaria" className="bannerRecursos" src={images[0].RecDidacticosPrimariaBanner} />
                        }
                        {
                            this.props.origen === "secundaria" && <img alt="Secundaria" className="bannerRecursos" src={images[0].RecDidacticosSecundariaBanner} />
                        }
                        {
                            this.props.origen === "intercultural" && (
                                <h1 className="text-center"  >Interculturalidad</h1>
                                //<img alt="intercultural" className="bannerRecursos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Palenque_glyphs-edit1.jpg/350px-Palenque_glyphs-edit1.jpg" />
                            )

                        }




                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCerrarBuscador} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>





                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            {/* Columna 1 ASIGNATURA (MATERIA) */}
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    {
                                        (this.props.origen === "primaria" || this.props.origen === "secundaria") &&
                                        (
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Asignatura</label>
                                        )
                                    }
                                    {
                                        this.props.origen === "intercultural" &&
                                        (
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">Unidad</label>
                                        )
                                    }
                                </div>
                                <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerobtenerMateria} >
                                    <option defaultValue value="" >Todas</option>
                                    {
                                        this.props.origen === "primaria" &&
                                        materiasPrimaria.map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.props.origen === "secundaria" &&
                                        materiasSecundaria.map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.props.origen === "intercultural" &&
                                        (
                                            <React.Fragment>
                                                <option value="Educación indígena" > Educación indígena  </option>
                                                <option value="Contextualización y pertinencia cultural" > Contextualización y pertinencia cultural  </option>
                                            </React.Fragment>
                                        )
                                    }
                                </select>
                            </div>
                            {/* Fin de Columna 1 ASIGNATURA (MATERIA) */}
                        </div>

                        <div className="col-3  ">
                            {/* Columna 2 AÑO -  */}
                            {
                                // SI NIVEL ES DIFERNETE DE INTERCULTURAL SE RENDERIZA EL SELECT AÑO
                                this.props.origen !== "intercultural" && (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">Año</label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                            <option defaultValue value="" > Todos </option>

                                            {
                                                this.props.origen === "preescolar" &&
                                                annoPrrescolar.map((item, i) => (
                                                    <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                                ))
                                            }
                                            {
                                                this.props.origen === "primaria" &&
                                                annoPrimaria.map((item, i) => (
                                                    <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                                ))

                                            }
                                            {
                                                this.props.origen === "secundaria" &&
                                                anoSecundaria.map((item, i) => (
                                                    <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                            }

                        </div>

                        <div className="col-3">
                            {/* Columna 3 PLAN DE ESTUDIOS EN CASO DE FRANCÉS O ITALIANO -  */}
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
                                            <option value="Secciones Bilingües Español-Francés">Secciones Bilingües Español-Francés</option>
                                        </select>
                                    </div>
                                )
                            }
                        </div>

                        <div className="col-3">

                            <div className={this.claseCSSPoblacion}>

                                <input className="form-check-input" type="checkbox" value={
                                    this.props.origen === "primaria" ? tipoPoblacion[0].id : tipoPoblacion[1].id
                                } onClick={this.handlerObtenerPoblacion} id="chkPoblacion" />
                                <label className="form-check-label" htmlFor="chkPoblacion">
                                    {
                                        this.props.origen === "primaria" ? tipoPoblacion[0].label : tipoPoblacion[1].label
                                    }
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkApyos" onClick={this.handlerObtenerApoyos} />
                                <label className="form-check-label" htmlFor="chkApyos">
                                    Apoyos educativos especiales
                                </label>
                            </div>


                        </div>




                    </div>


                    <div className="row">
                        <div className="col-12 text-right">
                            <button onClick={this.buscarInfo} type="button" className="btn btn-secondary btn-lg">
                                <i className="fas fa-search"></i> Buscar
                            </button>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">

                            <h6>
                                {this.mensaje}
                            </h6>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">
                            {
                                this.state.tarjetas.map((item, i) => (
                                    <div key={"tarjeta" + i} > {item} </div>
                                ))
                            }
                        </div>
                    </div>



                </div>


            </React.Fragment >
        );
    }
}

export default Buscador;