import React, { useState, useEffect } from 'react';
import TarjetaPH from '../Components/TarjetaPH';
import config from '../data/config/config.json';
import jsonp from '../TMP_pedago_hosp.json';
import busquedaAnno from '../modulos/busquedaAnno';
const imgGenerales = config.img.general;
const img = config.img.recursosDidacticos;


//Array foiltrado por el nivel 6
var arrayMaster = [];


function PedagogHosp(props) {
    const [arrayFiltrado, setArrayFiltrado] = useState(null);
    const [asignatura, setAsignatura] = useState("Todos");
    const [anno, setAnno] = useState("Todos");

    useEffect(() => {
        let recursosDidacticos = JSON.parse(localStorage.getItem("arrayRecursos"));
        console.log(recursosDidacticos);
        //filtrado por el nivel pedagogía hospitalaria que es es registro 6 en la tabla niveles
        // se carga el arrayMaster *****************************************************************
        for (let index = 0; index < recursosDidacticos.length; index++) {
            if (parseInt(recursosDidacticos[index].id_nivel) === 6) {
                arrayMaster.push(recursosDidacticos[index])
            }
        }
        //REnderizado de tarjetas ******************        
        buscarRegistros();
    }, []);

    useEffect(() => {
        //Cuando cambia el estado: asignatura o el anno
        console.log("Asignatura:", asignatura);
        console.log("Año:", anno);
       buscarRegistros();
    }, [asignatura, anno])




    const handleObtenerAsignatura = (e) => {
        setAsignatura(e.target.value)
    }

    const handleObtenerAnno = (e) => {
        setAnno(e.target.value)
    }

    const buscarRegistros = () => {
        //--------------Buscar regsitros filtrados por año y por asignatura ------------------------

        var tmpArray = [];
        
        //Caso 1: Cuando año y asigntarua es TODOS
        if (anno === "Todos" && asignatura === "Todos") {
            console.log("TODOS los REGISTRO", arrayMaster);                      
            tmpArray = arrayMaster;

        } else {
            console.log("NO TODOS");            
            //Caso 2: Cuando año == Todos            
            if (anno === "Todos" && asignatura !== "Todos" ) {
                console.log("Año = TODOS");            
                for (let index = 0; index < arrayMaster.length; index++) {
                    if (asignatura === arrayMaster[index].materia) {
                        tmpArray.push(arrayMaster[index])
                    }
                }
            }
            // Caso 3 asignatura = Todos
            if (asignatura === "Todos" && anno !== "Todos") {
                console.log("Asignatura = TODOS");
                //Utiliza espresiones regulares debido a que pueden ser varios años                 
                tmpArray= busquedaAnno(arrayMaster, anno);                
            }

            //Caso 4 cuando ni año ni asignatura son "TODOS"
            if (asignatura !== "Todos" && anno !== "Todos") {
                console.log("diferente de TODOS");            
                
                //PRIMER PASO: Busca la asignatura y la carga en el arreglo temporal
                for (let index = 0; index < arrayMaster.length; index++) {
                    if (asignatura === arrayMaster[index].materia) {
                        tmpArray.push(arrayMaster[index])
                    }
                }

                //SEGUNDO PPASO: en el arreglo temporal busca la coincidencia del año
                //Utiliza espresiones regulares debido a que pueden ser varios años
                tmpArray =  busquedaAnno(tmpArray, anno)
            }
        }
        setArrayFiltrado(tmpArray);
    }

    /*
    
        const handleBuscarPorAsignatura=(e)=> {
            let asignatura = e.target.value;
            //Limpia el array
            arrayPorAsignatura= [];
            console.log(asignatura);
            for (let index = 0; index < arrayMaster.length; index++) {
             if (asignatura === arrayMaster[index].materia) {
                arrayPorAsignatura.push(arrayMaster[index])
             }               
            }   
            setArrayFiltrado(arrayPorAsignatura);    
        }
    
    
        const handleBuscarPorAnno=(e)=> {
            let anno = e.target.value;
            console.log(anno);
            setArrayFiltrado( busquedaAnno(arrayPorAsignatura, anno)  );
        }
    
    */

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
                            <label className="input-group-text" htmlFor="selAsignatura">Asignatura</label>
                        </div>
                        <select
                            className="custom-select"
                            id="selAsignatura"
                            onChange={handleObtenerAsignatura}
                        >
                            <option defaultValue value="Todos">Todos</option>
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
                            <label className="input-group-text" htmlFor="selAnno">Año</label>
                        </div>
                        <select
                            className="custom-select"
                            id="selAnno"
                            onChange={handleObtenerAnno}
                        >
                            <option defaultValue value="Todos">Todos</option>
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
                        { arrayFiltrado &&
                            (
                            <p>
                                <strong>{arrayFiltrado.length}</strong> Recurso(s) enconstrado(s) con 
                                la asignatura <strong>{asignatura}</strong> para el año <strong>{anno}</strong>.
                            </p>
                            )
                              
                        }
                    
                </div>
            </div>


            <div className="row">               
                {
                    arrayFiltrado && (
                        arrayFiltrado.map((item, i) => (
                            <div className="col-md-3" key={"tarjeta" + i}>
                                <TarjetaPH item={item} />
                            </div>
                        ))
                    )
                }
            </div>
        </React.Fragment>
    );
}


export default PedagogHosp;
