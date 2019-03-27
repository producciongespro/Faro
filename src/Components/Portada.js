import React, { Component } from 'react';
//json:
import images from "../data/images.json";
import audios from "../data/audios";
import textos from "../data/textos";


class Portada extends Component {
  render() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <img src={images[0].TituloPortada   } className="img-fluid" alt="Título portada"/>
            </div>
        </div>
        <br/>
            
            <div className="row" >
                    <div className="col-6">                    
                        <img onClick = {this.props.showModal }  data-typecontent ="video" data-content= {textos[0].VideoMinistro } className="img-fluid botones-portada"   src={images[0].BtnBienvenida} alt="Bienvenida"/>
                    </div>
                    <div className="col-6 text-right">                        
                        <img  data-content= {audios[0].Portada }  data-typecontent ="audio"  onClick = {this.props.showModal }  className="img-fluid botones-portada " src={images[0].BtnAudio} alt="Audio"/>
                    </div>
            </div>
            <br/>
            <div className="row" >
                    <div className="col-6 ">                     
                        <img  data-content={textos[0].IndicacionesPortada  } data-typecontent="html"   onClick = {this.props.showModal }  className="img-fluid botones-portada" src={images[0].BtnIndicaciones } alt="Indicaciones"/>
                    </div>
                    <div className="col-6 text-right">                        
                        <img  data-tar="Home"  onClick={this.props.changePage}  className="img-fluid botones-portada " src={images[0].BtnIngresar} alt="Ingresar"/>
                    </div>
            </div>
     
        </div>
    );
  }
}

export default Portada;