import React, { Component } from 'react';

import dataPreescolar from '../data/planeamiento/docs_plan_preescolar.json';
import dataPrimaria from '../data/planeamiento/docs_plan_primaria.json';
import dataSecundaria from '../data/planeamiento/docs_plan_secundaria.json';
import dataAdultos from '../data/planeamiento/docs_plan_adultos.json';
import dataSecundariaEspanol from '../data/planeamiento/docs_plan_secundaria_espanol.json';
import dataIdiomas from '../data/planeamiento/docs_plan_idiomas.json';
import dataIntercultural from '../data/planeamiento/docs_plan_intercultural.json';
import dataUnidocente from '../data/planeamiento/docs_plan_unidocente.json';

import categoriasPreescolar from '../data/planeamiento/select_preescolar.json';
import listasPlan from '../data/planeamiento/select_general.json';

import config from '../data/config/config.json';

//TODO Quitar esto cuando el otro esté listo:
import images from '../data/images.json';

const serv = config.servidor;
console.log("servidor", serv);



//console.log("Secudnaria frances", dataFrances );
//console.log("listasPlan",listasPlan );
//console.log("categoriasPreescolar", categoriasPreescolar);

class BuscadorPlaneamiento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarjetas: [],
            nivel: "",
            anno: "",
            buscarActivo: false,
            // En etiqueta es asginatura. Dependiendo de la asignatura se despliega información en la GUI
            materia: "",
            //estado en caso de preescolar para actualizar los select: "desempeño" y acción procedimental
            indiceContenido: 0,
            indiceDesempeno: 0,
            contenido: "",
            desempeno: ""
        };
        /*
                La propiedad anno se pasa a estado ya que se convierte en modalidad en caso de 
                educaicón para adultos.  Esta propiedad debe camibar materia
        */
        //Mes se usa en caso de español
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

        if (this.state.nivel === "Preescolar") {
            this.setState({ indiceContenido: e.target.selectedIndex });
            this.setState({ contenido: e.target.value });
        } else {
            this.setState({ anno: e.target.value }, () => {
                console.log("Año seleccionado", this.state.anno)
            });
        }

    }

    handlerObtenerMateria = (e) => {
        //SELECT 3        
        console.log("indice de select Niveles de desempeño: ", e.target.selectedIndex);

        if (this.state.nivel === "Preescolar") {
            this.setState({ indiceDesempeno: e.target.selectedIndex }, () => {
                console.log("indice desempeño", this.state.indiceDesempeno);
            });
            this.setState({ desempeno: e.target.value });
        } else {
            this.setState({ materia: e.target.value }, () => {
                console.log("Materia seleccionada", this.state.materia)
            });
        }

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
    }

    /** Botón Buscar */

    activarBotonBuscar = (e) => {

        //Activa el botón buscar 
        // "seleccione" es el valor que tiene el select por defeto, lo cual significa que no ha sido seleccionado
        if (e.target.value !== "seleccione") {
            this.setState({ buscarActivo: true });
        } else {
            this.setState({ buscarActivo: false });
        }
    }

    obtenerArrayGeneral = () => {
        //Asigna el array del nivel correspondiente de acuerdo al val del select nivel
        let arrayNivel;
        //console.log("***Nivel", this.state.nivel);
        //console.log("***Mes", this.mes);
        if (this.state.nivel === "Preescolar") {
            //console.log("Seleccion: general");
            arrayNivel = dataPreescolar;
        }
        if (this.state.nivel === "Primaria") {
            //console.log("Seleccion: general");
            arrayNivel = dataPrimaria;
        }
        if (this.state.nivel === "Secundaria") {
            //console.log("Seleccion: general");
            arrayNivel = dataSecundaria;
        }
        if (this.state.nivel === "adultos") {
            //console.log("Seleccion: Adultos");
            arrayNivel = dataAdultos;
        }
        if (this.state.materia === "Español" && this.state.nivel === "Secundaria") {
            //console.log("Seleccion: espanolSecundaria");
            arrayNivel = dataSecundariaEspanol;
        }
        if (this.state.materia === "Francés" || this.state.materia === "Inglés" || this.state.materia === "Italiano") {
            arrayNivel = dataIdiomas;
        }
        if (this.state.nivel === "Interculturalidad Primaria" || this.state.nivel === "Interculturalidad Secundaria") {
            //console.log("Seleccion: Adultos");
            arrayNivel = dataIntercultural;
        }
        if (this.state.nivel === "Unidocentes") {
            //console.log("Seleccion: Adultos");
            arrayNivel = dataUnidocente;
        }
        return arrayNivel;
    }


    obtenerFiltradoPrimariaSecundaria = (array, nivel, anno, materia) => {
        //Devuelve un array filtrado con la búsqueda del usuario
        let tmpArray = [];

        for (let index = 0; index < array.length; index++) {
            if (array[index].nivel === nivel && array[index].anno === anno && array[index].materia === materia) {
                tmpArray.push(array[index]);
            }
        }
        return tmpArray;
    }


    buscarRegistroPorNivel = () => {
        /*
        console.log("********Contenido", this.state.contenido );
        console.log("***********Desempeño", this.state.desempeno );
        console.log("*********Accion", this.accion);
        */
        switch (this.state.nivel) {
            case "Primaria":
            case "Secudnaria":
                this.arrayResultado = this.obtenerFiltradoPrimariaSecundaria(this.obtenerArrayGeneral(), this.state.nivel, this.state.anno, this.state.materia);
                this.tarjetaPrimariaSecudnaria(this.arrayResultado);
                break;

            default:
                break;
        }
        console.log("Resultado", this.arrayResultado);
    }


    tarjetaPrimariaSecudnaria = (array) => {

        console.log("array recibido:",array  );
        
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
                            (this.state.materia === "frances" || this.state.materia === "ingles") &&
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
                                            <a className="font-2 badge badge-info mr-2 px-2 py-2" href={ serv + array[index].lineamiento} target="_blank" rel="noopener noreferrer" >
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
                        <img className="bannerRecursos" src={images[0].ApoyosPlaneamientoDidacBanner} alt="Encabezado de Documentos de apoyo" />
                        <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={this.props.handlerCloseBuscadorPlaneamiento} src={images[0].BtnVolver} alt="Volver" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 font-italic">
                        Seleccione primero el nivel que desea, posteriormente el año o modalidad, por último seleccione la materia y
                        el botón "buscar" para encontrar el resultado deseado.
                        <strong>    Importante:</strong> Si desea ver los planes de español en secundaria, seleccione "Español" en asignatura en lugar de seleccionar "Todas".
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
                                            <option defaultValue value="" > Todos </option>
                                        )
                                    }

                                    {
                                        this.state.nivel === "Preescolar" &&
                                        categoriasPreescolar.map((item, i) => (
                                            <option key={"anno" + i} value={item.id} >  {item.etiqueta}  </option>
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
                                <select className="custom-select buscadores-materias" id="selMateria" onClick={this.handlerObtenerMateria} >
                                    {
                                        this.state.nivel !== "Preescolar" &&
                                        <option defaultValue value="" >  Todas  </option>
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
                                        this.state.anno === "Colegios Académicos Nocturnos (CAN)" &&
                                        listasPlan["Colegios Académicos Nocturnos (CAN)"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "Colegio Nacional de Educación a Distancia (CONED)" &&
                                        listasPlan["Colegio Nacional de Educación a Distancia (CONED)"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        (this.state.anno === "Escuelas Nocturnas Nivel I" || this.state.anno === "Escuelas Nocturnas Nivel II" || this.state.anno === "Escuelas Nocturnas Nivel III" || this.state.anno === "Escuelas Nocturnas Nivel IV") &&
                                        listasPlan["Materias Básicas"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "IPEC CINDEA Nivel I" &&
                                        listasPlan["IPEC CINDEA Nivel I"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "IPEC CINDEA Nivel II" &&
                                        listasPlan["IPEC CINDEA Nivel II"].map((item, i) => (
                                            <option key={"materia" + i} value={item} >  {item}  </option>
                                        ))
                                    }
                                    {
                                        this.state.anno === "IPEC CINDEA Nivel III" &&
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
                                            <option defaultValue disabled value="seleccione" >Seleccione:</option>
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
                            {//CASO 2: primaria en frances - ingles
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
                                                                <option key={"mes" + i} value={item.id}>  {item.etiqueta} </option>
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
                                                                <option key={"accion" + i} value={item.id}>  {item.etiqueta} </option>
                                                            )
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        )
                                )
                            }

                            {
                                // Caso 4 Italiano en secundaria
                                (this.state.materia === "italiano" && this.state.nivel === "secundaria") &&
                                (
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text etiquetas-busquedas" htmlFor="selPlan">
                                                Plan de estudio
                                        </label>
                                        </div>
                                        <select className="custom-select buscadores-materias" id="selPlan" onChange={this.handlerObtenerTipoPlan}  >
                                            <option disabled defaultValue value="" >Seleccione una opcion:</option>
                                            <option value="Lengua italiana" >Lengua italiana</option>
                                            <option value="Aspectos Culturales" > Aspectos Culturales </option>
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

                    <div className="row">
                        <div className="col-12 text-right">
                            {//Activación del botón dependiendo del valor del select nivel en el método "activarBotonBuscar"
                                this.state.buscarActivo &&
                                <button id="btnBuscar" onClick={this.buscarRegistroPorNivel} type="button" className="btn btn-secondary btn-lg btn_Buscar">
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