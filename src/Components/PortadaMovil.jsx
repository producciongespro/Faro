import React, {useState}  from 'react';
import { Modal } from 'react-bootstrap';
import textosJson from "../data/textos.json";
import assets from "../data/config/config_m.json";
const textos = textosJson[0];
const img  = assets.img.portada;
const imgGeneral = assets.img.general;
//Portada en caso de móviles
function  PortadaMovil (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const modal =()=> {
    return (        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h5 id="tituloAprendoCasa">Aprendo en casa - Enlaces</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {
                /* TODO: Revisar esta información y cambiar lo necesario (se pueden agregar iconos) */
            }
            <div className="row">
                <div className="col-sm-3">
                    <a href="https://recursos.mep.go.cr/2020/aprendoencasa/" target="_blank" rel="noopener noreferrer"> 
                    <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ movil_ventana1.jpg" alt="Guía televisiva"></img>
                    </a><br/><br/>
                </div>
          
                <div className="col-sm-3">
                    <a href="https://aulavirtualabierta.mep.go.cr/curso/" target="_blank" rel="noopener noreferrer"> 
                    <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ movil_ventana3.jpg" alt="Guía de trabajo autónomo"></img>
                    </a><br/><br/>
                </div>

                <div className="col-sm-3">
                    <a href="http://www.ddc.mep.go.cr/estrategia-covid19/guias-aprendizajes-base" target="_blank" rel="noopener noreferrer"> 
                    <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ movil_ventana2.jpg" alt="Plantillas guía de aprendizaje base"></img>
                    </a><br/><br/>
                </div>
                <div className="col-sm-3">
                <a href="https://cajadeherramientas.mep.go.cr/faro_referencias/1_ref_portada/GTA_FIESTAS_PATRIAS.zip" target="_blank" rel="noopener noreferrer"> 
                      <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ movil_ventana5.jpg" alt="Guías fiestas patrias 2020"></img>
                      </a>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>      
    )
}


    return (
        
        
        
        <React.Fragment>
            <br/>
            <div className="row">
                <div className="col-12 text-center">
                    <img id="logoMCH" src={img + "titulo.png"  } className="img-fluid" alt="Título portada"  />
                </div>
            </div>
            <br/> <br/>
            <div className="row" >
                <div className="col-2 ">                     
                </div>
                <div className="col-8 ">                        
                    <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoMinistro } className="img-fluid botones-portada hvr-pop"   src= {img + "btn_bienvenida.png"} alt="Bienvenida"/>
                </div>
                <div className="col-2 ">                     
                </div>         
            </div>  
            <div className="row" >
                <div className="col-2 ">                     
                </div>
                <div className="col-8 ">                     
                    <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada hvr-pop" src={img + "btn_ingresar.png"} alt="Ingresar"/>
                </div>
                <div className="col-2 ">                     
                </div>
            </div>
            <div className="row" >
                <div className="col-2 ">                     
                </div>
                <div className="col-8 ">                     
                
                <img 
                    id="btn-aprendo" 
                    src={img + "aprendo-en-casa.png"  } 
                    className="img-fluid botones-portada  hvr-pop" 
                    alt="Botón Aprendo en casa"
                    onClick={handleShow}
                    />
                
                </div>
                <div className="col-2 ">                     
                </div>
            </div>
        <div className="row">
            <div className="col-12 text-center pie-pagina2">               
            DIRECCIÓN DE DESARROLLO CURRICULAR - DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO
            </div>
            <div className="col-12 text-center"><br/>
        <a  href="https://creativecommons.org/licenses/by-nc-sa/3.0/cr/" target="_blank" rel="noopener noreferrer"> <img id="img-licencia" src={imgGeneral + "licencia.png"  } className="img-fluid" alt="Licencia Creative"/></a>
        <br/> 
        <p className="creative">Caja de Herramientas by Costa Rica.  Ministerio de Educación Pública. is licensed under a Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License. <br/>
        Creado a partir de la obra en https://www.mep.go.cr/educatico/caja. <br/>  Puede hallar permisos más allá de los concedidos con esta licencia en www.cajadeherramientas.mep.go.cr
        </p>
        <p>ISBN: 978-9977-60-384-1</p>
        </div>
        </div>

        {
            modal()
        }
        </React.Fragment>
     );
}
 
export default PortadaMovil;