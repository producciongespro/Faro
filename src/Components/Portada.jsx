import React, {useState}  from 'react';
import { Modal } from 'react-bootstrap';
import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';
const textos = textosJson[0];
const img = assets.img.portada;
const imgGeneral = assets.img.general;

function Portada  (props)  {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const modal =()=> {
      return (
        <>
     
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
      )
  }



    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <img id="img-portada" src={img + "titulo.png"  } className="img-fluid" alt="Título portada"/>
            </div>
        </div>
 
            <div className="row" >
         
                    <div className="col-4 text-right">                        
                    <img  onClick = {props.showModal }  data-typecontent ="video" data-content= {textos.VideoMinistro } className="img-fluid botones-portada hvr-pop"   src={img + "btn_bienvenida.png"} alt="Bienvenida"/>
                    </div>
                    <div className="col-4 text-center">                           
                        <img 
                            id="btn-aprendo" 
                            src={img + "aprendo-en-casa.png"  } 
                            className="img-fluid botones-portada  hvr-pop" 
                            alt="Botón Aprendo en casa"
                            onClick={handleShow}
                            />
                    </div>
                    <div className="col-4 text-left">                     
                    <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada hvr-pop" src={img + "btn_ingresar.png"} alt="Ingresar"/>
                    </div>
      
            </div>
        <div className="row">
     
        <div className="col-12 text-center pie-pagina">
           <br/>
        <br/>
    
        DIRECCIÓN DE DESARROLLO CURRICULAR - DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO
        </div> <br/> <br/>  

        <div className="col-12 text-center">
        <a  href="https://creativecommons.org/licenses/by-nc-sa/3.0/cr/" target="_blank" rel="noopener noreferrer"> <img id="img-licencia" src={imgGeneral + "licencia.png"  } className="img-fluid" alt="Licencia Creative"/></a>
        <br/> <br/>
        <p className="creative">Caja de Herramientas by Costa Rica.  Ministerio de Educación Pública. is licensed under a Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License. <br/>
        Creado a partir de la obra en https:cajadeherramientas.mep.go.cr <br/>  Puede hallar permisos más allá de los concedidos con esta licencia en https://www.mep.go.cr/educatico/cajadeherramientas
        </p>
        <p>ISBN: 978-9977-60-384-1</p>
        </div>
       
        </div>
        {modal()}
        </React.Fragment>
        
     );
}
 
export default Portada;