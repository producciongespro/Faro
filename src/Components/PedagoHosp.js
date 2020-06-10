import React from 'react';
import config from '../data/config/config.json';
const imgGenerales = config.img.general;
const img = config.img.recursosDidacticos;

function PedagogHosp(props) {
    

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                <img className="bannerRecursos"   src={ img + "ch_encabezado_pedagogiahospitalaria.png"} alt="Encabezado pedagogía hospitalaria" />
                <img data-tar="Home" onClick={props.handleCerrarPedagoHosp} className="botones-portada hvr-pop boton-volver img-fluid derecha" src={imgGenerales + "btn_volver.png"} role="button" alt="Volver" /> 
                </div>
            </div>
        </React.Fragment>
    );
}


export default PedagogHosp;
