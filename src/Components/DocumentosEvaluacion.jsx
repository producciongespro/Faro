import React from 'react';
import assets from '../data/config/config.json';
import config from '../data/config/config.json';

const serv = config.servidor;
var plataformaUsada = sessionStorage.getItem('tipoPlataforma');
var bannerDocumentos;
const img = assets.img.apoyosEvaluacion;
const imgGeneral = assets.img.general;

 
const DocumentosEvaluacion = (props) => { 
    switch (plataformaUsada) {
    case "escritorio": 
            bannerDocumentos = "encabezado_documentos.png";              
        break;
        case "movil": 
            bannerDocumentos = "encabezado_documentosMovil.png";
        break;
        default:
            bannerDocumentos = "encabezado_documentos.png";
        break;
    }
    console.log("Banner: "+ bannerDocumentos);       
    return (
        <div className="container">

            <div className="row">
                <div className="col-12  text-right alert">
                    <img className="bannerRecursos" src={img + bannerDocumentos} alt="Encabezado de Documentos de apoyo" />
                    {
                            plataformaUsada === "movil" ?
                              ( 
                                  <img className="hvr-pop boton-volverMovil img-fluid" onClick={props.handlerCerrarDocumentosEvaluacion} src={imgGeneral + "btn_volver.png"} alt="Volver" />
                              )
                              :
                              (
                                  <img className="botones-portada hvr-pop boton-volver img-fluid derecha  " onClick={props.handlerCerrarDocumentosEvaluacion} src={imgGeneral + "btn_volver.png"} alt="Volver" />
                              )
                    }
                </div>
            </div>

            <div className="row">
            
            <div className="col-sm-6">
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/evaluacion_diagnostica_2013.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Evaluación diagnóstica</button> <br/>
                </a>
          
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/evaluacion_formativa_2013.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Evaluación formativa   </button> <br/>
                </a>
           
                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/orientaciones_comites_de_evaluacion_2014.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Orientaciones para comités de evaluación   </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/prueba_de_ejecucion_2014.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Prueba de ejecución   </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/prueba_oral_lenguas_extranjeras_2018.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Prueba oral de lenguas extranjeras </button> <br/>
                </a>

                <a href={serv + "faro_referencias/4_ref_apoyos_eval/documentos/reglto_eva._decrt_ejec_40862-mep.pdf"} target="_blank"  rel="noopener noreferrer">
                    <button className="Btn btn-lg btn-block text-center btn-documen " onMouseOver={props.onMouseOver} onMouseOut={ props.onMouseOut } data-typecontent ="pdf"  onClick={props.showModal} > Registro de evaluación </button> <br/>
                </a>
            
            <div className="col-3"> 
            <img className="dado-dec" src={img + "caja2.png"} alt="Imagen decorativa" />
           </div>

            </div>

            </div>

            </div>



    );
}

export default DocumentosEvaluacion;