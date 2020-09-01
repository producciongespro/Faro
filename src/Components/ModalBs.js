import React  from 'react';
import { Modal } from 'react-bootstrap';



function modal () {
    return (        
      <Modal 
          show={show} 
          onHide={handleClose}
          size="lg"
          >
        <Modal.Header closeButton>
    <Modal.Title><h3 id="tituloAprendoCasa">{tituloModal}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>              
           <ContenidoModal opcionModal={opcionModal} />
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>      
    )
}


export default ModalBs;