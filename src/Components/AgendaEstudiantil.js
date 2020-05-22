import React, { useState, useEffect } from 'react';
import config from '../data/config/config.json';
import obtener from '../modulos/obtener';
const imgGenerales = config.img.general;

const URI_Programas = config.servidorAPI + "obtener_programas_ae.php"
var programas = null;




function AgendaEstudiantil(props) {

    const [isReady, setReady]= useState(false);
    const [dependencia, setDependencia ]= useState(false);


    async function setup() {
        programas = await obtener(URI_Programas);
        setReady(true);
        console.log("programas", programas);

    }

    useEffect(() => {
        setup();
    }, []);

    const handleSeleccionarPrograma =(e)=> {
        console.log(e.target);

        //let dependencia = e.target.dataset.dependencia;
        //console.log("dependencia",dependencia);
        
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
                    <div className="row">
                <div className="col-sm-6">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="selPrograma">Programas</label>
                        </div>
                        <select 
                            className="custom-select" 
                            id="selPrograma"
                            //onChange={handleSeleccionarPrograma}
                            >
                            <option defaultValue>Todos</option>
                            {
                                programas.map((item,i)=>(
                                    <option onClick={handleSeleccionarPrograma} key={"programa"+i} data-dependencia={item.dependencia} value={item.idPrograma}> {item.nombrePrograma} </option>
                                ))
                            }
                        </select>
                    </div>

                </div>
            </div>
                ) :
                (
                    <span>Por favor espere un momento...</span>
                )
            }

        </React.Fragment>
        
        
    );
}

export default AgendaEstudiantil;