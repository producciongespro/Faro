import React  from 'react';
import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';
const textos = textosJson[0];
const img = assets.img.home;

const Home = (props) => {
  return ( 
    <React.Fragment>
    <div className="barra-botones">
      
    <img className="btn img-fluid hvr-pop" id="indicaciones" src={ img + "caja.png" } onClick = {props.showModal }  data-typecontent ="help" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> <br/>
    <img className="btn img-fluid hvr-pop" id="home"  src={ img + "volver_portada.png" } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
    <img className="img-fluid botones-portada botonesInactivos" id="uso" src={ img + "btn_usocaja.png" } data-typecontent ="video" data-content= {textos.VideoUsoCaja}     alt="Uso de la caja de herramientas"/> <br/>
    <a href="mailto:cajadeherramientas@mep.go.cr">    <img className="btn img-fluid hvr-pop incidencias" id="acercade" src={ img + "incidencias.png" }   alt="correo de incidencias: cajadeherramientas@mep.go.cr" /></a> <br/>
    <img className="btn img-fluid hvr-pop acercade" id="acercade" src={ img + "creditos.png" } onClick = {props.showModal }  data-typecontent ="acercaDe" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> <br/>

   



    </div>
      <div className="row">
            <div className="col-1">
              
            </div>
            <div className="col-10 ">
              <img alt="maestra"  id="principal" src={img + "maestraMenu.png"  } />
              <img alt="Apoyos para el clima del aula"   data-tar="ApoyoClimaAula"  onClick={props.changePage}      id="gafas" className="cliqueables" src={img + "gafas.png"}  />
              <img alt="Documentos oficiales"  id="tablet"  data-tar="DocsOficiales"  onClick={props.changePage}    className="cliqueables" src={img + "tabletAnimada.gif"  } />
              <img alt="Apoyos para la evaluación" id="lapicero"  data-tar="ApoyosEvaluacion"  onClick={props.changePage}    className="cliqueables" src={img + "lapicero.png"  }  />
              <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos"  onClick={props.changePage}    className="cliqueables" src={img + "laptop.gif"  }  />
              <img alt="Desarrollo profesional"  id="celular" data-tar="DesarrolloProf" onClick={props.changePage}  className="cliqueables2" src={img + "celular.png"  } />
              <img alt="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan"  onClick={props.changePage}  className="cliqueables" src={img + "bolso.png"  }  />
            </div>
            <div className="col-1">

            </div>  
      </div>

    </React.Fragment>
   );
}
 
export default Home;