import React from 'react';
import config from '../data/config/config.json';
const imgGenerales = config.img.general;

function PedagogHosp(props) {
    

    return (
            <div className="container">
                <h1>Pedagogía hospitalaria</h1>
                <img data-tar="Home" onClick={props.handleCerrarPedagoHosp} className="botones-portada hvr-pop boton-volver img-fluid derecha" src={imgGenerales + "btn_volver.png"} role="button" alt="Volver" /> 
            </div>
    );
}


export default PedagogHosp;
