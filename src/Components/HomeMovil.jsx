import React from 'react';
import imagesJson from "../data/images.json";
import textosJson from "../data/textos.json";

const images = imagesJson[0];
const textos = textosJson[0];

const HomeMovil = (props) => {
    return (
        <div className="container">
            <div className="jumbotron text-center">
                <h1> Caja de Herramientas</h1>
                <img className="btn img-fluid hvr-pop" id="indicaciones" src={ images.HomeCaja } onClick = {props.showModal }  data-typecontent ="help" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> <br/>
                <img className="btn img-fluid hvr-pop" id="home"  src={ images.HomeVolver } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="ApoyoClimaAula" onClick={props.changePage} >
                        Apoyos para el clima de aula
                    </span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="ApoyosEvaluacion" onClick={props.changePage} >
                        Apoyos para la evaluación
                    </span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="RecursosDidacticos" onClick={props.changePage}>
                        Recursos didácticos
                    </span>
                </div>               
            </div>
            <br/>
            <div className="row">
            <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="DocsOficiales" onClick={props.changePage}>
                        Documentos educativos oficiales
                    </span>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="DesarrolloProf" onClick={props.changePage}>
                        Desarrollo profesional
                    </span>
                </div>                
            </div>
            <br/>
            <div className="row">
            <div className="col-12 text-center">
                    <span className="alert alert-success lg" data-tar="ApoyosPlan" onClick={props.changePage}>
                        Apoyo al planeamiento
                    </span>
                </div>
            </div>

        </div>
    );
}

export default HomeMovil;