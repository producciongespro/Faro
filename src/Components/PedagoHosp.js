import React, { useState } from 'react';
import config from '../data/config/config.json';
import jsonp from '../TMP_pedago_hosp.json';
const imgGenerales = config.img.general;
const img = config.img.recursosDidacticos;


//console.log(jsonp.asignaturas );


function PedagogHosp(props) {

    const [asignatura, setAsignatura] = useState(null);

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <img className="bannerRecursos" src={img + "ch_encabezado_pedagogiahospitalaria.png"} alt="Encabezado pedagogía hospitalaria" />
                    <img data-tar="Home" onClick={props.handleCerrarPedagoHosp} className="botones-portada hvr-pop boton-volver img-fluid derecha" src={imgGenerales + "btn_volver.png"} role="button" alt="Volver" />
                </div>
            </div>

            <div className="row">

                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="selAsignatura">asignatura</label>
                        </div>
                        <select
                            className="custom-select"
                            id="selAsignatura"
                        // onChange={handleSeleccionarPrograma}
                        >
                            <option defaultValue value={0}>Todos</option>
                            {

                                jsonp.asignaturas.map((item, i) => (
                                    <option key={"asignatura" + i} value={item}> {item} </option>
                                ))

                            }
                        </select>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="selAnno">Años</label>
                        </div>
                        <select
                            className="custom-select"
                            id="selAnno"
                        // onChange={handleSeleccionarPrograma}
                        >
                            <option defaultValue value={0}>Todos</option>
                            {

                                jsonp.annos.map((item, i) => (
                                    <option key={"anno" + i} value={item}> {item} </option>
                                ))

                            }
                        </select>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}


export default PedagogHosp;
