import React from 'react';
import images from "../data/images.json";
import dsPdfs from "../data/pdf.json";
import dsLinks from "../data/links.json";

var pdfs = dsPdfs[0],
links = dsLinks[0];

var img = images[0];


const  reproducirSonido = () => {
  console.log("Audio");
  
  var tmpAudio = document.getElementById("desarrollo");
  tmpAudio.currentTime = 0;
  tmpAudio.play();
}



const DesarrolloProfMovil = (props) => {

  return ( 
  //  <React.Fragment>        

<div>  
    
    <img className="titulos img-fluid" src={img.DesarrolloTitulo} alt="Documentos educativos oficiales" />
    <br/><br/>
<div className="row">
    
        <div className="col-1 col-derecha">
                
        </div>
        <div  className="col-5   ">
            <figure>
                <img className="img-fluid hvr-pop" id="" src={img.DesarrolloCursos} data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Cursos" />
            </figure>
        </div>
        <div className="col-5  ">
            <figure>
                <img className="img-fluid hvr-pop" id="" src={img.DesarrolloSitios}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}    onClick={props.handlerOpenCatalogWeb }  alt="Sitios" />
            </figure>
        </div>
        <div className="col-1 col-derecha">
            
        </div> 
</div> 
<div className="row">
        <div  className="col-1">
        </div>
        <div  className="col-5 ">
            <figure>
              <img className="img-fluid hvr-pop" id="" src={img.DesarrolloVideoteca}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Videoteca" />
            </figure>
        </div>
        <div className="col-5">
              <figure>
            <img className="img-fluid hvr-pop" id="" src={img.DesarrolloReferencias}  data-content= {pdfs.Tacaco }  data-typecontent ="refUtiles" data-infosource={0}   onClick={props.showModal}  alt="Referencias" />
            </figure>
        </div>
        <div className="col-1 col-derecha">
            
        </div> 
</div> 
<div className="row">
        <div  className="col-4">
        </div>
        <div  className="col-5 ">
            <figure>
              <img className="img-fluid hvr-pop" id="" src={img.DesarrolloOtras}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Otras ofertas" />
            </figure>
        </div>
        <div  className="col-3">
        </div>
</div>


<br/>
 
    <audio src="https://recursos.mep.go.cr/ws_faro/audios/desarrollo_profesional.mp3" id="desarrollo"   preload="true"  ></audio>
    <div class="row text-center">
        <div className=" col-12">
                <img  data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {images[0].BtnSalir }  alt="Salir" />
        </div>
    </div>
</div>  
   );
}
 
export default DesarrolloProfMovil;