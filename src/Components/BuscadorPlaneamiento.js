import React, { Component } from 'react';
import dataGeneral from '../data/planeamiento/docs_planeamiento_main.json';
import dataAdultos from '../data/planeamiento/docs_planeamiento_adultos.json';
import dataSecundariaEspanol from '../data/planeamiento/plantillas/secundaria_espanol.json';
import images from '../data/images.json';
import meses from '../data/meses.json';
import cambiarEtiquetas from '../modulos/cambiarEtiquetas';

var materiasPrimaria = [
    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios sociales",
        "id": "estudios"
    },
    {
        "label": "Educación física",
        "id": "educFisica"
    },
    {
        "label": "Artes plásticas",
        "id": "artPlast"
    },
    {
        "label": "Educación religiosa",
        "id": "religion"
    },
    {
        "label": "Educación Musical",
        "id": "musica"
    },
    {
        "label": "Inglés I Ciclo",
        "id": "ingles1"
    },
    {
        "label": "Inglés II Ciclo",
        "id": "ingles2"
    },
    {
        "label": "Francés",
        "id": "frances"
    },
    {
        "label": "Francés secciones biblingües",
        "id": "francesBilingue"
    },
    {
        "label": "Inglés I Ciclo",
        "id": "ingles1"
    },
    {
        "label": "Orientación",
        "id": "orientacion"
    },
    {
        "label": "Artes Industriales",
        "id": "artIndust"
    },
    {
        "label": "Educación para la vida Cotidiana",
        "id": "vidaCotidiana"
    }


];

var materiasPrimariaAdultos = [
    {
        "label": "Matemáticas",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios Sociales",
        "id": "estudios"
    }
]

var materiasSecundaria = [
    {
        "label": "Artes Industriales",
        "id": "artesIndustriales"
    },
    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios Sociales",
        "id": "estudios"
    },
    {
        "label": "Biología",
        "id": "biologia"
    },
    {
        "label": "Química",
        "id": "quimica"
    },
    {
        "label": "Física",
        "id": "fisica"
    },
    {
        "label": "Filosofía",
        "id": "filosofia"
    },
    {
        "label": "Educación física",
        "id": "educFisica"
    },
    {
        "label": "Artes plásticas",
        "id": "artPlast"
    },
    {
        "label": "Educación Religiosa",
        "id": "religion"
    },
    {
        "label": "Inglés",
        "id": "ingles"
    },
    {
        "label": "Francés",
        "id": "frances"
    },
    {
        "label": "Psicología",
        "id": "psicologia"
    },
    {
        "label": "Educación Musical",
        "id": "musica"
    },
    {
        "label": "Educación Cívica",
        "id": "civica"
    },
    {
        "label": "Educación Musical",
        "id": "musica"
    },
    {
        "label": "Orienteción",
        "id": "orientacion"
    },
    {
        "label": "Italiano",
        "id": "italiano"
    },
    {
        "label": "Educación para la vida cotidiana",
        "id": "vidaCotidiana"
    }
];

var materiasCan = [
    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Cívica",
        "id": "civica"
    },
    {
        "label": "Educación Religiosa",
        "id": "religion"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Desarrollo Humano",
        "id": "desarrolloHumano"
    },
    {
        "label": "Desarrollo socio laboral",
        "id": "desarrolloSocioLaboral"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios sociales",
        "id": "estudios"
    },
    {
        "label": "Biología",
        "id": "biologia"
    },
    {
        "label": "Química",
        "id": "quimica"
    },
    {
        "label": "Física",
        "id": "fisica"
    },
    {
        "label": "Francés",
        "id": "frances"
    },
    {
        "label": "Inglés",
        "id": "ingles"
    }

];

var materiasConed = [

    {
        "label": "Matemática",
        "id": "matematica"
    },
    {
        "label": "Ciencias",
        "id": "ciencias"
    },
    {
        "label": "Español",
        "id": "espanol"
    },
    {
        "label": "Estudios sociales",
        "id": "estudios"
    },
    {
        "label": "Biología",
        "id": "biologia"
    },
    {
        "label": "Técnico Básico",
        "id": "tecnicoBasico"
    }
];

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

var annoAdultos = [
    {
        "label": "Colegios Académicos Nocturnos (CAN)",
        "id": "can"
    },
    {
        "label": "Colegio Nacional a Distancia",
        "id": "coned"
    },
    {
        "label": "Escuelas Nocturnas Nivel I",
        "id": "en1"
    },
    {
        "label": "Escuelas Nocturnas Nivel II",
        "id": "en2"
    },
    {
        "label": "Escuelas Nocturnas Nivel III",
        "id": "en3"
    },
    {
        "label": "Escuelas Nocturnas Nivel IV",
        "id": "en4"
    },
    {
        "label": "IPEC Cursos libres",
        "id": "ipecCursosLibre"
    },
    {
        "label": "Educación Emergente CINDEA ",
        "id": "ipecEmergente"
    },
    {
        "label": "IPEC - CINDEA Nivel I",
        "id": "ipec1"
    },
    {
        "label": "IPEC - CINDEA Nivel II",
        "id": "ipec2"
    },
    {
        "label": "IPEC - CINDEA Nivel III",
        "id": "ipec3"
    },
    {
        "label": "Móduilos opcionales IPEC-CINDEA",
        "id": "ipecOpcionales"
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

//console.log("Secudnaria español", dataSecundariaEspanol );


class BuscadorPlaneamiento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            nivel: "",
            anno: "",
            buscarActivo: false,
            // En etiqueta es asginatura. Dependiendo de la asignatura se despliega información en la GUI
            materia: ""
        };
        /*
                La propiedad anno se pasa a estado ya que se convierte en modalidad en caso de 
                educaicón para adultos.  Esta propiedad debe camibar materia
        */

        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        this.claseCSSMaterias = "input-group mb-3";
        this.cambiarEtiquetas = cambiarEtiquetas;
    }

    handlerobtenerNivel = (e) => {
        this.setState({ nivel: e.target.value });
        //Limpia los estados para las siguientes búsquedas
        this.setState({ materia: "" });
        this.setState({ anno: "" });
    }

    handlerobtenerMateria = (e) => {
        this.setState({ materia: e.target.value });
    }

    handlerObtenerAnno = (e) => {
        this.setState({ anno: e.target.value });
    }


    activarBotonBuscar = (e) => {
        //Activa el botón buscar 
        // "seleccione" es el valor que tiene el select por defeto, lo cual significa que no ha sido seleccionado
        if (e.target.value !== "seleccione") {
            this.setState({ buscarActivo: true });
        } else {
            this.setState({ buscarActivo: false });
        }
    }

    cargarInformacionBusqueda = () => {
        //Asigna el array del nivel correspondiente de acuerdo al val del select nivel
        let arrayNivel;
        console.log("Nivel", this.state.nivel);

        if (this.state.nivel === "adultos") {
            console.log("Seleccion: Adultos");
            arrayNivel = dataAdultos;
        }
        if (this.state.nivel !== "adultos") {
            console.log("Seleccion: general");
            arrayNivel = dataGeneral;
        }
        if (this.state.materia === "espanol" && this.state.nivel === "secundaria") {
            console.log("Seleccion: espanolSecundaria");
            arrayNivel = dataSecundariaEspanol;
        }

        //console.log(arrayNivel);  

        var arrayHtml;
        var arrayTmp = [];

        for (let index = 0; index < arrayNivel.length; index++) {
            // console.log("Array", arrayNivel[index].materia);


            //Expresión regular para materia
            let strMateria = arrayNivel[index].materia;
            let pattMateria = new RegExp(this.state.materia);
            let resMateria = pattMateria.test(strMateria);

            //Expresión regular para año
            let strAnno = arrayNivel[index].anno;
            let pattAnno = new RegExp(this.state.anno);
            let resAnno = pattAnno.test(strAnno);


            // console.log(  "res Materia",  resMateria   );
            // console.log("res Año", resAnno );          
            //console.log("this.apoyos=", this.apoyos  );
            //console.log( "arrayNivel=", arrayNivel[index].apoyos );



            if (this.state.nivel === arrayNivel[index].nivel && resMateria && resAnno) {

                //console.log( "Nombre del recurso", arrayNivel[index].nombre );
                //console.log( "Año:", arrayNivel[index].anno );                

                arrayHtml = (
                    <React.Fragment>

                        <div className="card">
                            {
                                //Renderizado de los encabezados de las tarjetas en el caso de  educación adultos
                                this.state.nivel === "adultos" ?
                                    (
                                        <div className="card-header">
                                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                                Modalidad: {this.cambiarEtiquetas(arrayNivel[index].anno)}
                                            </span>
                                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                                Materia: {this.cambiarEtiquetas(arrayNivel[index].materia)}
                                            </span>
                                        </div>
                                    ) :
                                    (
                                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                                        <div className="card-header">
                                            <span className="mx-2 badge badge-secondary px-3 py-2 ">
                                                Nivel:  {this.cambiarEtiquetas(arrayNivel[index].nivel)}
                                            </span>
                                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                                Año: {this.cambiarEtiquetas(arrayNivel[index].anno)}
                                            </span>
                                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                                Asignatura: {this.cambiarEtiquetas(arrayNivel[index].materia)}
                                            </span>
                                        </div>
                                    )
                            }

                            {
                                //Renderizado del cuerpo de las tarjetas:
                                this.state.nivel !== "secundaria" ?
                                    (
                                        <React.Fragment>
                                            <div className="card-body mr-2">
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Lineamiento
                                                </a>
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> Plantilla
                                                </a>
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].ejemplo} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Ejemplo
                                                </a>
                                            </div>
                                        </React.Fragment>
                                    ) :
                                    (
                                        <div className="card-body mr-2">
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].lineamientos} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Lineamientos
                                            </a>
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].lectura} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Lectura
                                            </a>
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].monografia} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Monografía
                                            </a>
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].novela} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Novela
                                            </a>
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].transversal} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Trasnversal
                                            </a>
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].mensual} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Mensual
                                            </a>

                                            
                                        </div>
                                    )
                            }


                        </div>
                        <br />
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

    // Cambio de etiqeuta según dato ingresado  como propiedad del json



    // *********** fin cambio de eitqueta
    render() {
        /*
        console.log("Año a buscar", this.state.anno);
        console.log("Materia a buscar", this.state.materia);
        */
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-10  text-right alert alert-secondary">
                        <h3>Documentos de apoyo al Planeamiento</h3>
                    </div>
                    <div className="col-2">
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCloseBuscadorPlaneamiento} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 font-italic">
                        Seleccione primero el nivel que desea, posteriormente el año o modalidad, por último seleccione la materia y
                        el botón "buscar" para encontrar el resultado deseado.
                    </div>
                </div> <hr />

                <div className="container">
                    <div className="row">
                        {/*******Coluimna 1   NIVEL *********/}
                        <div className="col-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selNivel">Nivel</label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selNivel" onChange={this.handlerobtenerNivel} onClick={this.activarBotonBuscar}  >
                                    <option defaultValue value="seleccione" >Seleccione:</option>
                                    <option value="primaria"> Primaria </option>
                                    <option value="secundaria"> Secundaria </option>
                                    <option value="adultos"> Jóvenes y adultos </option>
                                </select>
                            </div>
                        </div>
                        {/*******Coluimna 2******** AÑO*/}
                        <div className="col-3  ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">
                                        {
                                            this.state.nivel === "adultos" ?
                                                <span> Modalidad </span>
                                                :
                                                <span> Año </span>
                                        }
                                    </label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                    <option defaultValue value="" > Todos </option>

                                    {
                                        this.state.nivel === "preescolar" &&
                                        annoPrrescolar.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }


                                    {
                                        this.state.nivel === "primaria" &&
                                        annoPrimaria.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }

                                    {
                                        this.state.nivel === "secundaria" &&
                                        anoSecundaria.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }

                                    {
                                        this.state.nivel === "adultos" &&
                                        annoAdultos.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.label}  </option>
                                        ))

                                    }


                                </select>
                            </div>
                        </div>
                        {/*******Coluimna 3  ASIGNATURA (MATERIA) *********/}
                        <div className="col-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">
                                        Asignatura
                                    </label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerobtenerMateria} >
                                    <option defaultValue value="" >Todas</option>
                                    {
                                        this.state.nivel === "primaria" &&
                                        materiasPrimaria.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                    {
                                        this.state.nivel === "secundaria" &&
                                        materiasSecundaria.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "can" &&
                                        materiasCan.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "coned" &&
                                        materiasConed.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "en1" || this.state.anno === "en2" || this.state.anno === "en3" || this.state.anno === "en4" ?
                                            materiasPrimariaAdultos.map((item, i) => (
                                                <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                            )) : ""
                                    }
                                    {
                                        this.state.anno === "ipec1" || this.state.anno === "ipec2" || this.state.anno === "ipec3" || this.state.anno === "ipec4" ?
                                            materiasSecundaria.map((item, i) => (
                                                <option key={"materia" + i} value={item.id} >  {item.label}  </option>
                                            )) : ""
                                    }



                                </select>
                            </div>
                        </div>



                        {/* Columna 4 MES*/}
                        <div className="col-3">
                            {
                                (this.state.materia === "espanol" && this.state.nivel === "secundaria") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Mes
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerAnno}  >
                                            <option defaultValue value="seleccione" >Seleccione:</option>
                                            {
                                                meses.map((item, index) => (
                                                    <option key={"mes" + index} value={item.id}> {item.etiqueta} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                            }


                        </div>


                    </div>

                    <div className="row">
                        <div className="col-12 text-right">
                            {//Activación del botón dependiendo del valor del select nivel en el método "activarBotonBuscar"
                                this.state.buscarActivo &&
                                <button onClick={this.cargarInformacionBusqueda} type="button" className="btn btn-secondary btn-lg">
                                    <i className="fas fa-search"></i> Buscar
                                    </button>
                            }
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


            </React.Fragment>
        );
    }
}

export default BuscadorPlaneamiento;