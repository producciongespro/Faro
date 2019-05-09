import React from 'react';

const CardsImage = (props) => {
    return ( 
             <div className="col-sm-6">
                <div className="row">
                                  
                    <div className="card-body col-6">
                        <img alt="prueba" className="card-img-top" src={props.urlImage} />
                      <div className="row">
                        <div className="amarillo"></div>
                        <div className="negrito"></div>
                      </div>
                    </div>
               
                    <div className="col-4 inform">
                        <h5 className="card-title azul"><b>Nombre: </b>{props.title}</h5>
                        <p className="card-text"><b>Dirigido a: </b> {props.meta}  </p>
                        <p className="card-text"><b>Propósito: </b> {props.prop}  </p>
                        <p className="card-text"><b>Facilitador: </b> {props.facilitador}  </p>
                        <a href={props.urlWeb } className=""> > Ir al recurso </a>
                    </div>

                </div>
            </div>   
     );
}
 
export default CardsImage;

