import React from 'react';
import assets from '../data/config/config_m.json';
import dsPdfs from "../data/pdf.json";
const img = assets.img.desarrolloProfesional;
const img2 = assets.img.general;

var pdfs = dsPdfs[0];

const DesarrolloProfMovil = (props) => {

  return ( 
  //  <React.Fragment>        

<div>  
    
    <img className="titulos img-fluid" src={img + "titulo_desarrollo.png" } alt="Documentos educativos oficiales" />
    <br/><br/>
<div className="row">
    
        <div className="col-1 col-derecha">
                
        </div>
        <div  className="col-5   ">
            <figure>
                <img className="img-fluid hvr-pop cursos" id="cursos" src={img + "img_cursos.png" } data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Cursos" />
            </figure>
        </div>
        <div className="col-5  ">
            <figure>
                <img className="img-fluid hvr-pop" id="" src={img + "img_sitios.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}    onClick={props.handlerOpenCatalogWeb }  alt="Sitios" />
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
              <img className="img-fluid hvr-pop" id="videoteca" src={img + "img_videoteca.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Videoteca" />
            </figure>
        </div>
        <div className="col-5">
              <figure>
            <img className="img-fluid hvr-pop" id="" src={img + "img_referencias.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="refUtiles" data-infosource={0}   onClick={props.showModal}  alt="Referencias" />
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
              <img className="img-fluid hvr-pop" id="ficha" src={img + "img_otras.png"}  data-content= {pdfs.Tacaco }  data-typecontent ="pdf"  data-infosource={0}   onClick={props.handlerOpenCatalog}  alt="Otras ofertas" />
            </figure>
        </div>
        <div  className="col-3">
        </div>
</div>


<br/>
 
    <audio src="https://recursos.mep.go.cr/ws_faro/audios/desarrollo_profesional.mp3" id="desarrollo"   preload="true"  ></audio>
    <div class="row text-center">
        <div className=" col-12">
                <img data-tar="Home" onClick={props.changePage}   className="img-fluid hvr-pop"  src= {img2 + "btn_salir.png" }  alt="Salir" />
        </div>
    </div>
</div>  
   );
}
 
export default DesarrolloProfMovil;