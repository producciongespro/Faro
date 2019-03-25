import React, { Component } from 'react';
//json:
import images from "../data/images.json";
import audios from "../data/audios";
import textos from "../data/textos";


class Portada extends Component {
  render() {
    return (
        <div className="container">
            <div className="jumbotron">
            <img className="img-fluid" src={images[0].logoMep}  alt="Logo MEP"  />
            <br/>
            <h1>CAJA DE HERRAMIENTAS PARA EDUCADORES</h1>
            <h3>Fortalecimiento de Aprendiizajes para la Renovación de Oportunidades (FARO) </h3>
            </div>
            <br/>
            <hr/>
            <div className="row" >
                    <div className="col-6">
                        <button data-content= {textos[0].VideoMinistro }  data-typecontent ="video"  onClick = {this.props.showModal } className="btn btn-danger">BIENVENIDA</button>
                    </div>
                    <div className="col-6">
                        <button  data-content= {audios[0].Portada }  data-typecontent ="audio"  onClick = {this.props.showModal }   className="btn btn-info">AUDIO</button>
                    </div>
            </div>
            <br/>
            <div className="row" >
                    <div className="col-6">
                        <button data-content={textos[0].IndicacionesPortada  } data-typecontent="html"   onClick = {this.props.showModal }  className="btn btn-success">INDICACIONES</button>
                    </div>
                    <div className="col-6">
                        <button  data-tar="Home"  onClick={this.props.changePage}  className="btn btn-warning">INGRESAR</button>
                    </div>
            </div>
     
        </div>
    );
  }
}

export default Portada;