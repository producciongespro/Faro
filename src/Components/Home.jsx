import React from 'react';
import textosJson from "../data/textos.json";
import dsLinks from "../data/links.json";
import assets from '../data/config/config.json';
const textos = textosJson[0];
const img = assets.img.home;
var links = dsLinks[0];

/** 
 * @module home
 * Es la vista de la portada donde aparece la maestra con los gadgets
 * @author Luis Chacón Campos
 * @version 2.1
 */

const Home = (props) => {
  return (
    <React.Fragment>
      {
        /** En el area de los botones Se incluye una sección con tabindex -1*/
      }
      <section tabIndex="-1" title="Área de botones" id="botones">
        <div role="navigation" className="barra-botones">
          <img alt="Indicaciones" className="btn img-fluid hvr-pop" id="indicaciones" src={img + "caja.png"} onClick={props.showModal} data-typecontent="help" data-content={textos.IndicacionesPortada}  /> <br />
          <img alt="Volver a Portada" className="btn img-fluid hvr-pop" id="home" src={img + "volver_portada.png"} data-tar="Portada" onClick={props.changePage}  /><br />
          <img alt="Uso de la caja de herramientas" className="img-fluid botones-portada hvr-pop" id="uso" src={img + "btn_usocaja.png"} data-typecontent="usoCaja" onClick={props.showModal} data-content={textos.VideoUsoCaja}  /> <br /> <br />
          <a href={links.Encuesta} target="_blank" rel="noopener noreferrer"  >
            <img alt="Encuesta" className="img-fluid botones-portada hvr-pop" id="encuesta" src={img + "btn_encuesta.png"}  />
          </a>
          <br />
          <img alt="Inicidencias o reportes de fallas" className="btn img-fluid hvr-pop incidencias" id="btnIncidencias" data-typecontent="opcIncidencias" onClick={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}  src={img + "incidencias.png"} /><br />
          <hr />
          <img alt="Información acerca de la caja de herramientas" className="btn img-fluid hvr-pop acercade" id="acercade" src={img + "creditos.png"} onClick={props.showModal} data-typecontent="acercaDe" data-content={textos.IndicacionesPortada}  /> <br />
        </div>
      </section>
      {
        /** En el area de los vínculos a las diferentes categorías se incluye una section con tabindex -2*/
      }
        <section  tabIndex="-2" title="Área de acceso a recurso de la caja"  id="maestra">
      <div className="row">
        <div className="col-1"></div>        
        <div className="col-10 ">
          <img alt="maestra" id="principal" src={img + "maestraMenu.png"} />
          <img alt="Apoyos para el clima del aula" data-tar="ApoyoClimaAula" onClick={props.changePage} id="gafas" className="cliqueables" src={img + "gafas.png"} />
          <img alt="Documentos oficiales" id="tablet" data-tar="DocsOficiales" onClick={props.changePage} className="cliqueables" src={img + "tabletAnimada.gif"} />
          <img alt="Apoyos para la evaluación" id="lapicero" data-tar="ApoyosEvaluacion" onClick={props.changePage} className="cliqueables" src={img + "lapicero.png"} />
          <img alt="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos" onClick={props.changePage} className="cliqueables" src={img + "laptop.gif"} />
          <img alt="Desarrollo profesional" id="celular" data-tar="DesarrolloProf" onClick={props.changePage} className="cliqueables2" src={img + "celular.png"} />
          <img alt="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan" onClick={props.changePage} className="cliqueables" src={img + "bolso.png"} />
        </div>        
        <div className="col-1">
        </div>
      </div>
      </section>
    </React.Fragment>
  );
}

export default Home;