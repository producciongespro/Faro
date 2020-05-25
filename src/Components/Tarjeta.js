import React from 'react';


const Tarjeta = (props) => {

  const item = props.item;

  return (
    (


      <React.Fragment>

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
            <img src={item.imgEducatico} alt="imagen Educatico" className="img-previas" />
          </figure>
          </a>
          <p className="card-text">
            <strong>Descripción: </strong>
            <br />
            {item.descripcion}
          </p>
        </div>
        <div className="card-footer text-muted">
          <i className="fas fa-clock"> {item.nombrePrograma}  </i>
        </div>

      </React.Fragment>


    )
  )
}

export default Tarjeta;