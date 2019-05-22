import React, { Component } from 'react';
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
        this.tmpArray=""
        this.images = ImagesJson[0];
    }

   




componentWillMount () {
    console.log("Subcategoria:", this.props.idCat);
    switch (this.props.idCat) {
        case "cursos":
            this.tmpArray = cursos;
        break;
        case "videoteca":
            this.tmpArray = videoteca;
        break;
        case "ficha":
            this.tmpArray = otrasOfertas;
        break;
    
        default:
            console.log("parámetro fuera de rango");        
        break;
    }
    

}



    cargarArray = ( ) => {      
        return this.tmpArray.slice(  this.state.indice, this.state.indice + this.state.limite );
    }

    incrementarIndice = () => {
        //Aumenta el indice para cargar los demás objetos del array
        this.setState({
            indice : this.state.indice + 4
        })
    }


    decrementarIndice = () => {
        //Aumenta el indice para cargar los demás objetos del array
        this.setState({
            indice : this.state.indice - 4
        })
    }


     

   


    render() {
        var valor=""

        switch (this.props.idCat) {

            case "cursos":
                valor= "DesarrolloTituloCursosVirt"; 
                break;
    
                case "videoteca":
                valor= "DesarrolloTituloVideoteca"; 
                break;
    
                case "pautas":
                valor= "DesarrolloTituloReferencias"; 
                break;
    
                case "ficha":
                valor= "DesarrolloTituloOtrasOfertas"; 
                break;
        
            default:
                break;
        }
        console.log(valor);
        

        return ( 
            <React.Fragment>
            <div className="row">
                <div className="col-12">
                    <img className="hvr-pop img-fluid" id="imgTitulo" src={this.images[valor]} alt="titulo"/>
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
                    <img className="botones-portada hvr-pop img-fluid" id="btnDecrementar"   onClick={this.decrementarIndice} src={this.images.DesarrolloBtnIzq} alt=""/>
                 </div>

                 <div className="col-1 pie">
                    <img className="botones-portada hvr-pop img-fluid"  id="btnIncrementar" onClick={this.incrementarIndice} src={this.images.DesarrolloBtnDer} alt=""/>
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

