import React, { Component } from 'react';
import images from "../data/images.json";




class Home extends Component {
  render() {
    return (

      <div className="row">
      <div className="col-1"></div>
            <div className="col-10 ">
              <img id="principal" className="" src={images[0].Maestra  } alt="maestra" />
              <img id="gafas" className="cliqueables" src={images[0].Gafas  } alt="Apoyos para el clima del aula" />
              <img   data-tar="DocsOficiales"  onClick={this.props.changePage}   id="tablet" className="cliqueables2" src={images[0].Tablet  } alt="Documentos oficiales" />
              <img id="lapicero" className="cliqueables" src={images[0].Lapicero  } alt="Apoyos para la evaluación" />
              <img id="laptop" className="cliqueables" src={images[0].Laptop  } alt="Material didáctico" />
              <img id="celular" className="cliqueables2" src={images[0].Celular  } alt="Actualización profesional" />
              <img id="bolso" className="cliqueables" src={images[0].Bolso  } alt="Apoyos para el planeamiento" />
            </div>
      <div className="col-1"></div>
    </div>
    );
  }
}

export default Home;