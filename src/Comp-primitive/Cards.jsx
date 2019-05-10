import React from 'react';

const CardsImage = (props) => {
  var tmpComp;

  switch (props.idCat) {
    case "cursos":
        tmpComp = (
          <div className="col-sm-6">
                <div className="row">
                                  
                    <div className="card-body col-6">
                        <img alt="prueba" className="card-img-top" src={props.item.url} />
                      <div className="row">
                        <div className="amarillo"></div>
                        <div className="negrito"></div>
                      </div>
                    </div>
               
                    <div className="col-4 inform">
                        <h5 className="card-title azul"><b>Nombre: </b>{props.item.nombre}</h5>
                        <p className="card-text"><b>Dirigido a: </b> {props.item.meta}  </p>
                        <p className="card-text"><b>Propósito: </b> {props.item.proposito}  </p>
                        <p className="card-text"><b>Facilitador: </b> {props.item.facilitador}  </p>
                        <a href={props.item.url } className="link-card"  target="_blank" rel="noopener noreferrer" > > Ir al recurso </a>
                    </div>

                </div>
            </div>
        )
    break;
    case "videoteca" :
    tmpComp = (
      <div className="col-sm-6">
          <div className="row">
                  {props.item.videoteca}
          </div>
      </div>
    )
  
    default:
      console.log("Parámetro fuera de rango");      
      break;
  }


    return  tmpComp;
}
 
export default CardsImage;

