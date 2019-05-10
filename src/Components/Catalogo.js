import React, { Component } from 'react';
import CardsImage from "../Comp-primitive/CardsImage.jsx";
import DatosDesarrolloJson from "../data/desarrollo/otras_ofertas.json"
import ImagesJson from "../data/images.json";


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indice : 0,
            limite : 4
         }
    }


datos = DatosDesarrolloJson;
images = ImagesJson[0];

    cargarArray () {
      console.log(this.datos);
      
        return this.datos.slice(  this.state.indice, this.state.indice + this.state.limite );
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

                <div class="row">
                <div class="col-12">
                    <img class="hvr-pop img-fluid" id="" src={this.images.DesarrolloTituloCursosVirt} alt=""/>
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
            

            <div class="row">
                <div class="col-11 pie">
                    <img class="botones-portada hvr-pop img-fluid" id="btnDecrementar"   onClick={this.decrementarIndice} src={this.images.DesarrolloBtnIzq} alt=""/>
                 </div>

                 <div class="col-1 pie">
                    <img class="botones-portada hvr-pop img-fluid"  id="btnIncrementar" onClick={this.incrementarIndice} src={this.images.DesarrolloBtnDer} alt=""/>
                 </div>
             </div>

            <div class="row">
                <div class="col-12 pie">
                    <img class="botones-portada hvr-pop img-fluid" id="btnVolver"   onClick={this.props.handlerCloseCatalog}    src={this.images.BtnVolver} alt="Volver"/>
                 </div>
             </div>
              
              </React.Fragment>
         );
    }
}
 
export default Catalogo;

