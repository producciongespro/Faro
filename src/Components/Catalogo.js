import React, { Component } from 'react';
import $ from 'jquery';

import Cards from "../Comp-primitive/Cards.jsx";
import videoteca from '../data/desarrollo/videoteca.json';
//import otrasOfertas from '../data/desarrollo/otras_ofertas.json';
import filtrar from '../modulos/filtrar';

import config from '../data/config/config';
const asst = config.img.desarrolloProfesional;
const imgGen = config.img.general;

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            limite: 4
        }
        //Caraga el array  de acuerdo a la opción seleccionada en "desarrollo profesional"
        this.tmpArray = "";
        this.limiteArray = 0;
        this.imagenEncabezado = "";
        this.leyendaCursos = "";
        this.colorFondo = "";
        this.cursos =   filtrar(JSON.parse( localStorage.getItem("arrayDesarrolloProfesional") ), "id_tipo", "1"  );
        this.otrasOfertas = filtrar(JSON.parse( localStorage.getItem("arrayDesarrolloProfesional") ), "id_tipo", "5"  );
    }






    UNSAFE_componentWillMount() {
        //console.log("Subcategoria:", this.props.idCat);
        //console.log("this.cursos",this.cursos);
        console.log("otrasOfertas",this.otrasOfertas);
        

 
        switch (this.props.idCat) {
            case "cursos":
                console.log("Cursos virtuales");                
                this.tmpArray = this.cursos;
                //carga la referencia para la imagen del encabezado:
                this.imagenEncabezado = "DesarrolloTituloCursosVirt";
                this.colorFondo = "divRojo col-12";
                //Leyenda de cursos en Encabezado
                this.leyendaCursos = (
                    <React.Fragment>
                        <strong>
                            <cite  tabIndex="2" title="Para mayor información e inscripción de los cursos, síganos en nuestra página de Facebook">Para mayor información e inscripción de los cursos, síganos en nuestra página de Facebook:</cite>
                            <a tabIndex="2" title="Enlace a la página en Facebook del Instituto de Desarrollo Profesional. Abre en una ventana nueva"  href="https://www.facebook.com/idpmep/" target="_blank" rel="noopener noreferrer"> IDP-MEP </a>
                        </strong>
                    </React.Fragment>
                )
                break;
            case "videoteca":
                console.log("Videoteca");                
                this.tmpArray = videoteca;
                this.imagenEncabezado = "DesarrolloTituloVideoteca";
                this.colorFondo = "divAzul col-12";
                break;
            case "pautas":
                console.log("Pautas");                
                //this.tmpArray = otrasOfertas;
                this.imagenEncabezado = "DesarrolloTituloReferencias";
                break;
            case "ficha":
                console.log("Otras ofertas (ficha)");                
                this.tmpArray = this.otrasOfertas;
                this.imagenEncabezado = "DesarrolloTituloOtrasOfertas";
                this.colorFondo = "divTurqueza col-12";
                break;

            default:
                console.log("parámetro fuera de rango");
                break;
        }

        this.limiteArray = this.tmpArray.length;

//        console.log("Longitud del array", this.limiteArray);


    }



    cargarArray = () => {
        return this.tmpArray.slice(this.state.indice, this.state.indice + this.state.limite);
    }

    incrementarIndice = () => {
        $("#imgTitulo").focus();
        $("#btnDecrementar").fadeIn("slow");
       
        //Aumenta el indice para cargar los demás objetos del array
        //console.log("INDICE", this.state.indice);

        //Validaciones particulares de fin de arreglo para evitar que el usuario provoque un desbordamiento.
        //Caso  IDP Otras ofertas educativas         
        if (this.limiteArray === 6 && this.state.indice === 0) {
            $("#btnIncrementar").fadeOut("slow");
        }

        //Caso  IDP cursos y videoteca
        if (this.state.indice === this.tmpArray.length - 4 || this.state.indice === 28) {
            $("#btnIncrementar").fadeOut("slow");
            //console.log("fin superior");
        } else {
            this.setState({
                indice: this.state.indice + 4
            })
        }



    }


    decrementarIndice = () => {
        //Aumenta el indice para cargar los demás objetos del array

        //Aparece el botón de incrementar
        $("#imgTitulo").focus();


        $("#btnIncrementar").fadeIn();

        this.setState({
            indice: this.state.indice - 4
        }, () => {
            //console.log("DECREMENTAR", this.state.indice);
            //valida si el estado cambió a 0 desaparece el botón retroceso
            if (this.state.indice <= 0) {
                $("#btnDecrementar").fadeOut();
            }
        })



    }







    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div id="" className={this.colorFondo}>
                        <img tabIndex="1" role="banner" className="img-fluid" id="imgTitulo" src={asst + "titulo_cursos_virtuales.png" } alt="Banner de cursos virtuales" />

                        <img tabIndex="6" role="button" className="botones-portada hvr-pop img-fluid derecha btn-idp" id="btnVolver" onClick={this.props.handlerCloseCatalog} onKeyPress={this.props.handlerCloseCatalog} src={imgGen + "btn_volver.png"} alt="Regresar a la sección de Oferta de Desarrollo Profesional" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        {this.leyendaCursos}
                    </div>

                </div>

                <div className="container">
                    <div className="row">
                    {
                        this.cargarArray().map((item, i) => {
                            return (
                                <Cards idCat={this.props.idCat} item={item} key={i} />
                            )
                        })
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-right">
                        <img tabIndex="4" title="Botón pantalla anterior" role="button" className="botones-portada hvr-pop img-fluid div-oculta" id="btnDecrementar" onClick={this.decrementarIndice} onKeyPress={this.decrementarIndice} src={asst + "img_flechaiz.jpg"} alt="decrementar" />
                    </div>

                    <div className="col-6 text-left ">                        
                        {
                            //Si las dimensiones del array son menores que cuatro no se van a presentar botones de navegación
                            this.limiteArray > 4 && <img tabIndex="5" title="Botón siguiente pantalla" role="button" className="botones-portada hvr-pop img-fluid" id="btnIncrementar" onClick={this.incrementarIndice} onKeyPress={this.incrementarIndice} src={asst + "img_flechader.jpg"} alt="incrementar" />
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 pie">

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Catalogo;

