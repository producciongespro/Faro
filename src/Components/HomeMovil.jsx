import React from 'react';
import textosJson from "../data/textos.json";
import assets from "../data/config/config_m.json";
const img  = assets.img.homeM;
const textos = textosJson[0];


//const img = assets.img.home;

const HomeMovil = (props) => {
    return (
        <div className="container">
            <div id="recuadroBlanco"></div>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="ApoyoClimaAula" src={ img + "climaAula.png" } onClick={props.changePage} alt="" /> 
                </div>
                <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="DocsOficiales" src={ img + "documentos.png"} onClick={props.changePage} alt=""/> 
                </div>
                <div className="col-1 text-center">
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="ApoyosEvaluacion" src={ img + "evaluacion.png" } onClick={props.changePage} alt=""/>

                </div>               
                <div className="col-1 text-center">
                </div>   
            <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="DesarrolloProf" src={ img + "desarrollo.png" } onClick={props.changePage} alt=""/>
                </div>
                <div className="col-1 text-center">
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="RecursosDidacticos" src={ img + "recursos.png" } onClick={props.changePage} alt=""/>
                </div>                
                <div className="col-1 text-center">
                </div>   
            <div className="col-4 text-center">
                    <img className="iconosMovil hvr-pop" data-tar="ApoyosPlan" src={ img + "planeamiento.png" }  onClick={props.changePage} alt=""/>

                </div>
                <div className="col-1 text-center">
                </div>
            </div>
          
            <br/>
            <div className=" text-center">
                <img className="btn img-fluid hvr-pop botonesNavegarMovil hvr-pop" id="indicaciones" src={ img + "btn_indicaciones.png" } onClick = {props.showModal }  data-typecontent ="help" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> 
                <img className="btn img-fluid hvr-pop botonesNavegarMovil hvr-pop" id="home"  src={ img + "volver_portada.png" } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
            </div>  
            <div className=" text-center">
                    <img className=" img-fluid hvr-pop botonesNavegarMovil hvr-pop " id="uso2" src={img + "btn_usocaja.png"} onClick = {props.showModal }  data-typecontent ="usoCaja" data-content= {textos.VideoUsoCaja}     alt="Uso de la caja de herramientas"/>
                        <img className="btn img-fluid hvr-pop botonesNavegarMovil hvr-pop " id="acercadeMovil" src={ img + "creditosMovil.png" } onClick = {props.showModal }  data-typecontent ="acercaDe" data-content= {textos.IndicacionesPortada}  alt="Acerca de" /> 
                        <a href="mailto:cajadeherramientas@mep.go.cr">    <img className="btn img-fluid hvr-pop" id="incidenciasMovil" src={ img + "incidencias.png" }   alt="correo de incidencias: cajadeherramientas@mep.go.cr" /></a>
            </div>
        </div>
    );
}

export default HomeMovil;