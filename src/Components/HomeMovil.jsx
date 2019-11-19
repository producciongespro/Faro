import React from 'react';

const HomeMovil = (props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                Caja de Herramietnas
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success"  data-tar="ApoyoClimaAula"  onClick={props.changePage} > Apoyos para el clima de aula </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success"   data-tar="ApoyosEvaluacion" onClick={props.changePage} > Apoyos para la evaluación </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn btn-success"  data-tar="RecursosDidacticos" onClick={props.changePage}> Recursos didácticos </button>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMovil;