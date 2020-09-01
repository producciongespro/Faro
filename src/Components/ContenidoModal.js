import React from 'react';
import config from '../data/config/config.json';
const video = config.video;



function ContenidoModal(props) {
    //console.log("props.opcionModal", props.opcionModal );
    //console.log("infoModal", props.infoModal);
    var html;
    switch (props.opcionModal) {
        case "videoMinistra":
        html= (
            <iframe className="borde-video" title="video ministra" width="100%" height="400" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
            break;
        case "aprendoEnCasa":
            html = (
                <div tabIndex="4" className="row">
                    <div className="col-sm-3">
                        <a tabIndex="4" title="Guía televisiva" href="https://recursos.mep.go.cr/2020/aprendoencasa/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana1b.jpg" alt="Guía televisiva"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a tabIndex="4" title="Guías de trabajo autonómo" href="https://aulavirtualabierta.mep.go.cr/curso/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana3b.jpg" alt="Guía de trabajo autónomo"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a tabIndex="4" title="Plantillas de aprendizaje" href="http://www.ddc.mep.go.cr/estrategia-covid19/plantillas-aprendizajes-base-2020" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana2b.jpg" alt="Plantillas guía de aprendizaje base"></img>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a tabIndex="4" title="Fiestas patrias" href="https://cajadeherramientas.mep.go.cr/faro_referencias/1_ref_portada/GTA_FIESTAS_PATRIAS.zip" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana5b.jpg" alt="Guías fiestas patrias 2020"></img>
                        </a>
                    </div>
                </div>
            )
            break;
                case "pdf":               
                    html = (
                        <embed src={props.infoModal + "#toolbar=1"} type='application/pdf' width='100%' height='100%'></embed>
                        )
               
                break;

            case "evaluacion":
                html = (
                    <div className="row">
                      <div className="col-sm-12">
                        <a  tabIndex="2" target="_blank" rel="noopener noreferrer"
                          href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_norma.aspx?param1=NRM&nValor1=1&nValor2=85815&nValor3=111107&strTipM=FN">
                          <i className="fas fa-link"></i> Enlace a la ficha del Decreto Ejecutivo 40862 (REA) (enlace que no varía con el tiempo)
                        </a>
                        <br />
                        <a   tabIndex="3"  target="_blank" rel="noopener noreferrer"
                          href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=85815">
                          <i className="fas fa-link"></i> Enlace al texto vigente del Decreto Ejecutivo 40862 (REA)
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