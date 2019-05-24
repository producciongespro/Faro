import React, { Component } from 'react';
import $ from 'jquery';

import Cards from "../Comp-primitive/Cards.jsx";
import ImagesJson from "../data/images.json";


//Json con información:
import cursos from '../data/desarrollo/cursos.json';
import videoteca from '../data/desarrollo/videoteca.json';
import otrasOfertas from '../data/desarrollo/otras_ofertas.json'


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indice : 0,
            limite : 4
         }
            //Caraga el array  de acuerdo a la opción seleccionada en "desarrollo profesional"
        this.tmpArray = "";
        this.imagenEncabezado = "";
        this.images = ImagesJson[0];
    }

   




componentWillMount () {
    console.log("Subcategoria:", this.props.idCat);
    switch (this.props.idCat) {
        case "cursos":
            this.tmpArray = cursos;
            //carga la referencia para la imagen del encabezado:
            this.imagenEncabezado = "DesarrolloTituloCursosVirt"; 
        break;
        case "videoteca":
            this.tmpArray = videoteca;
            this.imagenEncabezado = "DesarrolloTituloVideoteca"; 
        break;
        case "pautas":
            //this.tmpArray = otrasOfertas;
            this.imagenEncabezado = "DesarrolloTituloReferencias"; 
        break;
        case "ficha":
            this.tmpArray = otrasOfertas;
            this.imagenEncabezado = "DesarrolloTituloOtrasOfertas"; 
        break;
    
        default:
            console.log("parámetro fuera de rango");        
        break;
    }
    
    console.log("Longitud del array", this.tmpArray.length );
    

}



    cargarArray = ( ) => {      
        return this.tmpArray.slice(  this.state.indice, this.state.indice + this.state.limite );
    }

    incrementarIndice = () => {

        $("#btnDecrementar").fadeIn("slow");

        //Aumenta el indice para cargar los demás objetos del array
        console.log( "Indice",  this.state.indice);
        

        
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

        if (this.state.indice <= 0 ) {
            $("#btnDecrementar").fadeOut("slow");
        } else {
            this.setState({
                indice : this.state.indice - 4
            })
        }


    }


     

   


    render() {        
        return ( 
            <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <img className="hvr-pop img-fluid" id="imgTitulo" src={this.images[this.imagenEncabezado]} alt="titulo"/>
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
            
            </div>
            

            <div className="row">
                <div className="col-11 pie">
                    <img className="botones-portada hvr-pop img-fluid" id="btnDecrementar"   onClick={this.decrementarIndice} src={this.images.DesarrolloBtnIzq} alt="decrementar"/>
                 </div>

                 <div className="col-1 pie">
                    <img className="botones-portada hvr-pop img-fluid"  id="btnIncrementar" onClick={this.incrementarIndice} src={this.images.DesarrolloBtnDer} alt="incrementar"/>
                 </div>
             </div>

            <div className="row">
                <div className="col-12 pie">
                    <img className="botones-portada hvr-pop img-fluid" id="btnVolver"   onClick={this.props.handlerCloseCatalog}    src={this.images.BtnVolver} alt="Volver"/>
                 </div>
             </div>
              
              </React.Fragment>
         );
    }
}
 
export default Catalogo;

