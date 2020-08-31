import React from 'react';
import config from '../data/config/config.json';
const video = config.video;



function ContenidoModal(props) {
    var html;
    switch (props.opcionModal) {
        case "videoMinistra":
        html= (
            <iframe className="borde-video" title="video ministra" width="100%" height="200" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
            break;
        case "aprendoEnCasa":
            html = (
                <div className="row">
                    <div className="col-sm-3">
                        <a href="https://recursos.mep.go.cr/2020/aprendoencasa/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana1b.jpg" alt="Guía televisiva"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a href="https://aulavirtualabierta.mep.go.cr/curso/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana3b.jpg" alt="Guía de trabajo autónomo"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a href="http://www.ddc.mep.go.cr/estrategia-covid19/plantillas-aprendizajes-base-2020" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana2b.jpg" alt="Plantillas guía de aprendizaje base"></img>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="https://cajadeherramientas.mep.go.cr/faro_referencias/1_ref_portada/GTA_FIESTAS_PATRIAS.zip" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana5b.jpg" alt="Guías fiestas patrias 2020"></img>
                        </a>
                    </div>
                </div>
            )
            break;

        default:
            break;
    }


    return html;
}

export default ContenidoModal