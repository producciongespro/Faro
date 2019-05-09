import React  from 'react';
import images from "../data/images.json";


const Home = (props) => {
  return ( 
    <React.Fragment>
    <div className="barra-botones">
      
    <img className="btn img-fluid hvr-pop" id="caja" src={ images[0].HomeCaja } alt="Caja de herramientas" /> <br/>
    <img className="btn img-fluid hvr-pop" id="home"  src={ images[0].HomeVolver } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
    <img className="btn img-fluid hvr-pop" id="audio" src={ images[0].BtnInicio } alt="Sonido" />

    </div>
      <div className="row">
            <div className="col-1">
              
            </div>
            <div className="col-10 ">
              <img alt="maestra"  id="principal" src={images[0].Maestra  } />
              <img alt="Apoyos para el clima del aula"   data-tar="ApoyoClimaAula"  onClick={props.changePage}      id="gafas" className="cliqueables" src={images[0].Gafas  }  />
              <img alt="Documentos oficiales"  id="tablet"  data-tar="DocsOficiales"  onClick={props.changePage}    className="cliqueables2" src={images[0].Tablet  } />
              <img alt="Apoyos para la evaluación" id="lapicero"  data-tar="ApoyosEvaluacion"  onClick={props.changePage}    className="cliqueables" src={images[0].Lapicero  }  />
              <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos"  onClick={props.changePage}    className="cliqueables" src={images[0].Laptop  }  />
              <img alt="Desarrollo profesional"  id="celular" data-tar="DesarrolloProf" onClick={props.changePage}  className="cliqueables2" src={images[0].Celular  } />
              <img alt="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan"  onClick={props.changePage}  className="cliqueables" src={images[0].Bolso  }  />
            </div>
            <div className="col-1">

            </div>  
      </div>

    </React.Fragment>
   );
}
 
export default Home;