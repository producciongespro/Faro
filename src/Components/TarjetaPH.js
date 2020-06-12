import React from 'react';


const TarjetaPH = (props) => {

  const item = props.item;
  const descripcion = props.item.descripcion.substring(0,128);

  return (
    (


     <div className="card my-2">

        <div className="card-header text-center texto-2 text-info">

          <a href={item.url} target="_blnak"  >
            <h5 className="card-title">
              {props.item.nombre}
            </h5>
          </a>

        </div>
        <div className="card-body">
        <a href={item.url} target="_blnak"  >
          <figure className="text-center">
            <img src={item.img_educatico} alt="imagen Educatico" className="img-previas" />            
          </figure>
          </a>
          <p className="card-text">
            <strong>Descripción: </strong>
            <br />
            {descripcion}<strong>...</strong>
          </p>
        </div>
        <div className="card-footer text-muted">
            <i className="fas fa-arrow-alt-circle-right" /> {item.materia}          
            <br/>
            <i className="fas fa-arrow-alt-circle-right" /> {item.anno}          
        </div>

        </div>


    )
  )
}

export default TarjetaPH;