import React, { useState, useEffect } from 'react';
import Tarjeta from './Tarjeta';
import config from '../data/config/config.json';
import obtener from '../modulos/obtener';
import filtrar from '../modulos/filtrar';
const imgGenerales = config.img.general;

const URI_Programas = config.servidorAPI + "obtener_programas_ae.php";
const URI_subprogramas = config.servidorAPI + "obtener_subprogramas_ae.php";
const URI_recursosAe = config.servidorAPI + "obtener_recursos_ae.php";


var programas = null;
var subprogramas = null;
var recursosAe = null;





function AgendaEstudiantil(props) {


    const [isReady, setReady] = useState(false);
    const [datosFiltrados, setDatosFiltrados] = useState(null);
    const [idPrograma, setIdPrograma] = useState(-1);



    async function setup() {
        programas = await obtener(URI_Programas);
        subprogramas = await obtener(URI_subprogramas);
        recursosAe = await obtener(URI_recursosAe);
        setReady(true);
        //console.log("programas", programas);
        console.log("subprogramas", subprogramas);
        setDatosFiltrados(recursosAe);
    }

    useEffect(() => {
        setup();
    }, []);

    const handleSeleccionarPrograma = (e) => {
        console.log("e.target.value", e.target.value);
        if (e.target.value > 0) {
            setDatosFiltrados(filtrar(recursosAe, "idPrograma", e.target.value));
            setIdPrograma(e.target.value);
        } else {
            setDatosFiltrados(recursosAe)
        }

    }

    const handleSeleccionarSubprograma = (e) => {
        if (e.target.value > 0) {
            setDatosFiltrados(filtrar(recursosAe, "idSubprograma", e.target.value));
        } else {
            setDatosFiltrados(filtrar(recursosAe, "idPrograma", "1"));
        }

    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="botones_salir col-12 ">
                        <img data-tar="Home" onClick={props.handleCerrarAgendaEstudiantil} className="derecha btn img-fluid hvr-pop" src={imgGenerales + "btn_salir.png"} role="button" alt="Salir" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <img src="https://mundologan.xyz/pruebas/baner_agenda.png" alt="Baner de agenda estudiantil" />
                </div>
            </div>

            {
                isReady ?
                    (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="selPrograma">Programas</label>
                                        </div>
                                        <select
                                            className="custom-select"
                                            id="selPrograma"
                                            onChange={handleSeleccionarPrograma}
                                        >
                                            <option defaultValue value={0}>Todos</option>
                                            {
                                                programas.map((item, i) => (
                                                    <option key={"programa" + i} data-dependencia={item.dependencia} value={item.idPrograma}> {item.nombrePrograma} </option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                </div>
                                {
                                    idPrograma === "1" && (
                                        <div className="col-sm-6">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <label className="input-group-text" htmlFor="selSubprograma">Sub Programas</label>
                                                </div>
                                                <select
                                                    className="custom-select"
                                                    id="selSubprograma"
                                                    onChange={handleSeleccionarSubprograma}
                                                >
                                                    <option defaultValue value={0}>Todos</option>
                                                    {
                                                        subprogramas.map((item, i) => (
                                                            <option key={"subprograma" + i} value={item.idSubprograma}> {item.nombreSubprograma} </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="row">
                                {
                                    datosFiltrados &&
                                    (
                                        <div className="alert alert-info" role="alert">
                                            <strong>{datosFiltrados.length}</strong> recursos encontrados.
                                        </div>
                                    )
                                }
                            </div>
                            <div className="row">
                                {
                                    datosFiltrados &&
                                    datosFiltrados.map((item, i) => (
                                        <div className="col-md-3" key={"tarjeta" + i}>
                                            <Tarjeta item={item} />
                                        </div>
                                    ))
                                }
                            </div>
                        </ React.Fragment>
                    ) :
                    (
                        <div className="row">
                            <div className="col-sm-12 text-center pt-5">                                
                                <span>Cargando datos. Por favor espere...</span>
                                <br/>
                                <img src={imgGenerales + "ajax_loader.gif"} alt="Cargando datos, por favor espere." />
                            </div>
                        </div>
                    )
            }

        </React.Fragment>


    );
}

export default AgendaEstudiantil;