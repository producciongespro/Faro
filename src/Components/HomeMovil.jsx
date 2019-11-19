import React from 'react';

const HomeMovil = (props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1> Caja de Herramietnas</h1>
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