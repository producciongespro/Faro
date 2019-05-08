import React from 'react';

const CardsImage = (props) => {
    return ( 
            <div className="col-6">
                <div className="card" >
                    <img alt="prueba" className="card-img-top" src={props.urlImage} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text"> {props.desc}  </p>
                        <a href={props.urlWeb } className="btn btn-primary">Ir al recurso</a>
                    </div>
                </div>
            </div>
     );
}
 
export default CardsImage;