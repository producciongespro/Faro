import React, { Component } from 'react';

import dataPreescolar from '../data/planeamiento/docs_plan_preescolar.json';
import dataPrimaria from '../data/planeamiento/docs_plan_primaria.json';
import dataSecundaria from '../data/planeamiento/docs_plan_secundaria.json';
import dataAdultos from '../data/planeamiento/docs_plan_adultos.json';
import dataSecundariaEspanol from '../data/planeamiento/docs_plan_secundaria_espanol.json';
import dataIdiomas from '../data/planeamiento/docs_plan_idiomas.json';
import dataInterculturalPrimaria from '../data/planeamiento/docs_plan_intercultural_primaria.json';
import dataInterculturalSecundaria from '../data/planeamiento/docs_plan_intercultural_secundaria.json';
import dataUnidocente from '../data/planeamiento/docs_plan_unidocente.json';

import categoriasPreescolar from '../data/planeamiento/select_preescolar.json';
import listasPlan from '../data/planeamiento/select_general.json';
import selectEspanolPrimaria from '../data/planeamiento/select_espanol_primaria.json';

import config from '../data/config/config.json';
// esto se repite....es necesario? Ana T.
import assets from '../data/config/config.json';

const img = assets.img.apoyosPlan;
const imgGenerales = assets.img.general;
//TODO ver si se quita esto:
const materiasComplementarias = listasPlan["Materias Complementarias"];

const serv = config.servidor;
//console.log("servidor", serv);

console.log("selectEspanolPrimaria", selectEspanolPrimaria["Primero"] );

//console.log("Secudnaria frances", dataFrances );
//console.log("listasPlan",listasPlan );
//console.log("categoriasPreescolar", categoriasPreescolar);

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
            contenido: "",
            desempeno: ""            
        };
        /*
                La propiedad anno se pasa a estado ya que se convierte en modalidad en caso de 
                educaicón para adultos.  Esta propiedad debe camibar materia
        */
        //Mes se usa en caso de español o unidocentes
        this.mes = "";
        //Tipo plan se utiliza en caso de lengua extranjera. Ej estados: biblingue, lengua extranejra
        this.tipoPlan = "";
        this.etiquetaPlan = "";
        this.poblacion = "";
        this.apoyos = "";
        this.mensaje = "";
        //Datos de json para preescolar        
        this.accion = "";
        //Array filtrado con los criterios establecidos por el usuario
        this.arrayResultado = null;
        //tipo de materia presenta dos valores: complementaria y básíca
        this.tipoMateria = null;
        
        


        //Clase CSS
        this.claseCSSMaterias = "input-group mb-3";
    }
    handlerObtenerNivel = (e) => {
        //SELECT 1
        this.setState({ nivel: e.target.value }, () => {
            console.log("nivel seleccionado", this.state.nivel);
        });
        //Limpia los estados para las siguientes búsquedas
        this.setState({ materia: "" });
        this.setState({ anno: "" });
        this.mes = "";
    }

    handlerObtenerAnno = (e) => {
        //SELECT 2
        //almacena en un estado el indice de la opción seleccionada

        switch (this.state.nivel) {
            case "Preescolar":
                this.setState({ indiceContenido: e.target.selectedIndex });
                this.setState({ contenido: e.target.value }, () => {
                    console.log("Contenido seleccionado:", this.state.contenido);
                });
                break;
            case "Primaria":
            case "Secundaria":
            case "Interculturalidad Primaria":
            case "Interculturalidad Secundaria":
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
            case "Secundaria":
            case "Interculturalidad Primaria":
            case "Interculturalidad Secundaria":
                this.setState({ materia: valor }, () => {
                    console.log("Materia seleccionada", this.state.materia)
                });
                break;
            case "Unidocentes":
                this.setState({ asignatura: valor }, () => {
                    console.log("Asignatura seleccionada", this.state.asignatura)
                });
                break
            case "Jóvenes y Adultos":
                this.setState({ modulo: valor }, () => {
                    console.log("Módulo seleccionado:", this.state.modulo)
                });
                break;
            default:
                console.log("Opcion en select materia fuera de rango");
                break;
        }
        //console.log("Materias complementarias", materiasComplementarias );
        //console.log("Materia seleccionada", valor);
        let limite = materiasComplementarias.length;
        //inicializa tipo de materia:
        this.tipoMateria = "basica"
        for (let index = 0; index < limite; index++) {
            //console.log( "ITEM:",materiasComplementarias[index]);            
            if (valor == materiasComplementarias[index]) {
                this.tipoMateria = "complementaria"
            }            
        }        
        console.log("tipo de materia", this.tipoMateria);      
        //Activa el boton buscar:
        this.activarBotonBuscar();
    }

    // SELECT 4 (COMODIN) Varía el manejador de eventos según el nivel que se escoja
    handlerObtenerMes = (e) => {
        this.mes = e.target.value;
        console.log("Mes seleccionado", this.mes);
    }

    handlerObtenerTipoPlan = (e) => {
        //En el caso de idiomas
        this.tipoPlan = e.target.value;
        //console.log("tipoPlan",  this.tipoPlan);        
        // * * * * * Obtiene el texto de la opcion seleccionada del select Nota: Esto es SOLO BUENO!!!!!
        this.etiquetaPlan = e.target.options[e.target.selectedIndex].text;
        console.log("Tipo de plan seleccionado:", this.etiquetaPlan);
    }

    handlerObtenerAccion = (e) => {
        this.accion = e.target.value;
        console.log("Accion", this.accion);

    }

    handlerObtenerContenido = (e) => {
        //Obtener contenido en caso de primaria Español
        let valor = e.target.value;
        this.setState({ contenido: valor }, ()=>{
            console.log("Cotenido en español primaria", this.state.contenido);            
        });
    }

    /** Botón Buscar */
    activarBotonBuscar = (e) => {
        //Activa el botón buscar 
        this.setState({ buscarActivo: true });
    }

    filtrarBasico = (nivel, anno, materia, mes, tipoPlan) => {
        /*
                console.log("parametros de filtrarBasico***********************");
                console.log("nivel", nivel);
                console.log("anno", anno);
                console.log("mes", mes);
                console.log("********tipoPlan", tipoPlan);
                console.log("tipoPlan", tipoPlan);
                console.log("*****************************************************");
        */

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
        if (this.state.nivel === "Interculturalidad Primaria") {
            //console.log("Seleccion: Adultos");
            array = dataInterculturalPrimaria;
        }
        if (this.state.nivel === "Interculturalidad Secundaria") {
            array = dataInterculturalSecundaria;
        }

        //Condiciones para  las diferentes modalidades con MES:
        //Español secundaria:
        if (this.state.nivel === "Secundaria" && this.state.materia === "Español") {
            tipoComodin = "mes";
            array = dataSecundariaEspanol;
        }


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
                console.log("-----Busqueda con PLAN --- ARRAY:", array);
                for (let index = 0; index < array.length; index++) {
                    if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia && array[index].tipoPlan === tipoPlan) {
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

    filtrarUnidocente = (nivel, correlacionado, asignatura, mes) => {
        console.log("correlacionado", correlacionado);
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataUnidocente;

        for (let index = 0; index < array.length; index++) {
            //if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura) {
            if (array[index].nivel === nivel && array[index].correlacionado === correlacionado && array[index].asignatura === asignatura && array[index].mes === mes) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }

    filtrarJovenesAdultos = (nivel, modalidad, modulo) => {
        //console.log("modalidad", modalidad);
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataAdultos;

        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].modalidad === modalidad && array[index].modulo === modulo) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }

    filtrarPreescolar = (nivel, contenido, desempeno, accion) => {
        //console.log("modalidad", modalidad);
        let array;
        let tmpArray = [];
        //Carga del array de unidocentes:
        array = dataPreescolar;

        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].contenido === contenido && array[index].desempeno === desempeno && array[index].accion === accion) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }

    //en evento del botón buscar
    handlerBuscarRegistrosPorNivel = () => {
        /*
        console.log("********Contenido", this.state.contenido );
        console.log("***********Desempeño", this.state.desempeno );
        console.log("*********Accion", this.accion);
        */
        switch (this.state.nivel) {
            case "Primaria":
            case "Secundaria":
            case "Interculturalidad Primaria":
            case "Interculturalidad Secundaria":
                this.arrayResultado = this.filtrarBasico(this.state.nivel, this.state.anno, this.state.materia, this.mes, this.tipoPlan);
                this.tarjetasBasico(this.arrayResultado);
                break;
            case "Unidocentes":
                this.arrayResultado = this.filtrarUnidocente(this.state.nivel, this.state.correlacionado, this.state.asignatura, this.mes);
                this.tarjetasUnidocente(this.arrayResultado);
                break;
            case "Jóvenes y Adultos":
                this.arrayResultado = this.filtrarJovenesAdultos(this.state.nivel, this.state.modalidad, this.state.modulo);
                this.tarjetasJovenesAdultos(this.arrayResultado);
                break;
            case "Preescolar":
                this.arrayResultado = this.filtrarPreescolar(this.state.nivel, this.state.contenido, this.state.desempeno, this.accion);
                this.tarjetasPreescolar(this.arrayResultado);
                break;

            default:
                console.log("Nvel fuera de rango");
                break;
        }
        console.log("Resultado", this.arrayResultado);
    }

    /* TARJETAS PARA RENDERIZA*/
    tarjetasBasico = (array) => {
        // Primaria, secudnaria e intercultural
        console.log("array recibido en tarjetas:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <div className="card-header">
                            <span className="mx-2 badge badge-secondary px-3 py-2 ">
                                Nivel:  {array[index].nivel}
                            </span>
                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                Año: {array[index].anno}
                            </span>
                            <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                Asignatura: {array[index].materia}
                            </span>
                            {
                                this.state.materia === "Español" && this.state.nivel === "Secundaria" &&
                                (
                                    <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                        Mes: {array[index].mes}
                                    </span>
                                )
                            }
                            {
                                //Plan de estudio en caso de frances e inglés
                                (this.state.materia === "Francés" || this.state.materia === "Inglés") &&
                                (
                                    <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                        Plan: {this.etiquetaPlan}
                                    </span>
                                )
                            }
                            {
                                //Plan de estudio en caso de italiano en secundaria
                                (this.state.materia === "Italiano" && this.state.nivel === "Secundaria") &&
                                (
                                    <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                        Plan: {this.etiquetaPlan}
                                    </span>
                                )
                            }
                        </div>
                    }
                    {
                        //Renderizado del cuerpo de las tarjetas:
                        this.state.nivel === "Secundaria" && this.state.materia === "Español" ?
                            (
                                <div className="card-body mr-2">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].lineamientos} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamientos
                                        </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].lectura} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lectura
                                        </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].monografia} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Monografía
                                        </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].novela} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Novela
                                        </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].transversal} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Trasnversal
                                        </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].mensual} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Mensual
                                        </a>
                                </div>
                            )
                            : (
                                // Renderizado para los que no son secudnaria español 
                                <div className="card-body mr-2">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plantilla
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

    tarjetasUnidocente = (array) => {
        // Primaria, secudnaria e intercultural
        console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Correlacionado: {array[index].correlacionado}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Asignatura: {array[index].asignatura}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Mes: {array[index].mes}
                                </span>
                            </div>
                            <div className="card-body mr-2">
                                <div className="row">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plantilla
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].circuloArmonia} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Círculo de la armonía
                                </a>
                                </div>
                                <div className="row">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].circuloCreatividad} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Círculo de la creatividad
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].actividadCierre} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Actividad de cierre
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].noCorrelacionado} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> No correlacionado
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

    tarjetasJovenesAdultos = (array) => {
        // Primaria, secudnaria e intercultural
        console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Modalidad: {array[index].modalidad}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Módulo: {array[index].modulo}
                                </span>
                            </div>
                            <div className="card-body mr-2">
                                <div className="row">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plantilla
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
        console.log("array recibido:", array);
        var arrayHtml;
        var arrayTmp = [];
        for (let index = 0; index < array.length; index++) {
            arrayHtml = (
                <div className="card">
                    {
                        //Renderizado de los encabezados de las tarjetas en los demás casos: primaria y secundaria
                        <React.Fragment>
                            <div className="card-header">
                                <span className="mx-2 badge badge-secondary px-3 py-2 ">
                                    Nivel:  {array[index].nivel}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Contenido: {array[index].contenido}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Desempeño: {array[index].desempeno}
                                </span>
                                <span className="mx-2 badge badge-secondary  px-3 py-2 ">
                                    Acción: {array[index].accion}
                                </span>
                            </div>
                            <div className="card-body mr-2">
                                <div className="row">
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-pdf"></i> Lineamiento
                                </a>
                                    <a className="font-2 badge badge-info mr-2 px-2 py-2" href={array[index].plantilla} target="_blank" rel="noopener noreferrer" >
                                        <i className="fas fa-file-word"></i> Plantilla
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






    render() {
        /*
        console.log("Año a buscar", this.state.anno);
        console.log("Materia a buscar", this.state.materia);
        */
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-12  text-right alert alert-secondary">
                        <img className="bannerRecursos" src={img + "encabezado_documentos_apoyo.png"} alt="Encabezado de Documentos de apoyo" />
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCloseBuscadorPlaneamiento} src={imgGenerales + "btn_volver.png"} alt="Volver" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 font-italic">
                        Seleccione primero el nivel que desea, posteriormente el año o modalidad, y demás opciones.
                            Por último, presiones el botón "buscar" para encontrar el resultado deseado.
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
                                <select className="custom-select buscadores-materias" id="selNivel" onChange={this.handlerObtenerNivel}   >
                                    <option defaultValue value="" >Seleccione:</option>
                                    {listasPlan["Niveles Generales"].map((item, i) => (
                                        <option key={"niveles" + i} value={item}> {item} </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/*******Columna 2******** AÑO*/}
                        <div className="col-3  ">
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
                                            this.state.nivel === "Unidocentes" &&
                                            (
                                                <span> Correlacionado </span>
                                            )
                                        }
                                        {
                                            //año para todos los demás
                                            (this.state.nivel === "Primaria" || this.state.nivel === "Secundaria" || this.state.nivel === "Interculturalidad Primaria" || this.state.nivel === "Interculturalidad Secundaria") &&
                                            (
                                                <span> Año </span>
                                            )

                                        }
                                    </label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                    {
                                        this.state.nivel !== "Preescolar" &&
                                        (
                                            <option defaultValue value="" > Seleccione:</option>
                                        )
                                    }

                                    {
                                        this.state.nivel === "Preescolar" &&
                                        categoriasPreescolar.map((item, i) => (
                                            <option key={"anno" + i} value={item.etiqueta} >  {item.etiqueta}  </option>
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
                                    }                                                                       {
                                        this.state.nivel === "Unidocentes" &&
                                        listasPlan["Ciclo Primaria"].map((item, i) => (
                                            <option key={"anno" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        {/*******Columna 3  ASIGNATURA (MATERIA) *********/}
                        <div className="col-3">
                            <div className={this.claseCSSMaterias}   >
                                <div className="input-group-prepend">
                                    <label className="input-group-text etiquetas-busquedas" htmlFor="selMateria">
                                        {
                                            this.state.nivel === "Preescolar" ?
                                                (
                                                    <span>Niveles de desempeño</span>
                                                )
                                                :
                                                (
                                                    this.state.nivel === "Jóvenes y Adultos" ?
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
                                        <option defaultValue value="" >  Seleccione:  </option>
                                    }

                                    {
                                        this.state.nivel === "Preescolar" &&
                                        categoriasPreescolar[this.state.indiceContenido].niveles.map((item, i) => (
                                            <option key={"materia" + i} value={item.id} >  {item.id}  </option>
                                        ))
                                    }
                                    {
                                        this.state.nivel === "Primaria" &&
                                        listasPlan["Primaria"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.nivel === "Secundaria" &&
                                        listasPlan["Secundaria"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        (this.state.nivel === "Interculturalidad Primaria" || this.state.nivel === "Interculturalidad Secundaria") &&
                                        listasPlan.Interculturalidad.map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.modalidad === "Colegios Académicos Nocturnos (CAN)" &&
                                        listasPlan["Colegios Académicos Nocturnos (CAN)"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.modalidad === "Colegio Nacional de Educación a Distancia (CONED)" &&
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
                                        this.state.modalidad === "IPEC CINDEA Nivel I" &&
                                        listasPlan["IPEC CINDEA Nivel I"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.modalidad === "IPEC CINDEA Nivel II" &&
                                        listasPlan["IPEC CINDEA Nivel II"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.modalidad === "IPEC CINDEA Nivel III" &&
                                        listasPlan["IPEC CINDEA Nivel III"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.nivel === "Unidocentes" && (
                                            listasPlan["Materias Básicas"].map((item, i) => (
                                                <option key={"materia" + i} value={item} >  {item}  </option>
                                            ))
                                        )
                                    }

                                </select>
                            </div>
                        </div>



                        {/* Columna 4 COMODIN: MES-PLAN DE ESTUDIOS- preescolar (acciones) - mes en Unidocentes */}
                        <div className="col-3">
                            {//CASO 1: Secundaria-Español
                                (this.state.materia === "Español" && this.state.nivel === "Secundaria") &&
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
                                //Fin caso 1 **************************
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
                                            <option defaultValue disabled value="seleccione" >Seleccione:</option>
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
                                this.state.nivel === "Preescolar" &&
                                (
                                    // Con diagnóstico
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
                            }
                            {
                                // Caso 4 contenidos de español primaria
                                (this.state.nivel === "Primaria" && this.state.materia === "Español"  ) &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selMes">
                                                Contenidos
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selMes" onClick={this.handlerObtenerContenido}  >
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
                                // Caso 5 Meses de unidocentes
                                this.state.nivel === "Unidocentes" &&
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
                            }

                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-12">
                            <h6>
                                {this.mensaje}
                            </h6>
                        </div>
                    </div>

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