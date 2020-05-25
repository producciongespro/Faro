import React from 'react';
import './tarjeta.css';



const Tarjeta=(props)=> {

  const item = props.item;



    return(
        (
            <div className="col-sm-6">
            <div className="row">
            <div className="card m-2 text-center">
              <div  className="card-header texto-2 text-info">                
                   Texto header
              </div>
              <div className="card-body">
                  <img src={item.imgEducatico } alt="imagen Educatico" className="img-previas" />
                <h5 className="card-title">
                    {props.item.nombre}
                </h5>
                <p>
                  <strong>Contacto: { props.item.contacto }</strong>
                </p>
                <p className="card-text">
                  <strong>Descripción: </strong> {item.descripcion}
                </p>            
              </div>
              <div className="card-footer text-muted">
                <i className="fas fa-clock"> {item.nombrePrograma}  </i>
                                
                <br/>
                <a href={item.url} target="_blnak"  >
                    LINK
                </a>            
              </div>
            </div>
            </div>
            </div>
          )
    )
}

export default Tarjeta;