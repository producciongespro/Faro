import React from 'react';
import imagesJson from "../data/images.json";
import textosJson from "../data/textos.json";

const images = imagesJson[0];
const textos = textosJson[0];

const HomeMovil = (props) => {
    return (
        <div className="container">
            <div id="recuadroBlanco"></div>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="ApoyoClimaAula" src={ images.GafasMovil } onClick={props.changePage} alt="" /> 
                </div>
                <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="ApoyosEvaluacion" src={ images.TabletMovil } onClick={props.changePage} alt=""/> 
                </div>
                <div className="col-1 text-center">
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="RecursosDidacticos" src={ images.LapiceroMovil } onClick={props.changePage} alt=""/>

                </div>               
                <div className="col-1 text-center">
                </div>   
            <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="DocsOficiales" src={ images.CelularMovil } onClick={props.changePage} alt=""/>
                </div>
                <div className="col-1 text-center">
                </div>
            </div>
            <br/>
            <div className="row">
            <div className="col-1 text-center">
                </div>
                <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="DesarrolloProf" src={ images.LaptopMovil } onClick={props.changePage} alt=""/>
                </div>                
                <div className="col-1 text-center">
                </div>   
            <div className="col-4 text-center">
                    <img className="iconosMovil" data-tar="ApoyosPlan" src={ images.BolsoMovil }  onClick={props.changePage} alt=""/>

                </div>
                <div className="col-1 text-center">
                </div>
            </div>
          
            <br/>
            <div className=" text-center">
                <img className="btn img-fluid hvr-pop botonesNavegarMovil" id="indicaciones" src={ images.HomeCajaMovil } onClick = {props.showModal }  data-typecontent ="help" data-content= {textos.IndicacionesPortada}  alt="Indicaciones" /> 
                <img className="btn img-fluid hvr-pop botonesNavegarMovil" id="home"  src={ images.HomeVolverMovil } data-tar="Portada"  onClick={props.changePage} alt="Volver a Portada" /><br/>
            </div>
            <br/>
            <div className="row">
            <div className="col-12 text-center">
            <img id="logoMovil" data-tar="" src={ images.Logo } alt="logo"/>
            </div>
            </div>
        </div>
    );
}

export default HomeMovil;