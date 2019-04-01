import React, { Component } from 'react';
import images from "../data/images.json";




class Home extends Component {
  render() {
    return (
      <div>

<div className="row">
      <div className="col-1"></div>
            <div className="col-10 ">
              <img alt="maestra"  id="principal" src={images[0].Maestra  } />
              <img alt="Apoyos para el clima del aula"   data-tar="ApoyoClimaAula"  onClick={this.props.changePage}      id="gafas" className="cliqueables" src={images[0].Gafas  }  />
              <img alt="Documentos oficiales"  id="tablet"  data-tar="DocsOficiales"  onClick={this.props.changePage}    className="cliqueables2" src={images[0].Tablet  } />
              <img alt="Apoyos para la evaluación" id="lapicero"  data-tar="ApoyosEvaluacion"  onClick={this.props.changePage}    className="cliqueables" src={images[0].Lapicero  }  />
              <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos"  onClick={this.props.changePage}    className="cliqueables" src={images[0].Laptop  }  />
              <img alt="Desarrollo profesional"  id="celular" data-tar="DesarrolloProf" onClick={this.props.changePage}  className="cliqueables2" src={images[0].Celular  } />
              <img alt="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan"  onClick={this.props.changePage}  className="cliqueables" src={images[0].Bolso  }  />
            </div>
      <div className="col-1"></div>
    </div>
      <div className="row">
      </div>

      </div>
    );
  }
}

export default Home;