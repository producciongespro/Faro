import React, { Component } from 'react';

//Referencias preescolar
import categoriasPreescolar from '../data/planeamiento/preescolar/select_preescolar.json';
import dataPreescolar from '../data/planeamiento/preescolar/docs_plan_preescolar.json';

//Referecnias idiomas
import dataIdiomas from '../data/planeamiento/idiomas/docs_plan_idiomas.json';

//Referencias de primaria
import selectEspanolPrimaria from '../data/planeamiento/primaria/select_espanol_primaria.json';
import distribucionPrimaria from '../data/planeamiento/primaria/ditribucion_materias_primaria.json';
import dataPrimaria from '../data/planeamiento/primaria/docs_plan_primaria.json';
import dataPrimariaEspanol from '../data/planeamiento/primaria/docs_plan_primaria_espanol.json';
import dataPrimariaCiencias from '../data/planeamiento/primaria/docs_plan_primaria_ciencias.json';
import dataPrimariaMate from '../data/planeamiento/primaria/docs_plan_primaria_matematica.json';
import dataPrimariareligion from '../data/planeamiento/primaria/docs_plan_primaria_religion.json';


//Referencias secundaria
import distribucionSecundaria from '../data/planeamiento/secundaria/ditribucion_materias_secundaria.json';
import dataSecundaria from '../data/planeamiento/secundaria/docs_plan_secundaria.json';
import dataSecundariaEspanol from '../data/planeamiento/secundaria/docs_plan_secundaria_espanol.json';
import dataSecundariaMate from '../data/planeamiento/secundaria/docs_plan_secundaria_matematica.json';
import dataSecundariaReligion from '../data/planeamiento/secundaria/docs_plan_secundaria_religion.json';


// Referencias Jóvenes y adultos
import distribucionAdultosConed from '../data/planeamiento/adultos/ditribucion_materias_adultos_coned.json';
import distribucionAdultosCan from '../data/planeamiento/adultos/ditribucion_materias_adultos_can.json';
import dataAdultos from '../data/planeamiento/adultos/docs_plan_adultos.json';
import dataAdultosEspa from '../data/planeamiento/adultos/docs_plan_adultos_espanol.json';
import dataAdultosMate from '../data/planeamiento/adultos/docs_plan_adultos_matematica.json';

//Referencias interculturalidad
import dataInterculturalPrimaria from '../data/planeamiento/intercultural/docs_plan_intercultural_primaria.json';
import dataInterculturalSecundaria from '../data/planeamiento/intercultural/docs_plan_intercultural_secundaria.json';

//Referencias Unidocentes
import dataUnidocente from '../data/planeamiento/unidocente/docs_plan_unidocente.json';

//Referencias pedagogía hospitalaria
import dataPedagogiaHospitalaria from '../data/planeamiento/hospitalaria/docs_plan_pedagogia_hosp.json'

// Select General
import listasPlan from '../data/planeamiento/select_general.json';



import assets from '../data/config/config.json';

const img = assets.img.apoyosPlan;
const imgGenerales = assets.img.general;
const serv = assets.servidor;


//console.log("distribucionPrimaria", distribucionPrimaria );
//console.log("distribucionSecundaria", distribucionSecundaria);

//console.log("III ciclo", listasPlan["Secundaria III Ciclo"] );
//console.log("Secundaria IV Ciclo", listasPlan["Secundaria IV Ciclo"] );


//console.log("servidor", serv);
//console.log("selectEspanolPrimaria", selectEspanolPrimaria["Primero"] );
//console.log("Secudnaria frances", dataFrances );
//console.log("listasPlanipec",listasPlan);
//console.log("categoriasPreescolar", categoriasPreescolar);
//console.log("dataPrimariaEspanol", dataPrimariaEspanol);
//console.log("dataPedagogiaHospitalaria", dataPedagogiaHospitalaria);



class BuscadorPlaneamiento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            nivel: "",
            //Primaria, secundaria e intercultural (anno):
            anno: "",
            //unidocentes:
            correlacionado: "",
            //En jóvenes y adultos en lugar de año:
            modalidad: "",
            // En jóvens y adultos en lugar de asignatura (materia)
            modulo: "",
            asginatura: "",
            buscarActivo: false,
            // En etiqueta es asginatura. Dependiendo de la asignatura se despliega información en la GUI
            materia: "",
            //estado en caso de preescolar para actualizar los select: "desempeño" y acción procedimental
            indiceContenido: 0,
            indiceDesempeno: 0,
            //Preecolar o español primaria: 
            contenidoEsp: "",
            desempeno: "",
            //Distribución de plan para las materias: mensual, trimestral, anual
            distribucionPlan: "",
            //Mes se usa en caso de español, materias con plan mensual o unidocentes
            mes: "",
            //Tipo plan se utiliza en caso de lengua extranjera. Ej estados: biblingue, lengua extranejra
            tipoPlan: ""
        };
        /*
                La propiedad anno se pasa a estado ya que se convierte en modalidad en caso de 
                educaicón para adultos.  Esta propiedad debe camibar materia
        */


        this.etiquetaPlan = "";
        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        //Datos de json para preescolar        
        this.accion = "";
        //Array filtrado con los criterios establecidos por el usuario
        this.arrayResultado = null;
        //Para las materias que presentan plan por trimestre:
        this.periodo = "";
        this.plataformaUsada = sessionStorage.getItem('tipoPlataforma');


        //Clase CSS
        this.claseCSSMaterias = "input-group mb-3";
    }
    handlerObtenerNivel = (e) => {
        //SELECT 1
        this.setState({ nivel: e.target.value }, () => {
            //console.log("nivel seleccionado", this.state.nivel);
        });
        //Limpia los estados para las siguientes búsquedas
        this.setState({ materia: "" });
        this.setState({ anno: "" });
        this.setState({ mes: "" });
    }

    handlerObtenerAnno = (e) => {
        //SELECT 2
        //almacena en un estado el indice de la opción seleccionada

        switch (this.state.nivel) {
            case "Preescolar":
                //Por cargar solamente dos select el btn buscar se activa en el segundo select    
                this.activarBotonBuscar();
                this.setState({ indiceContenido: e.target.selectedIndex });

                this.setState({ contenidoEsp: e.target.value }, () => {
                    console.log("Contenido seleccionado:", this.state.contenidoEsp);
                });

                break;
            case "Primaria":
            case "Secundaria":
            case "Interculturalidad Primaria":
            case "Interculturalidad Secundaria":
            case "Pedagogía Hospitalaria":
                this.setState({ anno: e.target.value }, () => {
                    console.log("Año seleccionado", this.state.anno)
                });
                break;
            case "Unidocentes":
                this.setState({ correlacionado: e.target.value }, () => {
                    console.log("Correlacionado", this.state.correlacionado)
                });
                break;
            case "Jóvenes y Adultos":
                this.setState({ modalidad: e.target.value }, () => {
                    console.log("modalidad:", this.state.modalidad)
                });
                break;
            default:
                console.log("Opcion fuera de rango en select nivel");
                break;
        }

    }

    handlerObtenerMateria = (e) => {
        //SELECT 3        
        //console.log("indice de select Niveles de desempeño: ", e.target.selectedIndex);
        let valor = e.target.value;
        switch (this.state.nivel) {
            case "Preescolar":
                this.setState({ indiceDesempeno: e.target.selectedIndex }, () => {
                    console.log("indice desempeño", this.state.indiceDesempeno);
                });
                this.setState({ desempeno: valor }, () => {
                    console.log("Desempeño:", this.state.desempeno);
                });
                break;
            case "Primaria":
                this.setState({ materia: valor }, () => {
                    console.log("Materia seleccionada", this.state.materia)
                    //Distribución Materias Primaria
                    if (this.state.materia !== "") {
                        this.setState({ distribucionPlan: distribucionPrimaria[this.state.materia].distribucion }, () => {
                            console.log("Distribución primaria:", this.state.distribucionPlan);
                        });
                    }
                });
                break;
            case "Interculturalidad Primaria":
                this.setState({ materia: valor }, () => {
                    console.log("Materia seleccionada en intercultural primaria", this.state.materia);
                });
                break;
            case "Secundaria":
                this.setState({ materia: valor }, () => {
                    console.log("Materia seleccionada", this.state.materia)
                    //Distribución Materias Secundaria
                    if (this.state.materia !== "") {
                        this.setState({ distribucionPlan: distribucionSecundaria[this.state.materia].distribucion }, () => {
                            console.log("Distribución Secundaria:", this.state.distribucionPlan);
                        });
                    }
                });
                break;
            case "Unidocentes":
                this.setState({ asignatura: valor }, () => {
                    console.log("Asignatura seleccionada", this.state.asignatura)
                });
                break
            case "Pedagogía Hospitalaria":
                this.setState({ materia: valor }, () => {
                    console.log("materia seleccionada", this.state.materia)
                });
                break
            case "Jóvenes y Adultos":
                this.setState({ modulo: valor }, () => {
                    //console.log("Módulo seleccionado:", this.state.modulo)
                    if (this.state.modalidad === "Colegios Académicos Nocturnos (CAN)") {
                        //obtiene el tipo de plan para Colegios Acedemicos Nocturnos:
                        //console.log("distribucionAdultosCan", distribucionAdultosCan[this.state.modulo]);
                        //Validación de campo no nulo
                        if (distribucionAdultosCan[this.state.modulo] !== undefined) {
                            this.setState({ distribucionPlan: distribucionAdultosCan[this.state.modulo].distribucion }, () => {
                                console.log("Distribución del plan en CAN con la materia", this.state.modulo, ": ", this.state.distribucionPlan);
                            });
                        }
                    }
                    if (this.state.modalidad === "Colegio Nacional de Educación a Distancia (CONED)") {
                        //obtiene el tipo de plan para CONED:
                        //console.log("distribucionAdultosConed", distribucionAdultosConed[this.state.modulo] );
                        if (distribucionAdultosConed[this.state.modulo] !== undefined) {
                            this.setState({ distribucionPlan: distribucionAdultosConed[this.state.modulo].distribucion }, () => {
                                console.log("Distribución del plan en CONED con la materia", this.state.modulo, ": ", this.state.distribucionPlan)
                            });
                        }
                    }
                    if (this.state.modalidad === "IPEC CINDEA Nivel I" || this.state.modalidad === "IPEC CINDEA Nivel II" || this.state.modalidad === "IPEC CINDEA Nivel III") {
                        this.setState({ distribucionPlan: "Anual" });
                    }
                });
                break;
            default:
                console.log("Opcion en select materia fuera de rango");
                break;
        }
        //console.log("Materia seleccionada", valor);             
        //Activa el boton buscar:
        this.activarBotonBuscar();
    }

    // SELECT 4 (COMODIN) Varía el manejador de eventos según el nivel que se escoja
    handlerObtenerMes = (e) => {
        let mes = e.target.value;
        this.setState({ mes: mes });
        console.log("Mes seleccionado", mes);
    }

    handlerObtenerPeriodo = (e) => {
        //Materias que presetnan plan por periodos:
        // complementarias de unidocentes, 
        this.periodo = e.target.value;
        console.log("Periodo seleccionado", this.periodo);
    }

    handlerObtenerTipoPlan = (e) => {
        //En el caso de idiomas
        const tipoPlan = e.target.value;
        this.setState({ tipoPlan: tipoPlan });
        //console.log("tipoPlan",  this.tipoPlan);        
        // * * * * * Obtiene el texto de la opcion seleccionada del select Nota: Esto es SOLO BUENO!!!!!
        //this.etiquetaPlan = e.target.options[e.target.selectedIndex].text;
        // La instruccion que obtiene la etiqueta del option en lugar del value no fucniona en firefox
        this.etiquetaPlan = tipoPlan;
        console.log("Tipo de plan seleccionado:", this.etiquetaPlan);
    }

    handlerObtenerAccion = (e) => {
        this.accion = e.target.value;
        console.log("Accion", this.accion);

    }

    handlerObtenerContenido = (e) => {
        //Obtener contenido en caso de primaria Español
        let valor = e.target.value;
        this.setState({ contenidoEsp: valor }, () => {
            console.log("CCCContenido en español primaria", this.state.contenidoEsp);
        });
    }

    /** Botón Buscar */
    activarBotonBuscar = (e) => {
        //Activa el botón buscar 
        this.setState({ buscarActivo: true });
    }

    filtrarBasico = (nivel, anno, materia, mes, tipoPlan, contenido) => {

        //console.log("parametros de filtrarBasico***********************");
        //console.log("nivel", nivel);
        //console.log("anno", anno);
        //console.log("materia", materia);
        //console.log("mes", mes);                
        //console.log("tipoPlan", tipoPlan);
        //console.log("*****************************************************");


        let array;
        let tmpArray = [];
        //el comoidn determina cual es el tipo del cuarto select
        // puede ser: mes o plan estudios
        let tipoComodin = "nulo";
        /*
        Devuelve un array filtrado con la búsqueda del usuario en 
        primaria, secundaria (excepto español) e interulturalidad
        */
        if (this.state.nivel === "Primaria") {
            //console.log("Seleccion: general");
            array = dataPrimaria;
        }
        if (this.state.nivel === "Secundaria" && this.state.materia !== "Español") {
            //console.log("Seleccion: general");
            array = dataSecundaria;
        }
        if (this.state.materia === "Inglés" || this.state.materia === "Francés" || this.state.materia === "Italiano") {
            array = dataIdiomas;
            if (this.state.nivel === "Secundaria") {
                tipoComodin = "plan"
            }
            if (this.state.nivel === "Primaria" && this.state.materia !== "Italiano") {
                tipoComodin = "plan"
            }

        }
        //*****INTERCULTURAL
        if (this.state.nivel === "Interculturalidad Primaria") {
            //console.log("Seleccion: Adultos");
            array = dataInterculturalPrimaria;
            //console.log("Array intercultural primaria", array);                      
        }
        if (this.state.nivel === "Interculturalidad Secundaria") {
            array = dataInterculturalSecundaria;
        }

        //Condiciones para  las diferentes modalidades con MES:

        //ESPAÑOL SECUNDARIA:
        if (this.state.nivel === "Secundaria" && this.state.materia === "Español") {
            tipoComodin = "mes";
            array = dataSecundariaEspanol;
        }

        //MATE SECUNDARIA:
        if (this.state.nivel === "Secundaria" && this.state.materia === "Matemática") {
            tipoComodin = "mes";
            array = dataSecundariaMate;
        }

        //RELIGION SECUNDARIA
        if (this.state.nivel === "Secundaria" && this.state.materia === "Educación Religiosa") {
            console.log("Seleccion: Educación Religiosa en secundaria");
            array = dataSecundariaReligion;
        }

        //ESPAÑOL PRIMARIA
        if (this.state.nivel === "Primaria" && this.state.materia === "Español") {
            console.log("Seleccion: español primaria");
            tipoComodin = "contenido";
            array = dataPrimariaEspanol;
        }
        //CIENCIAS PRIMARIA
        if (this.state.nivel === "Primaria" && this.state.materia === "Ciencias") {
            console.log("Seleccion: ciencias primaria");
            tipoComodin = "mes";
            array = dataPrimariaCiencias;
        }

        //MATEMATICA PRIMARIA
        if (this.state.nivel === "Primaria" && this.state.materia === "Matemática") {
            console.log("Seleccion: mate primaria");
            tipoComodin = "mes";
            array = dataPrimariaMate;
        }

        //RELIGION PRIMARIA
        if (this.state.nivel === "Primaria" && this.state.materia === "Educación Religiosa") {
            console.log("Seleccion: Educación Religiosa en primaria");
            array = dataPrimariareligion;
        }

        //Opciones para la búsqueda
        switch (tipoComodin) {
            case "nulo":
                console.log("tipoComodin: NULO");
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia) {
                        tmpArray.push(array[index]);
                    }
                }
                break;
            case "mes":
                console.log("tipoComodin: MES");
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia && array[index].mes === mes) {
                        tmpArray.push(array[index]);
                    }
                }
                break;
            case "plan":
                //console.log("-----Busqueda con PLAN --- ARRAY:", array);
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia && array[index].tipoPlan === tipoPlan) {
                        tmpArray.push(array[index]);
                    }
                }
                break;
            case "contenido":
                //console.log("-----Busqueda con contenido:", array);
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia && array[index].contenido === contenido) {
                        tmpArray.push(array[index]);
                    }
                }
                break;


            default:
                console.log("tipoComodin seleccionado fuera de rango");
                break;
        }
        //console.log("Array para buscar", array);
        //console.log("mesActivo", mesActivo);        
        return tmpArray;
    }

    filtrarUnidocente_VIEJO = (nivel, correlacionado, asignatura, mes, periodo) => {
        console.log("correlacionado", correlacionado);
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataUnidocente;

        switch (asignatura) {
            case "Ciencias":
            case "Matemática":
            case "Español":
            case "Estudios Sociales":
                for (let index = 0; index < array.length; index++) {
                    //if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura) {
                    if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura && array[index].mes === mes) {
                        tmpArray.push(array[index]);
                    }
                }
                break;
            case "Educación Física":
            case "Artes Plásticas":
            case "Educación para el Hogar":
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura && array[index].periodo === periodo) {
                        tmpArray.push(array[index]);
                    }
                }
                break;
            case "Inglés":
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura) {
                        tmpArray.push(array[index]);
                    }
                }
                break;

            default:
                console.log("asignatura fuera de rango en busqueda unidocentes");
                break;
        }



        return tmpArray;
    }

    filtrarUnidocente = (nivel, asignatura) => {
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataUnidocente;
        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].asignatura === asignatura) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }


    filtrarPedagogiaHospitalaria = (nivel, anno, materia) => {
        //console.log("modalidad", modalidad);
        let array = dataPedagogiaHospitalaria;
        let tmpArray = [];
        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }

    filtrarJovenesAdultos = (nivel, modalidad, modulo, mes) => {
        //console.log("modalidad", modalidad);
        let array;
        let tmpArray = [];
        //Carga del array de Jóvenes y adultos:
        array = dataAdultos;
        if (this.state.modulo === "Español") {
            array = dataAdultosEspa;
        };
        if (this.state.modulo === "Matemática") {
            array = dataAdultosMate;
        };


        //Validación por mes o por año

        if (this.state.distribucionPlan === "Mensual") {
            for (let index = 0; index < array.length; index++) {
                if (array[index].nivel === nivel && array[index].modalidad === modalidad && array[index].modulo === modulo && array[index].mes === mes) {
                    tmpArray.push(array[index]);
                }
            }
        } else {
            for (let index = 0; index < array.length; index++) {
                if (array[index].nivel === nivel && array[index].modalidad === modalidad && array[index].modulo === modulo) {
                    tmpArray.push(array[index]);
                }
            }
        }
        return tmpArray;
    }

    filtrarPreescolar = (nivel, contenido) => {
        //console.log("modalidad", modalidad);
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataPreescolar;

        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].contenido === contenido) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }

    /*NOTA: Queda en comentario este método con el objetivo de preveer un nuevo requerimiento
    filtrarPreescolar1 = (nivel, contenido, desempeno, accion) => {        
        let array;
        let tmpArray = [];        
        array = dataPreescolar;
        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].contenido === contenido && array[index].desempeno === desempeno && array[index].accion === accion) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }
    */

    //en evento del botón buscar
    handlerBuscarRegistrosPorNivel = () => {
        /*
        console.log("********Contenido", this.state.contenido );
        console.log("***********Desempeño", this.state.desempeno );
        console.log("*********Accion", this.accion);
        */

        console.log("Modulo", this.state.modulo);
        console.log("Nivel", this.state.nivel);
        console.log("Materia", this.state.materia);
        console.log("Contenido", this.state.contenidoEsp);
        console.log("Año", this.state.anno);
        console.log("Modalidad", this.state.modalidad);
        console.log("Tipo de Plan", this.state.tipoPlan);

        switch (this.state.nivel) {
            case "Secundaria":
                this.arrayResultado = this.filtrarBasico(this.state.nivel, this.state.anno, this.state.materia, this.state.mes, this.state.tipoPlan, this.state.contenidoEsp);
                if (this.state.materia === "Español") {
                    this.tarjetasEspanolSecundaria(this.arrayResultado);
                }
                if (this.state.materia === "Educación Religiosa") {
                    this.tarjetasReligion(this.arrayResultado);
                }
                if (this.state.materia !== "Español" && this.state.materia !== "Educación Religiosa") {
                    this.tarjetasBasico(this.arrayResultado);
                }
                break;
            case "Primaria":
                this.arrayResultado = this.filtrarBasico(this.state.nivel, this.state.anno, this.state.materia, this.state.mes, this.state.tipoPlan, this.state.contenidoEsp);
                //console.log("AAAAAAAAAAAAAAAAArray basico en primaria", this.arrayResultado);                

                if (this.state.materia === "Educación para el Hogar") {
                    this.tarjetasHogarPrimaria(this.arrayResultado);
                }
                if (this.state.materia === "Francés") {
                    this.tarjetasFrancesPrimaria(this.arrayResultado);
                }
                if (this.state.materia === "Educación Religiosa") {
                    this.tarjetasReligion(this.arrayResultado);
                }
                if (this.state.materia !== "Educación para el Hogar" && this.state.materia !== "Francés" && this.state.materia !== "Educación Religiosa") {
                    this.tarjetasBasico(this.arrayResultado);
                }

                break;
            case "Interculturalidad Primaria":
            case "Interculturalidad Secundaria":
                this.arrayResultado = this.filtrarBasico(this.state.nivel, this.state.anno, this.state.materia, this.state.mes, this.state.tipoPlan, this.state.contenidoEsp);
                this.tarjetasBasico(this.arrayResultado);
                break;
            case "Unidocentes":
                this.arrayResultado = this.filtrarUnidocente(this.state.nivel, this.state.asignatura);
                this.tarjetasUnidocente(this.arrayResultado);
                break;
            case "Jóvenes y Adultos":
                this.arrayResultado = this.filtrarJovenesAdultos(this.state.nivel, this.state.modalidad, this.state.modulo, this.state.mes);
                this.tarjetasJovenesAdultos(this.arrayResultado);
                break;
            case "Preescolar":
                this.arrayResultado = this.filtrarPreescolar(this.state.nivel, this.state.contenidoEsp);
                this.tarjetasPreescolar(this.arrayResultado);
                break;
            case "Pedagogía Hospitalaria":
                this.arrayResultado = this.filtrarPedagogiaHospitalaria(this.state.nivel, this.state.anno, this.state.materia);
                this.tarjetasPedagogiaHosp(this.arrayResultado);
                break;

            default:
                console.log("Nvel fuera de rango");
                break;
        }
        //console.log("Resultado", this.arrayResultado);
    }

    /* TARJETAS PARA RENDERIZAR*/
    tarjetasBasico = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido en tarjetas:", array);
        console.log("*********Renderizado Tarjetas básico*************");
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <div className="card-header">
                            <span className="mx-2 badge etiquetas badge-secondary px-3 py-2 ">
                                Nivel:  {array[index].nivel}
                            </span>
                            <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                Año: {array[index].anno}
                            </span>
                            <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                Asignatura: {array[index].materia}
                            </span>

                            {
                                //Etiqueta tipo de Distribucción mensual:
                                this.state.distribucionPlan === "Mensual" &&
                                (
                                    <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                        Mes: {array[index].mes}
                                    </span>
                                )
                            }

                            {
                                //Etiqueta tipo de Distribucción trimestral:
                                this.state.distribucionPlan === "Trimestral" &&
                                (
                                    <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                        {array[index].periodo}  Periodo
                                    </span>
                                )
                            }
                            {
                                //Etiqueta tipo de Distribucción por contenido:
                                this.state.distribucionPlan === "Contenido" &&
                                (
                                    <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                        Contenido: {array[index].contenido}
                                    </span>
                                )
                            }

                            {
                                //Plan de estudio en caso de frances e inglés
                                (this.state.materia === "Francés" || this.state.materia === "Inglés") &&
                                (
                                    <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                        Plan: {this.etiquetaPlan}
                                    </span>
                                )
                            }
                            {
                                //Plan de estudio en caso de italiano en secundaria
                                (this.state.materia === "Italiano" && this.state.nivel === "Secundaria") &&
                                (
                                    <span className="mx-2 badge etiquetas badge-secondary  px-3 py-2 ">
                                        Plan: {this.etiquetaPlan}
                                    </span>
                                )
                            }
                        </div>
                    }

                    {
                        (
                            // Renderizado etiquetas básico                         

                            <div className="card-body mr-2">
                                {
                                    //***************Comprobación de Lineamiento nulo
                                    array[index].lineamiento === "nulo" ?
                                        (
                                            <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                        ) :
                                        (
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                        )
                                    //********************** */
                                }
                                {
                                    //************comprobación de plantilla nulo:
                                    array[index].plantilla === "nulo" ?
                                        (
                                            <span className="font-2 badge badge-danger  mr-2 px-2 py-2">
                                                <i className="fas fa-ban"></i> Plantilla no disponible
                                          </span>
                                        ) :
                                        (
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Plantilla
                                            </a>
                                        )
                                    //******************************/                                
                                }
                                {
                                    /*Nota: se deshabilita esta etiqueta según requerimientos 7 - 1 -2020
                                    this.state.materia === "Inglés" &&
                                    (
                                        <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].ejemplo} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-word"></i> Ejemplo
                                            </a>
                                    )
                                    */
                                }
                                {
                                    //Estudios sociales 
                                    (this.state.materia === "Estudios Sociales") &&
                                    (
                                        (this.state.anno === "Primero" || this.state.anno === "Tercero" || this.state.anno === "Quinto") &&
                                        (
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].abordaje} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Ejemplos de abordaje
                                                </a>
                                        )
                                    )

                                }
                                {
                                    //Ejemplos en secudnaria de inglés
                                    (this.state.nivel === "Secundaria" && this.state.materia === "Inglés" && this.state.tipoPlan === "Inglés como Lengua Extranjera") &&
                                    (
                                        <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].ejemplo} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-word"></i> Ejemplo
                                        </a>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasFrancesPrimaria = (array) => {
        console.log("array recibido en tarjetas Fracnés primaria:", array);
        console.log("*********Renderizado Tarjetas Francés primaria*************");
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <div className="card-header">
                            <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                Nivel:  {array[index].nivel}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Año: {array[index].anno}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Asignatura: {array[index].materia}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Plan: {this.etiquetaPlan}
                            </span>
                        </div>
                    }
                    {
                        (
                            // Renderizado para francés en primaria                           
                            (
                                <div className="card-body mr-2">
                                    <a className="font-2 badge etiquetas badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                        </a>
                                    <a className="font-2 badge etiquetas badge-info mr-2 px-2 py-2" href={serv + array[index].planCiencias} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plan de Ciencias
                                        </a>
                                    <a className="font-2 badge etiquetas badge-info mr-2 px-2 py-2" href={serv + array[index].planMate} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plan de Matemáticas
                                        </a>
                                    <a className="font-2 badge etiquetas badge-info mr-2 px-2 py-2" href={serv + array[index].planFrances} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plan de Francés
                                        </a>
                                </div>
                            )
                        )
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasHogarPrimaria = (array) => {
        console.log("array recibido en tarjetas Hogar primaria:", array);
        console.log("*********Renderizado Tarjetas Hogar primaria*************");
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <div className="card-header">
                            <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                Nivel:  {array[index].nivel}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Año: {array[index].anno}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Asignatura: {array[index].materia}
                            </span>

                        </div>
                    }

                    {
                        (
                            // Renderizado cuerpo de tarjetas educación para el hogar primaria
                            <div className="card-body mr-2">
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Lineamientos
                                            </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].eje1} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Eje temático 1
                                            </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].eje2} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-word"></i> Eje temático 2
                                            </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].eje3} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-word"></i> Eje temático 3
                                            </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].eje4} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-word"></i> Eje temático 4
                                            </a>
                            </div>
                        )
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasEspanolSecundaria = (array) => {
        console.log("Array recibido en tarjetas español secundaria:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <div className="card-header">
                            <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                Nivel:  {array[index].nivel}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Año: {array[index].anno}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Asignatura: {array[index].materia}
                            </span>
                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                Mes: {array[index].mes}
                            </span>

                        </div>
                    }
                    {
                        //Renderizado del cuerpo de las tarjetas Español secundaria:                       
                        (
                            <div className="card-body mr-2">

                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamientos} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Lineamientos
                                        </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Plantilla
                                            </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamientosViejo} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Lineamientos viejos
                                        </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lectura} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Lectura
                                        </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].monografia} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Monografía
                                        </a>

                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].transversal} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Trasnversal
                                        </a>
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].mensual} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Mensual
                                        </a>
                                <hr />
                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].orientaciones} target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-file-pdf"></i> Orientaciones
                                        </a>
                                {
                                    (this.state.anno !== "Undécimo") &&
                                    (
                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].novela} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-pdf"></i> Novela
                                        </a>
                                    )
                                }
                                {
                                    this.state.anno === "Décimo" &&
                                    (
                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].division} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-pdf"></i> División
                                                </a>
                                    )
                                }


                                {
                                    this.state.anno === "Undécimo" &&
                                    (
                                        <React.Fragment>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].criterios11y12} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Criterios 11 y 12
                                        </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].division} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> División
                                        </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].orientacionesNuevas} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Orientaciones Plan Nuevo
                                        </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].orientacionesviejas} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Orientaciones Plan Viejo
                                        </a>
                                        </React.Fragment>
                                    )
                                }

                            </div>

                        )
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasUnidocente_VIEJO = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            {
                                //Encabezado Materias báscias:
                                (this.state.asignatura === "Ciencias" || this.state.asignatura === "Matemática" || this.state.asignatura === "Español" || this.state.asignatura === "Estudios Sociales") &&
                                (
                                    <div className="card-header">
                                        <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                            Nivel:  {array[index].nivel}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Correlacionado: {array[index].correlacionado}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Asignatura: {array[index].asignatura}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Mes: {array[index].mes}
                                        </span>
                                    </div>
                                )
                            }
                            {
                                //encabezado materias complementarias:
                                (this.state.asignatura === "Educación Física" || this.state.asignatura === "Artes Plásticas" || this.state.asignatura === "Educación para el Hogar") &&
                                (
                                    <div className="card-header">
                                        <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                            Nivel:  {array[index].nivel}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Correlacionado: {array[index].correlacionado}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Asignatura: {array[index].asignatura}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Periodo: {array[index].periodo}
                                        </span>
                                    </div>
                                )
                            }
                            {
                                //Encabezados inglés
                                (this.state.asignatura === "Inglés") &&
                                (
                                    <div className="card-header">
                                        <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                            Nivel:  {array[index].nivel}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Correlacionado: {array[index].correlacionado}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Asignatura: {array[index].asignatura}
                                        </span>
                                    </div>
                                )
                            }

                            {
                                //Cuerpo de tarjetas depende de la asigntura escogida:
                                //1 - En el caso de materias básicas:
                                (this.state.asignatura === "Ciencias" || this.state.asignatura === "Matemática" || this.state.asignatura === "Español" || this.state.asignatura === "Estudios Sociales") &&
                                (
                                    <div className="card-body mr-2">
                                        <div className="row">
                                            {
                                                //***************Comprobación de Lineamiento nulo
                                                array[index].lineamiento === "nulo" ?
                                                    (
                                                        <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                            <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                                    ) :
                                                    (
                                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                            <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                                    )
                                                //********************** */
                                            }
                                            {
                                                //************comprobación de plantilla nulo:
                                                array[index].plantilla === "nulo" ?
                                                    (
                                                        <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                            <i className="fas fa-ban"></i> Plantilla no disponible
                                          </span>
                                                    ) :
                                                    (
                                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                            <i className="fas fa-file-word"></i> Plantilla
                                            </a>
                                                    )
                                                //******************************/                                
                                            }
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].circuloArmonia} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Círculo de la armonía
                                    </a>
                                        </div>
                                        <div className="row">
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].circuloCreatividad} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Círculo de la creatividad
                                    </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].actividadCierre} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Actividad de cierre
                                    </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].noCorrelacionado} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> No correlacionado
                                    </a>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                //Cuerpo de tarjetas depende de la asigntura escogida:
                                //2 - En el caso de materias complementarias:
                                (this.state.asignatura === "Educación Física" || this.state.asignatura === "Artes Plásticas" || this.state.asignatura === "Educación para el Hogar") &&
                                (
                                    <div className="card-body mr-2">
                                        <div className="row">
                                            {
                                                //***************Comprobación de Lineamiento nulo
                                                array[index].lineamiento === "nulo" ?
                                                    (
                                                        <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                            <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                                    ) :
                                                    (
                                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                            <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                                    )
                                                //********************** */
                                            }
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].correlacionado} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Correlacionado
                                    </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].noCorrelacionado} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> No correlacionado
                                    </a>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                //Cuerpo de tarjetas depende de la asigntura escogida:
                                //3 - En el caso de inglés:
                                (this.state.asignatura === "Inglés") &&
                                (
                                    <div className="card-body mr-2">
                                        <div className="row">
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Lineamiento
                                    </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Plantilla
                                    </a>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].recurso} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Recursos
                                    </a>
                                        </div>
                                    </div>
                                )
                            }


                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasUnidocente = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            {
                                //Encabezado Tarjeta:                                
                                (
                                    <div className="card-header">
                                        <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                            Nivel:  {array[index].nivel}
                                        </span>
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Asignatura: {array[index].asignatura}
                                        </span>
                                    </div>
                                )
                            }


                            {

                                (
                                    <div className="card-body mr-2">

                                        {
                                            //***************Comprobación de Lineamiento nulo
                                            array[index].lineamiento === "nulo" ?
                                                (
                                                    <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                        <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                                ) :
                                                (
                                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                                )
                                            //********************** */
                                        }
                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].correlacionado} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-word"></i> Correlacionado
                                             </a>

                                        {
                                            (   this.state.asignatura === "Ciencias" 
                                            || this.state.asignatura === "Educación Física" 
                                            || this.state.asignatura === "Español"
                                            || this.state.asignatura === "Estudios Sociales"  
                                             ) &&
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].noCorrelacionado} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> No correlacionado
                                                 </a>
                                            )
                                        }

                                        {
                                            this.state.asignatura !== "Artes Industriales" &&
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].alcance} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> Alcance
                                            </a>
                                            )
                                        }
                                        <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].circulo} target="_blank" rel="noopener noreferrer" >
                                            <i className="fas fa-file-word"></i> Círculo
                                            </a>
                                    </div>
                                )
                            }

                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasJovenesAdultos = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Modalidad: {array[index].modalidad}
                                </span>
                                {
                                    (array[index].mes !== undefined) &&
                                    (
                                        <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                            Mes: {array[index].mes}
                                        </span>
                                    )
                                }
                                {
                                    (this.state.modalidad === "IPEC CINDEA Nivel I" || this.state.modalidad === "IPEC CINDEA Nivel II" || this.state.modalidad === "IPEC CINDEA Nivel III") ?
                                        (
                                            <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                                Módulo: {array[index].modulo}
                                            </span>
                                        ) :
                                        (
                                            <React.Fragment>
                                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                                    Asignatura: {array[index].modulo}
                                                </span>
                                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                                    Año: {array[index].anno}
                                                </span>
                                            </React.Fragment>
                                        )
                                }


                            </div>
                            <div className="card-body mr-2">
                                <div className="row">
                                    {
                                        //***************Comprobación de Lineamiento nulo
                                        array[index].lineamiento === "nulo" ?
                                            (
                                                <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                    <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                            ) :
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                            )
                                        //********************** */
                                    }
                                    {
                                        //************comprobación de plantilla nulo:
                                        array[index].plantilla === "nulo" ?
                                            (
                                                <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                    <i className="fas fa-ban"></i> Plantilla no disponible
                                          </span>
                                            ) :
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> Plantilla
                                            </a>
                                            )
                                        //******************************/                                
                                    }

                                    {
                                        //Renderizado de etiquetas para español (CONED y CAN)
                                        (this.state.modulo === "Español") &&
                                        <React.Fragment>
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].monografia} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Monografía
                                        </a>
                                            {
                                                array[index].anno === "Undécimo" &&
                                                (
                                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantillaVieja} target="_blank" rel="noopener noreferrer" >
                                                        <i className="fas fa-file-word"></i> Plantilla plan viejo
                                            </a>
                                                )
                                            }

                                            {
                                                array[index].anno !== "Undécimo" &&
                                                (
                                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].novela} target="_blank" rel="noopener noreferrer" >
                                                        <i className="fas fa-file-word"></i> Novela
                                                </a>
                                                )
                                            }


                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lectura} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Lectura
                                            </a>

                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].mensual} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Mensual
                                            </a>

                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].transversal} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Transversal
                                            </a>
                                        </React.Fragment>

                                    }

                                    {
                                        //Renderizado de plan viejo en módulo 60
                                        (this.state.modulo === "Módulo 60") &&
                                        (
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantillaVieja} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Plantilla plan viejo
                                            </a>
                                        )

                                    }

                                    {
                                        //Afectividad en ciencias para los CAN
                                        (this.state.modalidad === "Colegios Académicos Nocturnos (CAN)") &&
                                        this.state.modulo === "Ciencias" &&
                                        (
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantillaSexualidad} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-word"></i> Plantilla sexualidad
                                                    </a>
                                        )

                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasPedagogiaHosp = (array) => {
        //Pedagogía hospitalaría:
        console.log("array recibido en tarjetas pedagogia hospitalaria:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Año: {array[index].anno}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Asignatura: {array[index].materia}
                                </span>
                            </div>
                            {
                                (array[index].potenciancion !== "nulo") ?
                                    (
                                        <div className="card-body mr-2">
                                            <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].potenciancion} target="_blank" rel="noopener noreferrer" >
                                                <i className="fas fa-file-pdf"></i> Potenciación
                                            </a>
                                        </div>
                                    ) :
                                    (
                                        <div className="card-body mr-2">
                                            <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                <i className="fas fa-ban"></i> Potenciación no disponible
                                          </span>
                                        </div>
                                    )
                            }




                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasReligion = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Año: {array[index].anno}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Asignatura: {array[index].materia}
                                </span>
                            </div>
                            <div className="card-body mr-2">
                                <div className="row">
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont1} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 1
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont2} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 2
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont3} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 3
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont4} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 4
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont5} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 5
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont6} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 6
                                    </a>
                                </div>
                                <div className="row">
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont7} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 7
                                    </a>
                                    <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].cont8} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Contenido 8
                                    </a>
                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    tarjetasPreescolar = (array) => {
        // Primaria, secudnaria e intercultural
        //console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 etiquetas badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 etiquetas badge badge-secondary  px-3 py-2 ">
                                    Contenido: {array[index].contenido}
                                </span>
                                {
                                    /* Se deshabilita estos títulos de acuerdo al requerimiento 17-12-19
                                    <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                        Desempeño: {array[index].desempeno}
                                    </span>
                                    <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                        Acción: {array[index].accion}
                                    </span>
                                    */
                                }
                            </div>
                            <div className="card-body mr-2">
                                <div className="row">

                                    {
                                        //***************Comprobación de Lineamiento nulo
                                        array[index].lineamiento === "nulo" ?
                                            (
                                                <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                    <i className="fas fa-ban"></i> Lineamiento no disponible
                                          </span>
                                            ) :
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-pdf"></i> Lineamiento
                                            </a>
                                            )
                                        //********************** */
                                    }
                                    {
                                        //************comprobación de plantilla nulo:
                                        array[index].plantilla === "nulo" ?
                                            (
                                                <span className="font-2 etiquetas badge badge-danger  mr-2 px-2 py-2">
                                                    <i className="fas fa-ban"></i> Plantilla no disponible
                                          </span>
                                            ) :
                                            (
                                                <a className="font-2 etiquetas badge badge-info mr-2 px-2 py-2" href={serv + array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                                    <i className="fas fa-file-word"></i> Plantilla
                                            </a>
                                            )
                                        //******************************/                                
                                    }

                                </div>
                            </div>
                        </React.Fragment>
                    }
                </div>
            );
            arrayTmp.push(arrayHtml);
        }
        this.setState({ tarjetas: arrayTmp });
        if (array.length <= 0) {
            this.mensaje = "No se han encontrado resultados.";
        } else {
            this.mensaje = (<React.Fragment>Cantidad de resultados encontrados:  <span className="badge-success px-2 py-1 mx-2" >   {array.length}   </span>  </React.Fragment>);
        }
    }

    render() {
        /*
        console.log("Año a buscar", this.state.anno);
        console.log("Materia a buscar", this.state.materia);
        */
        return (
            <React.Fragment>


                <div className="row">
                    <div className="col-12  text-right alert">
                        {
                            this.plataformaUsada === "movil" ?
                                (
                                    <img className="bannerRecursos" src={img + "encabezado_documentos_apoyoMovil.png"} alt="Encabezado de Documentos de apoyo" />)
                                :
                                (
                                    <img className="bannerRecursos" src={img + "encabezado_documentos_apoyo.png"} alt="Encabezado de Documentos de apoyo" />
                                )
                        }
                        {
                            this.plataformaUsada === "movil" ?
                                (
                                    <img className="hvr-pop boton-volverMovil img-fluid" onClick={this.props.handlerCloseBuscadorPlaneamiento} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                                :
                                (
                                    <img className="botones-portada hvr-pop boton-volver img-fluid derecha  " onClick={this.props.handlerCloseBuscadorPlaneamiento} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                                )
                        }

                    </div>
                </div>

                <div className="row">
                    <div className="col-10 font-italic">
                        Seleccione primero el nivel que desea, posteriormente el año o modalidad, y demás opciones.
                            Por último, presione el botón "buscar" para encontrar el resultado deseado.
                    </div>
                    <div className="col-2" id="divBotonBuscar">

                    </div>
                </div> <hr />

                <div className="container">
                    <div className="row">
                        {/*******Coluimna 1   NIVEL *********/}
                        <div className="col-sm-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selNivel">Nivel</label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selNivel" onChange={this.handlerObtenerNivel}   >
                                    <option defaultValue value="" >Seleccione:</option>
                                    {listasPlan["Niveles Generales"].map((item, i) => (
                                        <option key={"niveles" + i} value={item}> {item} </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/*******Columna 2******** AÑO*/}
                        {
                            this.state.nivel !== "Unidocentes" &&
                            (
                                <div className="col-sm-3  ">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selAno">
                                                {
                                                    // Si es "educación para adultos" se cambia a modalidad.  Para lo demás es "año"
                                                    this.state.nivel === "Jóvenes y Adultos" &&
                                                    (
                                                        <span> Modalidad </span>
                                                    )
                                                }
                                                {
                                                    // Si es preescolar cambia año por contenido
                                                    this.state.nivel === "Preescolar" &&
                                                    (
                                                        <span> Contenido </span>
                                                    )

                                                }
                                                {
                                                    // Si es unidocentes cambia año por Correlacionado
                                                    /*
                                                    this.state.nivel === "Unidocentes" &&
                                                    (
                                                        <span> Correlacionado </span>
                                                    )
                                                    */
                                                }
                                                {
                                                    //año para todos los demás
                                                    (this.state.nivel === "Primaria" || this.state.nivel === "Secundaria" || this.state.nivel === "Interculturalidad Primaria" || this.state.nivel === "Interculturalidad Secundaria" || this.state.nivel === "Pedagogía Hospitalaria") &&
                                                    (
                                                        <span> Año </span>
                                                    )

                                                }
                                            </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                            {
                                                //Se deshabilita esta condición después de los requereimeitnos Reunión 17-12-19
                                                // this.state.nivel !== "Preescolar" &&
                                                (
                                                    <option defaultValue value="" > Seleccione:</option>
                                                )
                                            }

                                            {
                                                this.state.nivel === "Preescolar" &&
                                                categoriasPreescolar.map((item, i) => (
                                                    <option key={"contenido" + i} value={item} >  {item}  </option>
                                                ))
                                            }


                                            {
                                                this.state.nivel === "Primaria" &&
                                                listasPlan["Años Primaria"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                this.state.nivel === "Secundaria" &&
                                                listasPlan["Años Secundaria"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))

                                            }

                                            {
                                                this.state.nivel === "Jóvenes y Adultos" &&
                                                listasPlan["Jóvenes y Adultos"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))

                                            }
                                            {
                                                this.state.nivel === "Interculturalidad Primaria" &&
                                                listasPlan["Años Primaria"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                this.state.nivel === "Interculturalidad Secundaria" &&
                                                listasPlan["Años Secundaria"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                /*
                                                Se elimina el segundo select de acuerdo a cambios 5-2020
                                                this.state.nivel === "Unidocentes" &&
                                                listasPlan["Correlacionado Unidocentes"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))
                                                */
                                            }
                                            {
                                                this.state.nivel === "Pedagogía Hospitalaria" &&
                                                listasPlan["Años Primaria"].map((item, i) => (
                                                    <option key={"anno" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            )
                        }
                        {/*******Columna 3  ASIGNATURA (MATERIA) *********/}
                        <div className="col-sm-3">
                            {
                                this.state.nivel !== "Preescolar" &&
                                (
                                    <div className={this.claseCSSMaterias}   >
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">
                                                {
                                                    /*
                                                        this.state.nivel === "Preescolar" &&
                                                        (
                                                            <span>Niveles de desempeño</span>
                                                        )
                                                    */
                                                }
                                                {
                                                    (
                                                        this.state.nivel === "Primaria"
                                                        || this.state.nivel === "Secundaria"
                                                        || this.state.nivel === "Pedagogía Hospitalaria"
                                                        || this.state.nivel === "Unidocentes"
                                                        || this.state.nivel === "Interculturalidad Primaria"
                                                        || this.state.nivel === "Interculturalidad Secundaria"
                                                    ) &&
                                                    (
                                                        <span>Asignatura</span>
                                                    )
                                                }

                                                {
                                                    this.state.nivel === "Jóvenes y Adultos" &&
                                                    (
                                                        (this.state.modalidad === "IPEC CINDEA Nivel I"
                                                            || this.state.modalidad === "IPEC CINDEA Nivel II"
                                                            || this.state.modalidad === "IPEC CINDEA Nivel III"
                                                        ) ?
                                                            (
                                                                <span>Módulos</span>
                                                            ) :
                                                            (
                                                                <span>Asignatura</span>
                                                            )
                                                    )
                                                }

                                            </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerObtenerMateria}  >
                                            {
                                                this.state.nivel !== "Preescolar" &&
                                                (
                                                    <option defaultValue value="" >  Seleccione:  </option>
                                                )
                                            }

                                            {
                                                /*
                                                this.state.nivel === "Preescolar" &&
                                                categoriasPreescolar[this.state.indiceContenido].niveles.map((item, i) => (
                                                    <option key={"materia" + i} value={item.id} >  {item.id}  </option>
                                                ))
                                                */
                                            }
                                            {
                                                this.state.nivel === "Primaria" &&
                                                listasPlan["Primaria"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                //Materias secundaria de III Ciclo
                                                this.state.nivel === "Secundaria" &&
                                                (
                                                    (this.state.anno === "Séptimo" || this.state.anno === "Octavo" || this.state.anno === "Noveno") &&
                                                    listasPlan["Secundaria III Ciclo"].map((item, i) => (
                                                        <option key={"materia" + i} value={item} >  {item}  </option>
                                                    ))
                                                )
                                            }
                                            {
                                                //Materias de secudaria Décimo
                                                this.state.nivel === "Secundaria" &&
                                                (
                                                    (this.state.anno === "Décimo") &&
                                                    listasPlan["Secundaria Décimo"].map((item, i) => (
                                                        <option key={"materia" + i} value={item} >  {item}  </option>
                                                    ))
                                                )
                                            }
                                            {
                                                //Materias de secudaria Undécimo
                                                this.state.nivel === "Secundaria" &&
                                                (
                                                    (this.state.anno === "Undécimo") &&
                                                    listasPlan["Secundaria Undécimo"].map((item, i) => (
                                                        <option key={"materia" + i} value={item} >  {item}  </option>
                                                    ))
                                                )
                                            }
                                            {
                                                (this.state.nivel === "Interculturalidad Primaria" || this.state.nivel === "Interculturalidad Secundaria") &&
                                                listasPlan.Interculturalidad.map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                (this.state.modalidad === "Colegios Académicos Nocturnos (CAN)" && this.state.nivel === "Jóvenes y Adultos") &&
                                                listasPlan["Colegios Académicos Nocturnos (CAN)"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                (this.state.modalidad === "Colegio Nacional de Educación a Distancia (CONED)" && this.state.nivel === "Jóvenes y Adultos") &&
                                                listasPlan["Colegio Nacional de Educación a Distancia (CONED)"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                (this.state.modalidad === "Escuelas Nocturnas Nivel I" || this.state.modalidad === "Escuelas Nocturnas Nivel II" || this.state.modalidad === "Escuelas Nocturnas Nivel III" || this.state.modalidad === "Escuelas Nocturnas Nivel IV") &&
                                                listasPlan["Materias Básicas"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                (this.state.modalidad === "IPEC CINDEA Nivel I" && this.state.nivel === "Jóvenes y Adultos") &&
                                                listasPlan["IPEC CINDEA Nivel I"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {
                                                (this.state.modalidad === "IPEC CINDEA Nivel II" && this.state.nivel === "Jóvenes y Adultos") &&
                                                listasPlan["IPEC CINDEA Nivel II"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))
                                            }
                                            {

                                                (this.state.modalidad === "IPEC CINDEA Nivel III" && this.state.nivel === "Jóvenes y Adultos") &&
                                                listasPlan["IPEC CINDEA Nivel III"].map((item, i) => (
                                                    <option key={"materia" + i} value={item} >  {item}  </option>
                                                ))

                                            }
                                            {
                                                this.state.nivel === "Unidocentes" && (
                                                    listasPlan["Materias Básicas Unidocentes"].map((item, i) => (
                                                        <option key={"materia" + i} value={item} >  {item}  </option>
                                                    ))
                                                )
                                            }
                                            {
                                                this.state.nivel === "Pedagogía Hospitalaria" && (
                                                    listasPlan["Pedagogía Hospitalaria"].map((item, i) => (
                                                        <option key={"materia" + i} value={item} >  {item}  </option>
                                                    ))
                                                )
                                            }

                                        </select>
                                    </div>
                                )
                            }
                        </div>



                        {/* Columna 4 COMODIN: MES-PLAN DE ESTUDIOS- preescolar (acciones) */}
                        <div className="col-sm-3">
                            {//CASO 1:Para las materias con distribución mensual
                                (this.state.distribucionPlan === "Mensual" && this.state.nivel !== "Preescolar") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Mes
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                            <option defaultValue value="" >Seleccione:</option>
                                            {
                                                listasPlan["Meses"].map((item, index) => (
                                                    <option key={"mes" + index} value={item}> {item} </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                                //Fin caso 1 por mes **************************
                            }

                            {//CASO 1-1: Para las materias con distribución TRIMESTRAL
                                // Se elimina el select trimestre 
                                /*
                                (this.state.distribucionPlan === "Trimestral") &&
                                    (
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                    Periodo
                                            </label>
                                            </div>
                                            <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                                <option defaultValue value="" >Seleccione:</option>
                                                {
                                                    listasPlan["Periodos"].map((item, index) => (
                                                        <option key={"Periodo" + index} value={item}> {item} </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    )
                                    */
                                //Fin caso 1.1 por TRIMESTRE **************************
                            }

                            {//CASO 2: Frances - Ingles
                                (this.state.materia === "Francés" || this.state.materia === "Inglés") &&
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
                                                (this.state.materia === "Francés" && this.state.nivel === "Primaria") &&
                                                (
                                                    listasPlan["Plan Estudios Francés Primaria"].map((item, index) => (
                                                        <option key={"plan" + index} value={item} data-etiqueta={item} > {item} </option>
                                                    ))
                                                )
                                            }
                                            { //Ingles primaria
                                                (this.state.materia === "Inglés" && this.state.nivel === "Primaria") &&
                                                (
                                                    listasPlan["Plan Estudios Inglés Primaria"].map((item, index) => (
                                                        <option key={"plan" + index} value={item} data-etiqueta={item} > {item} </option>
                                                    ))
                                                )
                                            }
                                            {  //Frances secundaria
                                                (this.state.materia === "Francés" && this.state.nivel === "Secundaria") &&
                                                (
                                                    listasPlan["Plan Estudios Francés Secundaria"].map((item, index) => (
                                                        <option key={"plan" + index} value={item} data-etiqueta={item} > {item} </option>
                                                    ))
                                                )
                                            }
                                            {  //Inglés secundaria
                                                (this.state.materia === "Inglés" && this.state.nivel === "Secundaria") &&
                                                (
                                                    listasPlan["Plan Estudios Inglés Secundaria"].map((item, index) => (
                                                        <option key={"plan" + index} value={item} data-etiqueta={item} > {item} </option>
                                                    ))
                                                )
                                            }
                                        </select>
                                    </div>
                                )
                                //Fin caso 2 **************************
                            }
                            {//CASO 2.5: Italiano en secundaria
                                (this.state.materia === "Italiano" && this.state.nivel === "Secundaria") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selPlan">
                                                Plan de estudios
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selPlan" onChange={this.handlerObtenerTipoPlan}  >
                                            <option defaultValue disabled value="seleccione" >Seleccione:</option>
                                            {
                                                (this.state.materia === "Italiano" && this.state.nivel === "Secundaria") &&
                                                (
                                                    listasPlan["Plan Estudios Italiano Secundaria"].map((item, index) => (
                                                        <option key={"plan" + index} value={item} data-etiqueta={item} > {item} </option>
                                                    ))
                                                )
                                            }
                                        </select>
                                    </div>
                                )
                                //Fin caso 2.5 **************************
                            }
                            {
                                //Caso 3 Preescolar
                                /*Se deshabilita select de acuerdo a rquerimientos 17-12-19
                                this.state.nivel === "Preescolar" &&
                                (                                    
                                    this.state.anno === "diagnostico" ?
                                        (
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                        Mes
                                                            </label>
                                                </div>
                                                <select className="custom-select buscadores-materias" id="selMes" onClick={this.handlerObtenerAccion}  >
                                                    {
                                                        categoriasPreescolar[this.state.indiceContenido].niveles[this.state.indiceDesempeno].acciones.map(
                                                            (item, i) => (
                                                                <option key={"mes" + i} value={item.etiqueta}>  {item.etiqueta} </option>
                                                            )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        ) : (
                                            //Sin diagnóstico pero en preescolar
                                            //this.state.nivel === "preescolar" &&                                                     
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                        Acción procedimental
                                                        </label>
                                                </div>
                                                <select className="custom-select buscadores-materias" id="selMes" onClick={this.handlerObtenerAccion}  >
                                                    {
                                                        categoriasPreescolar[this.state.indiceContenido].niveles[this.state.indiceDesempeno].acciones.map(
                                                            (item, i) => (
                                                                <option key={"accion" + i} value={item.etiqueta}>  {item.etiqueta} </option>
                                                            )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        )
                                )
                                */
                            }
                            {
                                // Caso 4 contenidos de español primaria
                                (this.state.nivel === "Primaria" && this.state.materia === "Español") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Contenidos
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerContenido}  >
                                            <option defaultValue value="" > Seleccione: </option>
                                            {
                                                selectEspanolPrimaria[this.state.anno].map((item, index) => (
                                                    <option key={"Contenido" + index} value={item}> {item} </option>
                                                ))
                                            }
                                        </select>
                                    </div>



                                )
                            }
                            {
                                console.log("nivel", this.state.nivel)

                            }

                            {

                                // Caso 5 Meses de unidocentes para materias básicas
                                /*
                                (this.state.nivel === "Unidocentes") &&
                                (
                                    (this.state.asignatura === "Ciencias" || this.state.asignatura === "Matemática" || this.state.asignatura === "Español" || this.state.asignatura === "Estudios Sociales") &&
                                    (
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                    Meses
                                        </label>
                                            </div>
                                            <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                                <option defaultValue value="" > Seleccione: </option>
                                                {
                                                    listasPlan["Meses"].map((item, index) => (
                                                        <option key={"mes" + index} value={item}> {item} </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    )
                                )
                                */
                            }
                            {
                                // Caso 6 Meses de unidocentes para materias complementarias
                                /*
                                (this.state.nivel === "Unidocentes") &&
                                (
                                    (this.state.asignatura === "Educación Física" || this.state.asignatura === "Artes Plásticas" || this.state.asignatura === "Educación para el Hogar") &&
                                    (
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                    Periodo
                                    </label>
                                            </div>
                                            <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerPeriodo}  >
                                                <option defaultValue value="" > Seleccione: </option>
                                                {
                                                    listasPlan["Periodos"].map((item, index) => (
                                                        <option key={"mes" + index} value={item}> {item} </option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    )
                                )
                                */
                            }
                        </div>
                    </div>
                   {
                        this.plataformaUsada === "movil" &&
                        (
                           <React.Fragment>
                                <br /> <br /><br />
                           </React.Fragment>
                        )
                    }
              

                    <div className="row">
                        <div className="col-12 text-right">
                            {//Activación del botón dependiendo del valor del select nivel en el método "activarBotonBuscar"
                                this.state.buscarActivo &&
                                <button id="btnBuscar" onClick={this.handlerBuscarRegistrosPorNivel} type="button" className="btn btn-secondary btn-lg btn_Buscar">
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