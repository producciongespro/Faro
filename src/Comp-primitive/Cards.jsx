import React from 'react';
import images from "../data/images.json";

var img = images[0];

const CardsImage = (props) => {
  var tmpComp;

  switch (props.idCat) {
    case "cursos":
        tmpComp = (
          <div className="col-sm-6">
                <div className="row">
                                  
                    <div className="card-body col-6">
                        <img alt="prueba" className="card-img-top" src={props.item.icono} />
                      </div>
               
                    <div className="col-4 inform">
                        <h5 className="card-title"><b>Nombre: </b>{props.item.nombre}</h5>
                        <p className="card-text"><b>Dirigido a: </b> {props.item.meta}  </p>
                        <p className="card-text"><b>Descripción: </b> {props.item.proposito}  </p>
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
                    
                    <div className="col-sm-2">
                    <div className="azul"></div>
                    </div>

                    <div className="col-sm-1">
                    <div className="negrito1"></div>
                    </div>

                    <div className="col-sm-9 inform1">
                    <h6><b>Nombre: </b>{props.item.videoteca}</h6>
                    <p><b>Fecha: </b> {props.item.fecha}  </p>
                    <p><b>Descripción: </b> {props.item.desc}  </p>
                    <a href={props.item.url } className="link-card"  target="_blank" rel="noopener noreferrer" >Ver video </a>
                    <br/><br/>
                    </div>

                </div>
            </div>

          );
    break;
    case "ficha" :
          tmpComp = (
            <div className="col-sm-6">
                <div className="row">   
                    
                    <div className="col-sm-1">
                    <div><img alt="Desarrollo de otras ofertas" className="img_circ" src={img.DesarrolloCircOtrasOfert}/></div>
                    </div>

                    <div className="col-sm-11 inform1">
                    <h6><b>Nombre: </b>{props.item.nombre}</h6>
                    <p><b>Descripción: </b> {props.item.desc}  </p>
                    <a href={props.item.url } className="link-card"  target="_blank" rel="noopener noreferrer" >Visitar </a>
                    <br/><br/>
                    </div>
                </div>
            </div>
          );
    break;
  
    default:
      console.log("Parámetro fuera de rango");      
      break;
  }


    return  tmpComp;
}
 
export default CardsImage;

