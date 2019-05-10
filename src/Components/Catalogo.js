import React, { Component } from 'react';
import CardsImage from "../Comp-primitive/CardsImage.jsx";
import ImagesJson from "../data/images.json";


//Json con información:
import cursos from '../data/desarrollo/cursos.json';


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indice : 0,
            limite : 4
         }
    }

//Array que carga el json dependiendo de la subcategoría seleccionada
mainArray


componentDidMount () {
    console.log("Subcategoria:", this.props.idCat);

}

images = ImagesJson[0];

    cargarArray () {      
        return cursos.slice(  this.state.indice, this.state.indice + this.state.limite );
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
        let tmpArray = this.cargarArray();
        return ( 
            <React.Fragment>
                <div className="row">
                <div className="col-12">
                    <img className="hvr-pop img-fluid" id="imgTitulo" src={this.images.DesarrolloTituloCursosVirt} alt="titulo"/>
                 </div>
             </div>

            <div className="row">               
           {
               
               tmpArray.map( (dato, i) => {
                  return (
                    <CardsImage urlImage={dato.url }  title={dato.nombre}  meta={dato.meta} prop={dato.proposito} facilitador={dato.facilitador}  urlWeb={dato.url} key={i} />
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

