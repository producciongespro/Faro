import React, { Component } from 'react';
import images from "../data/images.json";


//Contenido para el modal


    //const videoMinistro = <iframe width="919" height="506" src="https://www.youtube.com/embed/eGhTLbiaTgE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
    const videoMinistro = "https://www.youtube.com/embed/eGhTLbiaTgE"
    const indicaciones = "Estas son las indiciaciones..."



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
                        <button data-content= {videoMinistro}  data-typecontent ="video"  onClick = {this.props.showModal } className="btn btn-danger">BIENVENIDA</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-info">AUDIO</button>
                    </div>
            </div>
            <br/>
            <div className="row" >
                    <div className="col-6">
                        <button data-content={indicaciones} data-typecontent="html"   onClick = {this.props.showModal }  className="btn btn-success">INDICACIONES</button>
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