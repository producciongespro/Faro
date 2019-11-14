import React, { Component } from 'react';
import $ from 'jquery';

import Cards from "../Comp-primitive/Cards.jsx";
import ImagesJson from "../data/images.json";


//Json con información:
import cursos from '../data/desarrollo/cursos.json';
import videoteca from '../data/desarrollo/videoteca.json';
import otrasOfertas from '../data/desarrollo/otras_ofertas.json';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indice : 0,
            limite : 4
         }
            //Caraga el array  de acuerdo a la opción seleccionada en "desarrollo profesional"
        this.tmpArray = "";
        this.limiteArray = "0";
        this.imagenEncabezado = "";
        this.images = ImagesJson[0];
        this.leyendaCursos="";
        this.colorFondo = "";
    }

   




componentWillMount () {
    console.log("Subcategoria:", this.props.idCat);
    switch (this.props.idCat) {
        case "cursos":
            this.tmpArray = cursos;
            //carga la referencia para la imagen del encabezado:
            this.imagenEncabezado = "DesarrolloTituloCursosVirt"; 
            this.colorFondo = "divRojo col-12";
                        //Leyenda de cursos en Encabezado
            this.leyendaCursos = (
                <React.Fragment>                    
                    <strong>
                        <cite>Para mayor información e inscripción de los cursos, síganos en nuestra página de Facebook:</cite>
                        <a href="https://www.facebook.com/idpmep/" target="_blank" rel="noopener noreferrer"> IDP-MEP </a>
                    </strong>
                </React.Fragment>
            )
        break;
        case "videoteca":
            this.tmpArray = videoteca;
            this.imagenEncabezado = "DesarrolloTituloVideoteca"; 
            this.colorFondo = "divAzul col-12";
        break;
        case "pautas":
            //this.tmpArray = otrasOfertas;
            this.imagenEncabezado = "DesarrolloTituloReferencias"; 
        break;
        case "ficha":
            this.tmpArray = otrasOfertas;
            this.imagenEncabezado = "DesarrolloTituloOtrasOfertas"; 
            this.colorFondo = "divTurqueza col-12";
        break;      

        default:
            console.log("parámetro fuera de rango");        
        break;
    }

    this.limiteArray = this.tmpArray.length;
    
    console.log("Longitud del array", this.limiteArray );
    

}



    cargarArray = ( ) => {      
        return this.tmpArray.slice(  this.state.indice, this.state.indice + this.state.limite );
    }

    incrementarIndice = () => {

        $("#btnDecrementar").fadeIn("slow");

        //Aumenta el indice para cargar los demás objetos del array
        console.log( "INDICE",  this.state.indice);

        //Validaciones particulares de fin de arreglo para evitar que el usuario provoque un desbordamiento.
        //Caso  IDP Otras ofertas educativas         
        if (this.limiteArray === 6 &&  this.state.indice === 0 ) {
            $("#btnIncrementar").fadeOut("slow");
        }
        
        //Caso  IDP cursos y videoteca
        if (this.state.indice === this.tmpArray.length - 4  || this.state.indice === 28  ) {
            $("#btnIncrementar").fadeOut("slow");
            console.log("fin superior");            
        } else {
            this.setState({
                indice : this.state.indice + 4
            })
        }
        

  
    }


    decrementarIndice = () => {
        //Aumenta el indice para cargar los demás objetos del array
        
        //Aparece el botón de incrementar
         
            

        $("#btnIncrementar").fadeIn();

            this.setState({
                indice : this.state.indice - 4
            }, () => {
                console.log( "DECREMENTAR", this.state.indice );
                //valida si el estado cambió a 0 desaparece el botón retroceso
                if (this.state.indice <= 0 ) {
                    $("#btnDecrementar").fadeOut();
                }
            })
  


    }


     

   


    render() {        
        return ( 
            <React.Fragment>
            <div className="row">
                <div id=""  className={this.colorFondo}>
                    <img className="img-fluid" id="imgTitulo" src={this.images[this.imagenEncabezado]} alt="titulo"/>

                    <img className="botones-portada hvr-pop img-fluid derecha btn-idp" id="btnVolver"   onClick={this.props.handlerCloseCatalog}    src={this.images.BtnVolver} alt="Volver"/>
                 </div>
               
             </div>
             <div className="row">
                 <div className="col-12">
                        {this.leyendaCursos}
                 </div>
               
             </div>

            <div className="row">               
           {             
            this.cargarArray().map( (item, i) => {
                return (
                            <Cards  idCat={this.props.idCat}   item={item} key={i} />
                        )
                    })
          }  
                
              </div>                        
            <div className="row">
                <div className="col-11 pie">                    
                    <img className="botones-portada hvr-pop img-fluid div-oculta" id="btnDecrementar"   onClick={this.decrementarIndice} src={this.images.DesarrolloBtnIzq} alt="decrementar"/>
                 </div>

                 <div className="col-1 pie">
                     {
                         //Si las dimensiones del array son menores que cuatro no se van a presentar botones de navegación
                         this.limiteArray > 4 &&  <img className="botones-portada hvr-pop img-fluid"  id="btnIncrementar" onClick={this.incrementarIndice} src={this.images.DesarrolloBtnDer} alt="incrementar"/> 
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

