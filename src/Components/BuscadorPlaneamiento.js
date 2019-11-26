import React, { Component } from 'react';

import dataGeneral from '../data/planeamiento/docs_planeamiento_main.json';
import dataAdultos from '../data/planeamiento/docs_planeamiento_adultos.json';
import dataSecundariaEspanol from '../data/planeamiento/secundaria_espanol.json';
import dataIdiomas from '../data/planeamiento/docs_idiomas.json';

import categoriasPreescolar from '../data/planeamiento/categorias_preescolar.json';
import images from '../data/images.json';
import cambiarEtiquetas from '../modulos/cambiarEtiquetas';
import arrayListasPlan from '../data/planeamiento/opciones_select_plan.json';
const listasPlan = arrayListasPlan[0];

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
            indiceDesempeno: 0

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
        this.claseCSSMaterias = "input-group mb-3";
        this.cambiarEtiquetas = cambiarEtiquetas;
    }
    handlerObtenerNivel = (e) => {
        this.setState({ nivel: e.target.value },()=> {
            console.log("nivel", this.state.nivel);
            
        }   );
        //Limpia los estados para las siguientes búsquedas
        this.setState({ materia: "" });
        this.setState({ anno: "" });
        this.mes = "";
       // console.log("handlerobtenerNivel");
    }
    handlerObtenerMateria = (e) => {
        //let indice = e.target.selectedIndex - 1;  
        this.setState({ materia: e.target.value });
        this.setState({ indiceDesempeno: e.target.selectedIndex - 1 });
    }
    handlerObtenerAnno = (e) => {
        //almacena en un estado el indice de la opción seleccionada
        this.setState({ indiceContenido: e.target.selectedIndex - 1 });
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
        //console.log("this.etiquetaPlan", this.etiquetaPlan);
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
        //console.log("***Nivel", this.state.nivel);
        //console.log("***Mes", this.mes);

        if (this.state.nivel !== "adultos") {
            //console.log("Seleccion: general");
            arrayNivel = dataGeneral;
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
                                                (this.state.materia === "frances" || this.state.materia === "ingles") &&
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
                                this.state.nivel === "Secundaria" && this.state.materia === "Español" ?
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
                                           
                                        </div>
                                    )

                            }


                        </div>
                        <br />
                    </React.Fragment>
                )
                //Proceso de filtrado por segunda vez para casos que tienen un cuarto criterio (cuarto select)
                //Filtrado por mes en caso de español secundaria:
                if (this.state.nivel === "Secundaria" && this.state.materia === "Español") {
                    if (this.mes === arrayNivel[index].mes || this.mes === "" || this.mes === "todos") {
                        arrayTmp.push(arrayHtml);
                    }
                } else {
                    // Si no se cumple español secundaria se compruban otras condiciones:
                    /* -(1) francés  -(2) inglés */
                    if (this.state.materia === "Francés" || this.state.materia === "Inglés") {
                        //console.log("Estado primaria francés");                       
                        if (this.tipoPlan === arrayNivel[index].tipoPlan) {
                            arrayTmp.push(arrayHtml);
                        }
                    } else {
                       
                            //En caso de secundaria italiano
                        if (this.state.materia === "Italiano" && this.state.nivel === "Secundaria") {
                            if (this.tipoPlan === arrayNivel[index].tipoPlan) {
                                //console.log("tipo de plan seleccionado", this.tipoPlan);
                                //console.log("tipo de plan del array coincidencia", arrayNivel[index].tipoPlan);  
                                arrayTmp.push(arrayHtml);
                            }
                        } else {
                        //General (Generico)
                        arrayTmp.push(arrayHtml);
                        }
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
                    <div className="col-12  text-right alert alert-secondary">
                        <img className="bannerRecursos" src={images[0].ApoyosPlaneamientoDidacBanner} alt="Encabezado de Documentos de apoyo"/>
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
                                    <option defaultValue value="seleccione" >Seleccione:</option>
                                  {  listasPlan["Niveles Generales"].map((item, i)=> (
                                        <option key={"niveles"+i } value={item}> {item} </option>
                                    )) }                             
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
                                        (this.state.nivel === "Primaria"  ||  this.state.nivel === "Secundaria" || this.state.nivel === "Interculturalidad Primaria" ||  this.state.nivel === "Interculturalidad Secundaria")  && 
                                                (
                                                    <span> Año </span>
                                                )

                                        }
                                    </label>
                                </div>
                                <select className="custom-select buscadores-materias" id="selAno" onChange={this.handlerObtenerAnno}  >
                                    <option defaultValue value="" > Todos </option>
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
                                                    this.state.nivel==="Jóvenes y Adultos" ? 
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
                                <select className="custom-select buscadores-materias" id="selMateria" onChange={this.handlerObtenerMateria} >
                                    <option disabled value="" >  Selecione una opción  </option>
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
                                        (this.state.nivel ===  "Interculturalidad Primaria" || this.state.nivel ===  "Interculturalidad Secundaria")   &&
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
                                        (this.state.anno === "Escuelas Nocturnas Nivel I"  || this.state.anno === "Escuelas Nocturnas Nivel II" || this.state.anno === "Escuelas Nocturnas Nivel III" || this.state.anno === "Escuelas Nocturnas Nivel IV") &&                                       
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
                                        this.state.anno ==="IPEC CINDEA Nivel III" &&
                                            listasPlan["IPEC CINDEA Nivel III"].map((item, i) => (
                                                <option key={"materia" + i} value={item} >  {item}  </option>
                                            ))                                     
                                    }
                                    {                                        
                                        this.state.nivel==="Unidocentes" &&                                                                                (                                                                                       
                                            listasPlan["Materias Básicas"].map((item,i)=>(
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
                                                (this.state.materia === "ingles" && this.state.nivel === "primaria") &&
                                                (
                                                    listasPlan.planEstudiosInglesPrimaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id} data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
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
                                                (this.state.materia === "ingles" && this.state.nivel === "secundaria") &&
                                                (
                                                    listasPlan.planEstudiosInglesSecundaria.map((item, index) => (
                                                        <option key={"plan" + index} value={item.id} data-etiqueta={item.etiqueta} > {item.etiqueta} </option>
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
                                                <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                                    <option disabled defaultValue value="" >Seleccione un mes:</option>
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
                                                <select className="custom-select buscadores-materias" id="selMes" onChange={this.handlerObtenerMes}  >
                                                    <option disabled defaultValue value="" >Seleccione una opcion:</option>
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
                                <button onClick={this.cargarInformacionBusqueda} type="button" className="btn btn-secondary btn-lg btn_Buscar">
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