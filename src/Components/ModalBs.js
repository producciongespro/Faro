import React, {useState, useEffect }  from 'react';
import { Modal } from 'react-bootstrap';
import ContenidoModal from './ContenidoModal';



function ModalBs (props) {
    const [show, setShow] = useState(props.valor);
    const handleClose = () => setShow(false);

   useEffect(()=>{
       console.log("show", show);
   })
    
    
    return (        
      <Modal 
          show={show} 
          onHide={handleClose}
          size="lg"
          >
        <Modal.Header closeButton>
    <Modal.Title><h3 >{props.tituloModal}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>              
           <ContenidoModal opcionModal={props.opcionModal} />
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>      
    )
}


export default ModalBs;