import React from 'react';
import images from "../data/images.json";
//import textos from "../data/textos.json";
import dsPdfs from "../data/pdf.json";
import dsZip from "../data/comprimidos.json";
//import dsLinks from "../data/links.json";
var zipFiles = dsZip[0];
var pdfs = dsPdfs[0];
//links = dsLinks[0];


const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("evaluacion");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}


const ApoyosEvaluacion = (props) => {
  return ( 
    <React.Fragment>
      <div className="row">
  
                <div className="col-5">
                   
                      <div className="row">
  
                            <div className="col-12">
                              <img alt="Apoyos para la evaluación" className="img-fluid titulos" src={images[0].EvaluacionTitulo } />
                            </div>
                      </div>
                      <img  onClick={reproducirSonido}  className="descripciones3 img-fluid" src={images[0].GeneralCajaDescripcion} alt="Descripción" />
                     <div  onClick={ reproducirSonido  }  id="textoDescripcion" className="texto_descripciones text-justify pr-3">
                     <h2 className='desc'>Descripción:</h2>  {props.infoCategory}
                     </div>
              </div>
              <div className="botones_salir col-12">
            <img  data-tar="Home" onClick={props.changePage}   className="derecha btn img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
          </div>
                <div id="div-evaluacion" className="col-7 "><br/><br/>
                    <div className="row">
                      <div  className="col-12 col-sin-padding">
                        <figure>
                        <a href={zipFiles.tecnicas} rel="noopener noreferrer">
                          <img id="tecnicas" className="img-fluid btn hvr-pop evaluacion" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } alt="Técnicas"    src={images[0].EvaluacionLRubricas}  />
                        </a>
                        </figure>
                      </div>
                    </div>
                  
                  <div className="row">
                    <div  className="col-12 col-sin-padding"  >
                      <figure>
                      <a href={zipFiles.instrumentos} rel="noopener noreferrer">
                        <img id="instrumentos" className="img-fluid btn hvr-pop evaluacion" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut }  alt="Instrumentos" src={images[0].EvaluacionProceso}  />
                      </a>
                      </figure>
                    </div>
                  </div>
                      <div className="row">
                     <div className="col-12  col-sin-padding">
                      <figure>
                        <img id="documentos" className="img-fluid  btn hvr-pop evaluacion" data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={3} onMouseOver={props.onMouseOver}   onMouseOut={ props.onMouseOut } onClick={props.showModal} alt="Logros"  src={images[0].EvaluacionLogros} />
                      </figure>
                      </div>
                    </div>
  
                </div>
  
      </div>
  <div className="row botones-grandes">
    <div  className="col-3"  >

    </div>
    <div className="col-6 hover12" >
      <figure>
       
      </figure>
    </div>
    <div  className="col-3"  >

</div>

  </div>

        <audio src="https://recursos.mep.go.cr/ws_faro/audios/apoyos_evaluacion.mp3" id="evaluacion"   preload="true"  ></audio>



  </React.Fragment>
   );
}
 
export default ApoyosEvaluacion;