import React from 'react';
import sitiosWeb from '../data/desarrollo/sitios.json'
import images from "../data/images.json";

var img = images[0];
//console.log(sitiosWeb);



const CatalogoWeb = (props) => {
    return ( 
        <React.Fragment>

    
            <nav className="nav nav-pills fixed-top nav-justified custom-nav">
            <a className="nav-item nav-link link-custom" href="#educativos">Sitios Educativos</a>
            <a className="nav-item nav-link link-custom" href="#web">Herramientas Web</a>
            <a className="nav-item nav-link link-custom" href="#apps">Apps Educativas</a>            
            <a className="nav-item nav-link link-custom" href="#estrategias">Estrategias de aprendizaje</a>            
            <a className="nav-item nav-link link-custom" href="#tmp"  onClick={props.handlerCloseCatalogWeb }> Volver</a>            
            </nav>
            <br/>  <br/>
        

            <div id="educativos">
            <div><img  alt="Recursos Digitales"  src={img.DesarrolloTituloRecursosDigitales}/></div>
                        {
                            sitiosWeb[0].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                <div className="row"> 
                                <div><img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/></div>
                                   <h6> <b> {item.nombre}</b></h6>
                                   </div>
                                    <p>  {item.desc}  </p>
                                    <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                    <hr/>  <hr/>
                                </div>
                            ) )
                         }
            </div>

            <div id="web">
                    <h4> Herramientas Web </h4> <br/>
                    <div><img  alt="Recursos Digitales"  src={img.DesarrolloTituloRecursosDigitales}/></div>
                    {
                           sitiosWeb[1].map((item, i) => (
                            <div className="tarjetas-web"  key={i} >
                            <div className="row"> 
                            <div><img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/></div>
                               <h6> <b> {item.nombre}</b></h6>
                               </div>
                                <p>  {item.desc}  </p>
                                <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                <hr/>  <hr/>
                            </div>
                            ) )
                         }

            </div>


        </React.Fragment>
     );
}
 
export default CatalogoWeb;