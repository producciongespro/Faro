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
            <button className="btn-outline text-center btn-documen "> Primer Documento  </button>
       </div>

              
       </div>

        
           
      
    );
}

export default DocumentosEvaluacion;