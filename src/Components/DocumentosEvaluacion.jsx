import React from 'react';
import assets from '../data/config/config.json';


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


            <div className="row col-6">
                <a href="faro_referencias/4_ref_apoyos_eval/documentos/evaluacion_diagnostica_2013.pdf" rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > PRIMER DOCUMENTO  </button>
                </a>
            </div>

       

        </div>




    );
}

export default DocumentosEvaluacion;