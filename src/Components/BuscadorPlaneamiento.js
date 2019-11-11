import React, { Component } from 'react';
import dataGeneral from '../data/planeamiento/docs_planeamiento_main.json';
import dataAdultos from '../data/planeamiento/docs_planeamiento_adultos.json';
import dataSecundariaEspanol from '../data/planeamiento/secundaria_espanol.json';
import dataIdiomas from '../data/planeamiento/docs_idiomas.json';
import images from '../data/images.json';
import meses from '../data/meses.json';
import cambiarEtiquetas from '../modulos/cambiarEtiquetas';

var materiasPrimaria = [
    {
        "label": "Artes Industriales",
        "id": "artIndust"
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
        "label": "Francés",
        "id": "frances"
    }, 
    {
        "label": "Inglés",
        "id": "ingles"
    },
    {
        "label": "Orientación",
        "id": "orientacion"
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
        "label": "Francés",
        "id": "frances"
    },
    {
        "label": "Inglés",
        "id": "ingles"
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

var materiaInterculturaPrimaria = [
    {
        "id" : "cBribiBuenosAires",
        "etiqueta" : "Cultura Bribí de Buenos Aires"
    },
    {
        "id" : "cCabecarBuenosAires",
        "etiqueta" : "Cultura Bribí de Buenos Aires"
    },
    {
        "id" : "cCabecarChirripo",
        "etiqueta" : "Cultura Cabécar Chirripó"
    },
    {
        "id" : "lBribriBuenosAires",
        "etiqueta" : "Lengua Bribrí Buenos Aires"
    },
    {
        "id" : "lCabecarBuenosAires",
        "etiqueta" : "Lengua Cabécar Buenos Aires"
    }
]

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

//Se carga en el select con etieuta "Contendio"
var annoPrrescolar = [
    {
        "id": "diagnostico",
        "etiqueta": "Diagnóstico"        
    },
    {
        "id" :"concienciacorporal",
        "etiqueta" : "Conciencia corporal"
    },
    {
        "id" :"imagenCorporal",
        "etiqueta" : "Imagen corporal"
    },
    {
        "id" :"identidadSexual",
        "etiqueta" : "Identidad Sexual"
    },
    {
        "id" :"posibilidadesAccion",
        "etiqueta" : "Posibilidades de acción"
    }

];

var planEstudiosFrancesPrimaria = [
    {
        "id" : "extranjeraFrances",
        "etiqueta" : "Francés como lengua extranjera-Francés"
    },
    {
        "id" : "extranjeraCiencias",
        "etiqueta" : "Francés como lengua extranjera-Ciencias"
    },
    {
        "id" : "extranjeraMatematica",
        "etiqueta" : "Francés como lengua extranjera-Matemáticas"
    },
    {
        "id" : "bilingueFrances",
        "etiqueta" : "Secciones Bilingües Español-Francés: Francés"
    },
    {
        "planEstudios" : "bilingueCiencias",
        "etiqueta" : "Secciones Bilingües Español-Francés: Ciencias"
    },
    {
        "id" : "bilingueMatematica",
        "etiqueta" : "Secciones Bilingües Español-Francés: Matemáticas"
    },
];

var planEstudiosFrancesSecundaria = [
    {
        "id" : "lenguaExtranjera",
        "etiqueta" : "Francés como lengua extranjera"
    },
    {
        "id" : "francesAvanzado",
        "etiqueta" : "Secciones de Francés avanzado"
    }    
]

var planEstudiosInglesPrimaria = [
    {
        "id" : "lenguaExtranjera",
        "etiqueta" : "Inglés como lengua extranjera"
    },
    {
        "id" : "bilingue",
        "etiqueta" : "Secciones Bilingües"
    }
]

var planEstudiosInglesSecundaria = [
    {
        "id" : "lenguaExtranjera",
        "etiqueta" : "Inglés como lengua extranjera"
    },
    {
        "id" : "bilingue",
        "etiqueta" : "Liceos Experimentales bilingües/Secciones Bilingües Español-Inglés"
    }
]

//console.log("Secudnaria frances", dataFrances );


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
        //Mes se usa en caso de español
        this.mes="";
        //Tipo plan se utiliza en caso de lengua extranjera. Ej estados: biblingue, lengua extranejra
        this.tipoPlan="";
        this.etiquetaPlan="";
        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        this.claseCSSMaterias = "input-group mb-3";
        this.cambiarEtiquetas = cambiarEtiquetas;
    }
    handlerObtenerNivel = (e) => {
        this.setState({ nivel: e.target.value });
        //Limpia los estados para las siguientes búsquedas
        this.setState({ materia: "" });
        this.setState({ anno: "" });
        this.mes="";
        console.log("handlerobtenerNivel");        
    }
    handlerObtenerMateria = (e) => {
        this.setState({ materia: e.target.value });
        console.log("handlerobtenerMateria");        
    }
    handlerObtenerAnno = (e) => {
        this.setState({ anno: e.target.value });
    }
    handlerObtenerMes = (e) => {
        this.mes = e.target.value;        
    }
    handlerObtenerTipoPlan = (e) => {
        this.tipoPlan = e.target.value;
        //console.log("tipoPlan",  this.tipoPlan);        
        // * * * * * Obtiene el texto de la opcion seleccionada del select Nota: Esto es SOLO BUENO!!!!!
        this.etiquetaPlan = e.target.options[e.target.selectedIndex].text;        
        console.log("this.etiquetaPlan",  this.etiquetaPlan );     
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
        console.log("***Nivel", this.state.nivel);
        console.log("***Mes", this.mes);

        if (this.state.nivel !== "adultos") {
            //console.log("Seleccion: general");
            arrayNivel = dataGeneral;
        }
        if (this.state.nivel === "adultos") {
            //console.log("Seleccion: Adultos");
            arrayNivel = dataAdultos;
        }
        if (this.state.materia === "espanol" && this.state.nivel === "secundaria") {
            //console.log("Seleccion: espanolSecundaria");
            arrayNivel = dataSecundariaEspanol;
        }
        if (this.state.materia === "frances" || this.state.materia === "ingles"   ) {            
            arrayNivel = dataIdiomas;
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
                                            {
                                                //Plan de estudio en caso de frances e inglés
                                              ( this.state.materia === "frances" || this.state.materia === "ingles" ) && 
                                              (
                                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                                    Plan: {this.etiquetaPlan}
                                                </span>
                                              )
                                            }
                                            
                                        </div>
                                    )
                            }

                            {
                                //Renderizado del cuerpo de las tarjetas:
                                this.state.nivel === "secundaria" && this.state.materia === "espanol" ?
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
                                     : ( 
                                        // Renderizado para los que no son secudnaria español 
                                        <div className="card-body mr-2">
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Lineamiento
                                                </a>
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={arrayNivel[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> Plantilla
                                                </a>
                                                <a className="font-2 badge badge-info mr-2 px-2 py-2" href={ arrayNivel[index].ejemplo} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Ejemplo
                                                </a>
                                            </div>                                                
                                    )  
                                    
                            }


                        </div>
                        <br />
                    </React.Fragment>
                )
                //Filtrado por mes en caso de español secundaria:
                if ( this.state.nivel === "secundaria" && this.state.materia === "espanol") {
                    if (this.mes === arrayNivel[index].mes || this.mes === ""  || this.mes === "todos" ) {
                        arrayTmp.push(arrayHtml);
                    } 
                } else {
                    // Si no se cumple español secundaria se compruban otras condiciones:
                    /* -(1) francés  -(2) inglés */
                    if ( this.state.materia === "frances" || this.state.materia === "ingles" ) {
                        //console.log("Estado primaria francés");                       
                        if (this.tipoPlan === arrayNivel[index].tipoPlan  ) {
                            arrayTmp.push(arrayHtml);
                        }
                    } else {
                        //General (Generico)
                        arrayTmp.push(arrayHtml);
                    }
                    
                }              
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
                        <br/>
                        <strong>Importante:</strong> Si desea ver los planes de español en secundaria, seleccione "Español" en asignatura en lugar de seleccionar "Todas".
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
                                <select className="custom-select buscadores-materias" id="selNivel" onChange={this.handlerObtenerNivel} onClick={this.activarBotonBuscar}  >
                                    <option defaultValue value="seleccione" >Seleccione:</option>
                                    <option value="preescolar"> Preescolar</option>
                                    <option value="primaria"> Primaria </option>
                                    <option value="secundaria"> Secundaria </option>
                                    <option value="adultos"> Jóvenes y adultos </option>
                                    <option value="interculturaPrimaria"> Interculturalidad primaria </option>
                                    <option value="interculturaSecundaria"> Interculturalidad secundaria </option>
                                </select>
                            </div>
                        </div>
                        {/*******Coluimna 2******** AÑO*/}
                        <div className="col-3  ">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">
                                        {
                                            // Si es "educación para adultos" se cambia a modalidad.  Para lo demás es "año"
                                            this.state.nivel === "adultos" ?
                                                <span> Modalidad </span>
                                                :
                                                // Si es preescolar cambia año por contenido
                                                this.state.nivel === "preescolar" ?                                                    
                                                    <span> Contenido </span>
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
                                            <option key={"anno" + i} value={item.id} >  {item.etiqueta}  </option>
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
                                           {
                                    this.state.nivel === "interculturaPrimaria" &&
                                    annoPrimaria.map((item, i) => (
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
                                        {
                                            this.state.nivel==="preescolar" ?
                                                <span>Niveles de desempeño</span>
                                                :
                                                <span>Asignatura</span>
                                        }
                                    </label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerObtenerMateria} >
                                    {
                                        this.state.nivel === "preescolar" &&                                        
                                        <React.Fragment>
                                            <option key={"materia" + 1} value={1} >  I  </option>
                                            <option key={"materia" + 2} value={2} >  II  </option>
                                            <option key={"materia" + 3} value={3} >  III  </option>
                                        </React.Fragment>                                        
                                    }
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
                                        this.state.nivel === "interculturaPrimaria" &&
                                        materiaInterculturaPrimaria.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.etiqueta}  </option>
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



                        {/* Columna 4 COMODIN: MES-PLAN DE ESTUDIOS- preescolar  */}
                        <div className="col-3">
                            {//CASO 1: Secundaria-Español
                                (this.state.materia === "espanol" && this.state.nivel === "secundaria") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Mes
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                            <option defaultValue value="seleccione" >Seleccione:</option>
                                            {
                                                meses.map((item, index) => (
                                                    <option key={"mes" + index} value={item.id}> {item.etiqueta} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )                                
                            //Fin caso 1 **************************
                            }
                            {//CASO 2: primaria en frances - ingles
                                (this.state.materia === "frances" ||  this.state.materia === "ingles") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selPlan">
                                                Plan de estudios
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selPlan" onChange={this.handlerObtenerTipoPlan}  >
                                            <option defaultValue value="seleccione" >Seleccione:</option>
                                            { //Frances primaria
                                                (this.state.materia === "frances" && this.state.nivel === "primaria") && 
                                                (
                                                    planEstudiosFrancesPrimaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id}  data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
                                                    ))
                                                )
                                            }
                                            { //Ingles primaria
                                                (this.state.materia === "ingles" && this.state.nivel === "primaria") && 
                                                (
                                                    planEstudiosInglesPrimaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id}  data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
                                                    ))
                                                )
                                            }
                                            {  //Frances secundaria
                                                (this.state.materia === "frances" && this.state.nivel === "secundaria") && 
                                                (
                                                    planEstudiosFrancesSecundaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id}  data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
                                                    ))
                                                )
                                            }
                                            {  //Inglés secundaria
                                                (this.state.materia === "ingles" && this.state.nivel === "secundaria") && 
                                                (
                                                    planEstudiosInglesSecundaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id}  data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
                                                    ))
                                                )
                                            }
                                        </select>
                                    </div>
                                )                                
                            //Fin caso 2 **************************
                            }
                            {
                                //Caso 3 Preescolar
                                this.state.nivel === "preescolar" &&
                                    // Con diagnóstico
                                    this.state.anno === "diagnostico" ?
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Mes
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                            <option defaultValue value="seleccione" >Seleccione:</option>
                                            <option key={"mes"+1} value="febrero"> Plan de febrero </option>                                            
                                            <option key={"mes"+2} value="marzo"> Plan de marzo </option>                                            
                                        </select>
                                    </div>
                                ) :
                                (
                                    //Sin diagnóstico pero en preescolar
                                    this.state.nivel === "preescolar" && 
                                    (
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Acción procedimental
                                        </label>
                                        </div>
                                            <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                                <option defaultValue value="seleccione" >Seleccione:</option>
                                                <option key={"accion"+1} value="discriminacion"> Discriminación </option>                                            
                                                <option key={"accion"+2} value="identificacion"> Identificación </option>                                            
                                            </select>
                                        </div>
                                    )
                                
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