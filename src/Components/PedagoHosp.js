import React, { useState, useEffect } from 'react';
import TarjetaPH from '../Components/TarjetaPH';
import config from '../data/config/config.json';
import jsonp from '../TMP_pedago_hosp.json';
const imgGenerales = config.img.general;
const img = config.img.recursosDidacticos;



//console.log(jsonp.asignaturas );





function PedagogHosp(props) {
    
    const [arrayFiltrado, setArrayFiltrado ]= useState(null);
    const [asignatura, setAsignatura]= useState(null);


    
    
    useEffect (()=>{
       let recursosDidacticos= JSON.parse(localStorage.getItem("arrayRecursos"));
       let tmpFiltrados=[];
        console.log(recursosDidacticos);
        for (let index = 0; index < recursosDidacticos.length; index++) {
            if (parseInt(recursosDidacticos[index].id_nivel) === 6 ) {
                tmpFiltrados.push(recursosDidacticos[index])
            }                        
        }
        console.log("tmpFiltrados", tmpFiltrados);
        setArrayFiltrado(tmpFiltrados);

    }, [])

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

            <div className="row">
                <div className="col-sm-12">
                            {
                                arrayFiltrado && (
                                    arrayFiltrado.map((item, i)=>(
                                        <div className="col-md-3" key={"tarjeta" + i}> 
                                            <TarjetaPH item={item} />
                                        </div>
                                    ))
                                )
                            }
                </div>
            </div>
        </React.Fragment>
    );
}


export default PedagogHosp;
