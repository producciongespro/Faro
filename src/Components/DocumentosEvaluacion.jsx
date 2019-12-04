import React from 'react';
import assets from '../data/config/config.json';
import config from '../data/config/config.json';

const serv = config.servidor;


const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general;


const DocumentosEvaluacion = (props) => {
    return (
        <div className="container">

            <div className="row">
                <div className="col-12  text-right alert alert-secondary">
                    <img className="bannerRecursos" src={img + "encabezado_documentos.png"} alt="Encabezado de Documentos de apoyo" />
                    <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={props.handlerCerrarDocumentosEvaluacion} src={imgGeneral + "btn_volver.png"} alt="Volver" />
                </div>
            </div>

            <div className="row col-12">
            <div className="col-3">            </div>

            <div className="col-sm-6">
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/evaluacion_diagnostica_2013.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Evaluación Diagnóstica 2013  </button> <br/>
                </a>
          
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/evaluacion_formativa_2013.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Evaluación Formativa 2013  </button> <br/>
                </a>
           
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/orientaciones_comites_de_evaluacion_2014.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Orientaciones para comités de evaluación 2014  </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/prueba_de_ejecucion_2014.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Prueba de Ejecución 2014  </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/prueba_oral_lenguas_extranjeras_2018.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Prueba oral de lenguas extranjeras 2018 </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/reglto_eva._decrt_ejec_40862-mep.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Registro de Evaluación Decreto ejecutivo 40862 </button> <br/>
                </a>


            <div className="col-3">            </div>
             </div>

            </div>

            </div>



    );
}

export default DocumentosEvaluacion;