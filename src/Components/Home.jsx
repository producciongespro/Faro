import React  from 'react';
import imagesJson from "../data/images.json";
import textosJson from "../data/textos.json";

const images = imagesJson[0];
const textos = textosJson[0];


const Home = (props) => {
  return ( 
    <React.Fragment>
    <div className="barra-botones">
      
    <img className="btn img-fluid hvr-pop" id="indicaciones" src={ images.HomeCaja } onClick = {props.showModal }  data-typecontent ="help" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> <br/>
    <img className="btn img-fluid hvr-pop" id="home"  src={ images.HomeVolver } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
    <img className="img-fluid botones-portada hvr-pop" id="uso" src={images.BtnUso} onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoUsoCaja}     alt="Uso de la caja de herramientas"/>
                  


    </div>
      <div className="row">
            <div className="col-1">
              
            </div>
            <div className="col-10 ">
              <img alt="maestra"  id="principal" src={images.Maestra  } />
              <img alt="Apoyos para el clima del aula"   data-tar="ApoyoClimaAula"  onClick={props.changePage}      id="gafas" className="cliqueables" src={images.Gafas  }  />
              <img alt="Documentos oficiales"  id="tablet"  data-tar="DocsOficiales"  onClick={props.changePage}    className="cliqueables" src={images.Tablet2  } />
              <img alt="Apoyos para la evaluación" id="lapicero"  data-tar="ApoyosEvaluacion"  onClick={props.changePage}    className="cliqueables" src={images.Lapicero  }  />
              <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos"  onClick={props.changePage}    className="cliqueables" src={images.Laptop  }  />
              <img alt="Desarrollo profesional"  id="celular" data-tar="DesarrolloProf" onClick={props.changePage}  className="cliqueables2" src={images.Celular  } />
              <img alt="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan"  onClick={props.changePage}  className="cliqueables" src={images.Bolso  }  />
            </div>
            <div className="col-1">

            </div>  
      </div>

    </React.Fragment>
   );
}
 
export default Home;