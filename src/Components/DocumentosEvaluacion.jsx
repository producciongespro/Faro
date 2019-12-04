import React from 'react';
import assets from '../data/config/config.json';


const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general;

console.log("img", img);


const DocumentosEvaluacion = (props) => {
    return ( 
    <div className="container">
            <div className="row">
                <div className="col-12  text-right alert alert-secondary">
                    <img className="bannerRecursos" src={ img + "encabezado_documentos.png"}  alt="Encabezado de Documentos de apoyo" />
                    <img className="botones-portada hvr-pop img-fluid derecha  boton-volver" onClick={props.handlerCerrarDocumentosEvaluacion} src={ imgGeneral + "btn_volver.png" } alt="Volver" />
                </div>
            </div>


        <div className="row">
            
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis qui libero facere ipsa, molestiae reprehenderit accusamus esse nulla suscipit, quod veniam minima! Soluta quae ad veritatis cum, saepe esse?
    </div> 
    );
}
 
export default DocumentosEvaluacion;