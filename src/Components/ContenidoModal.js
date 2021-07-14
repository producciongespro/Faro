import React from 'react';
import config from '../data/config/config.json';
import Creditos from './Creditos';

const video = config.video;
const imgHome = config.img.home;
//const imgGeneral = config.img.general;

function ContenidoModal(props) {
    //console.log("props.opcionModal", props.opcionModal );
    //console.log("infoModal", props.infoModal);

    var html;
    switch (props.opcionModal) {
        case "videoMinistra":
            html = (
                <iframe className="borde-video" title="video ministra" width="100%" height="400" src={video.ministra} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )
            break;
        case "politicasMEP":
            html = (
                <div>
                <div tabIndex="4" className="row text-center">
                    <div className="col-sm-4">
                        <a tabIndex="5" title="Política Educativa" href="https://www.mep.go.cr/sites/default/files/page/adjuntos/politicaeducativa.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/6__documen_educ/ch_btn_politicaeducativa.png" alt="Política Educativa"></img>
                        </a>
                    </div>

                    <div className="col-sm-4">
                        <a tabIndex="6" title="Política Curricular" href="https://www.mep.go.cr/sites/default/files/documentos/transf-curricular-v-academico-vf.pdf" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/6__documen_educ/ch_btn_politicacurricular.png" alt="Política Curricular"></img>
                        </a>
                    </div>

                    <div className="col-sm-4">
                        <a tabIndex="7" title="Política Educación para el Desarrollo Sostenible" href="http://cse.go.cr/politica-y-plan-de-accion-de-educacion-para-el-desarrollo-sostenible" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/6__documen_educ/ch_btn_politicadesarrollosost.png" alt="Política Educación para el Desarrollo Sostenible"></img>
                        </a>
                    </div>

                </div><br/>
                <div tabIndex="4" className="row text-center">
                    <div className="col-sm-4">
                        <a tabIndex="5" title="Política Educativa de Promoción de Idiomas" href="http://cse.go.cr/politica-educativa-para-la-promocion-de-idiomas#overlay-context=politica-educativa-para-la-promocion-de-idiomas" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/6__documen_educ/btn_pe_promocionidiomas-58.png" alt="Política Educativa"></img>
                        </a>
                    </div>

                    <div className="col-sm-4">

                    </div>

                    <div className="col-sm-4">

                    </div>

                </div>
                </div>
                )
            break;
        case "aprendoEnCasa":
            html = (
                <div>
                <div tabIndex="4" className="row">
                    <div className="col-sm-3">
                        <a tabIndex="5" title="Guía televisiva" href="https://recursos.mep.go.cr/2020/aprendoencasa/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana1b.jpg" alt="Guía televisiva"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a tabIndex="6" title="Guías de trabajo autonómo" href="https://aulavirtualabierta.mep.go.cr/curso/" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana3b.jpg" alt="Guía de trabajo autónomo"></img>
                        </a>
                    </div>

                    <div className="col-sm-3">
                        <a tabIndex="7" title="Plantillas de aprendizaje" href="https://ddc.mep.go.cr/estrategias-atencion-covid-19-pautas-anexosgta-y-pab" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana2b.jpg" alt="Plantillas guía de aprendizaje base"></img>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a tabIndex="8" title="Fiestas patrias" href="https://cajadeherramientas.mep.go.cr/faro_referencias/1_ref_portada/GTA_FIESTAS_PATRIAS.zip" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/ch_ web_ventana5b.jpg" alt="Guías fiestas patrias 2020"></img>
                        </a>
                    </div>
                </div>
                <div tabIndex="4" className="row">
                <div className="col-sm-3">
                        <a tabIndex="8" title="Fiestas patrias" href="https://ddc.mep.go.cr/estrategia-covid19/ii-semestre-curso-lectivo-2021" target="_blank" rel="noopener noreferrer">
                            <img className="img-fluid" src="https://cajadeherramientas.mep.go.cr/Faro/asset/img/1_portada/logo_regresar2.png" alt="Estrategia regresar"></img>
                        </a>
                    </div>
                    <div className="col-sm-9">

                    </div>
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
                        <a tabIndex="2" target="_blank" rel="noopener noreferrer"
                            href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_norma.aspx?param1=NRM&nValor1=1&nValor2=85815&nValor3=111107&strTipM=FN">
                            <i className="fas fa-link"></i> Enlace a la ficha del Decreto Ejecutivo 40862 (REA) (enlace que no varía con el tiempo)
                        </a>
                        <br />
                        <a tabIndex="3" target="_blank" rel="noopener noreferrer"
                            href="http://www.pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=85815">
                            <i className="fas fa-link"></i> Enlace al texto vigente del Decreto Ejecutivo 40862 (REA)
                      </a>
                    </div>
                </div>
            )
            break;
        case "indicaciones":
            html = (
                <div className="container borde-sencillo">
                    <div className="row">
                        <dov className="col-12">
                            <img className="img-fluid  modal-img-titulo" src={imgHome + "caja.png"} alt="fondo indicaciones" />
                        </dov>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>
                                Los recursos de esta caja de herramientas están organizados en seis categorías con el propósito de que usted pueda dirigirse a la sección más atinente a su necesidad de información.  Estas categorías son:
                        </p>
                            <ul>
                                <li>Apoyos para el clima del aula</li>
                                <li>Apoyos para la evaluación</li>
                                <li>Recursos didácticos</li>
                                <li>Documentos oficiales</li>
                                <li>Desarrollo profesional</li>
                                <li>Apoyos para el planeamiento</li>
                            </ul>
                            <p>
                                Para disponer de los distintos recursos, dé un clic a los diferentes accesorios que acompañan a la imagen de la educadora.  Cada uno de estos objetos representa una de las categorías.  <br />
                                Dentro de cada categoría encontrará una descripción de la sección, así como una serie de accesos a documentos, enlaces, plantillas, y otros materiales de utilidad para su quehacer docente.
                          Al colocar el puntero del mouse sobre cada acceso, podrá leer la descripción del recurso específico que se le está proveyendo. <br />
                                En las diferentes pantallas que acceda, dispondrá de botones que le permitirá retornar a la pantalla anterior o volver al menú principal.
              </p>
                        </div>
                    </div>
                </div>
            )
            break;
        case "usoCaja":
            html = (
                <iframe className="borde-video" title="video Uso de la Caja de Herramientas" width="100%" height="500" src={video.usoCajaHerramientas} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )
            break;
        case "opcIncidencias":
            html = (
                <div className="container  borde-sencillo-naranja p-5 ">
                    <div>
                        <img className="img-fluid  modal-img-titulo" src={imgHome + "btn_incidentes.png"} alt="fondo indicaciones" />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p>
                                En el siguiente correo puede enviar las consultas relcionadas con el uso de la Caja de herramientas. <br />
                                Es importante que en el correo indique la asignatura y el nivel (por ejemplo secundaria, primaria, entre otros).
                                </p>
                            <p>
                                Su consulta será remitido al área correspondiente
                                </p>
                            <a href="mailto:cajadeherramientas@mep.go.cr"> cajadeherramientas@mep.go.cr </a>
                        </div>
                    </div>

                </div>
            )
            break;
        case "creditos":
            html = (
                <Creditos />
            )
            break;
        default:
            break;
    }


    return html;
}

export default ContenidoModal