import React from 'react';
import assets from '../data/config/config.json';


const img = assets.img.general;
console.log("img", img);


const DocumentosEvaluacion = (props) => {
    return ( 
    <div className="container">
        <div className="jumbotron">
            <h1>Documentos</h1>            
        </div>
        <div className="row">
            <div className="col-12 text-right">
                <img  onClick={props.handlerCerrarDocumentosEvaluacion} src={ img + "btn_volver.png" } alt="Botón volver" role="Button" />
            </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis qui libero facere ipsa, molestiae reprehenderit accusamus esse nulla suscipit, quod veniam minima! Soluta quae ad veritatis cum, saepe esse?
    </div> 
    );
}
 
export default DocumentosEvaluacion;