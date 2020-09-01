import React from 'react';
import textosJson from "../data/textos.json";
import dsLinks from "../data/links.json";
import assets from '../data/config/config.json';
import '../css/home.css';
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
        /** En el area de los vínculos a las diferentes categorías se incluye una section con tabindex 1
         * se agrega rol button a las imágenes qeu cumplen el rol de botón
        */
      }
        <section  tabIndex="1" title="Área de acceso a recurso de la caja"  id="maestra">
      <div className="row">
        <div  className="col-1"></div>        
        <div className="col-10 ">
          <img tabIndex="2" alt="imagen de la maestra" id="principal" src={img + "maestraMenu.png"} />
          <img tabIndex="3" role="button" title="Apoyos para el clima del aula" data-tar="ApoyoClimaAula" onClick={props.changePage} onKeyPress={props.changePage} id="gafas" className="cliqueables" src={img + "gafas.png"} alt=""/>
          <img tabIndex="4" role="button" title="Documentos oficiales" id="tablet" data-tar="DocsOficiales" onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables" src={img + "tabletAnimada.gif"} alt="" />
          <img tabIndex="5" role="button" title="Apoyos para la evaluación" id="lapicero" data-tar="ApoyosEvaluacion" onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables" src={img + "lapicero.png"} alt="" />
          <img tabIndex="6" role="button" title="Recursos didáctico" id="laptop" data-tar="RecursosDidacticos" onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables" src={img + "laptop.gif"} alt="" />
          <img tabIndex="7" role="button" title="Desarrollo profesional" id="celular" data-tar="DesarrolloProf" onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables2" src={img + "celular.png"} alt="" />
          <img tabIndex="8" role="button" title="Apoyos para el planeamiento" id="bolso" data-tar="ApoyosPlan" onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables" src={img + "bolso.png"} alt="" />
        </div>        
        <div className="col-1"></div>
      </div>
      </section>
      {
        /** En el area de los botones Se incluye una sección con tabindex 2 
         se agrega rol button a las imágenes qeu cumplen el rol de botón
        */
      }
      <section tabIndex="9" title="Área de botones" id="botones">
        <div role="navigation" className="barra-botones">
          <img tabIndex="9" role="button" title="Indicaciones" className="btn img-fluid hvr-pop" id="indicaciones" src={img + "caja.png"} onClick={props.showModal} onKeyPress={props.showModal} data-typecontent="help" data-content={textos.IndicacionesPortada} alt="" /> <br />
          <img tabIndex="9" role="button" title="Volver a Portada" className="btn img-fluid hvr-pop" id="home" src={img + "volver_portada.png"} data-tar="Portada" onClick={props.changePage} onKeyPress={props.changePage} alt="" /><br />
          <img tabIndex="9" role="button" title="Uso de la caja de herramientas" className="img-fluid botones-portada hvr-pop" id="uso" src={img + "btn_usocaja.png"} data-typecontent="usoCaja" onClick={props.showModal} onKeyPress={props.showModal} data-content={textos.VideoUsoCaja} alt="" /> <br /> <br />
          <a tabIndex="9" href={links.Encuesta} target="_blank" rel="noopener noreferrer"  >
              <img alt="Encuesta" className="img-fluid botones-portada hvr-pop" id="encuesta" src={img + "btn_encuesta.png"}  />
          </a>
          <br />
          <img tabIndex="9" role="button" title="Inicidencias o reportes de fallas" className="btn img-fluid hvr-pop incidencias" id="btnIncidencias" data-typecontent="opcIncidencias" onClick={props.showModal} onKeyPress={props.showModal} data-infosource={2} onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}  src={img + "incidencias.png"} alt="" /><br />
          <hr />
          <img tabIndex="9" role="button" title="Información acerca de la caja de herramientas" className="btn img-fluid hvr-pop acercade" id="acercade" src={img + "creditos.png"} onClick={props.showModal} onKeyPress={props.showModal} data-typecontent="acercaDe" data-content={textos.IndicacionesPortada} alt="" /> <br />
        </div>
      </section>
    
    </React.Fragment>
  );
}

export default Home;