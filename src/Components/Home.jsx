import React, {useState}  from 'react';
import { Modal } from 'react-bootstrap';
import ContenidoModal from './ContenidoModal';
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



  const [tituloModal, setTituloModal]= useState(false);    
  const [opcionModal, setOpcionModal ]= useState(null); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);       
  
  

  const handleAbriModal=(e)=>{
      console.log(e.target.dataset.typecontent  );        
      setTituloModal(e.target.alt);
      setOpcionModal( e.target.dataset.typecontent );        
      setShow(true);
  }

  const modal =()=> {
      return (        
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            >
          <Modal.Header closeButton>
      <Modal.Title><h3 className="titulo-modal" >{tituloModal}</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>              
             <ContenidoModal opcionModal={opcionModal}  infoModal={null} />
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>      
      )
  }





  return (
    <React.Fragment>
        {
        /** En el area de los vínculos a las diferentes categorías se incluye una section con tabindex 1
         * se agrega rol button a las imágenes qeu cumplen el rol de botón
        */
      }
      <section  tabIndex="-1" title="Área de acceso a recurso de la caja"  id="maestra">
      <div className="row">
        <div  className="col-1"></div>        
        <div className="col-10 ">
          <img tabIndex="2"               alt="imagen de la maestra"           id="principal"    src={img + "maestraMenu.png"} />
          <img tabIndex="2" role="button" alt="Apoyos para el clima del aula"  id="gafas"        data-tar="ApoyoClimaAula"       onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables"   src={img + "gafas.png"} />
          <img tabIndex="2" role="button" alt="Documentos oficiales"           id="tablet"       data-tar="DocsOficiales"        onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables"   src={img + "tabletAnimada.gif"}  />
          <img tabIndex="2" role="button" alt="Apoyos para la evaluación"      id="lapicero"     data-tar="ApoyosEvaluacion"     onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables"   src={img + "lapicero.png"}  />
          <img tabIndex="2" role="button" alt="Recursos didáctico"             id="laptop"       data-tar="RecursosDidacticos"   onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables"   src={img + "laptop.gif"} />
          <img tabIndex="2" role="button" alt="Desarrollo profesional"         id="celular"      data-tar="DesarrolloProf"       onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables2"  src={img + "celular.png"}  />
          <img tabIndex="2" role="button" alt="Apoyos para el planeamiento"    id="bolso"        data-tar="ApoyosPlan"           onClick={props.changePage} onKeyPress={props.changePage} className="cliqueables"   src={img + "bolso.png"}  />
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
          <img 
          tabIndex="9" 
          role="button" 
          alt="Indicaciones de uso de la caja de herramientas" 
          className="btn img-fluid hvr-pop" 
          id="indicaciones" 
          src={img + "caja.png"} 
          //onClick={props.showModal} 
          //onKeyPress={props.showModal} 
          onClick={handleAbriModal}
          onKeyPress={handleAbriModal}
          data-typecontent="indicaciones" 
          data-content={textos.IndicacionesPortada}  /> 
          <br />

          <img 
          tabIndex="9" 
          role="button" 
          alt="Volver a Portada" 
          className="btn img-fluid hvr-pop" 
          id="home" 
          src={img + "volver_portada.png"} 
          data-tar="Portada" 
          onClick={props.changePage} 
          onKeyPress={props.changePage}  />
          <br />

          <img 
          tabIndex="9" 
          role="button" 
          alt="Uso de la caja de herramientas" 
          className="img-fluid botones-portada hvr-pop" 
          id="uso" 
          src={img + "btn_usocaja.png"} 
          data-typecontent="usoCaja" 
          onClick={handleAbriModal} 
          onKeyPress={handleAbriModal} 
          data-content={textos.VideoUsoCaja}  /> 
          <br /> 
          <br />

          <a 
          tabIndex="9" 
          href={links.Encuesta} 
          target="_blank" 
          rel="noopener noreferrer"  >
              <img 
              alt="Encuesta" 
              className="img-fluid botones-portada hvr-pop" 
              id="encuesta" 
              src={img + "btn_encuesta.png"}  />
          </a>
          <br />

          <img 
          tabIndex="9" 
          role="button" 
          alt="Inicidencias o reportes de fallas" 
          className="btn img-fluid hvr-pop incidencias" 
          id="btnIncidencias" 
          data-typecontent="opcIncidencias"           
          onClick={handleAbriModal} 
          onKeyPress={handleAbriModal} 
          data-infosource={2} 
          onMouseOver={props.onMouseOver} 
          onMouseOut={props.onMouseOut}  
          src={img + "incidencias.png"}  />
          <br />
          <hr />

          <img 
          tabIndex="9" 
          role="button" 
          alt="Información acerca de la caja de herramientas" 
          className="btn img-fluid hvr-pop acercade" 
          id="acercade" 
          src={img + "creditos.png"} 
          onClick={handleAbriModal} 
          onKeyPress={handleAbriModal} 
          data-typecontent="creditos" 
          data-content={textos.IndicacionesPortada}  /> <br />
        </div>

      </section>

      {modal()}
    
    </React.Fragment>
  );
}

export default Home;