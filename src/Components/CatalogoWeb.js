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
            <a className="nav-item nav-link link-custom" href="#tmp"  onClick={props.handlerCloseCatalogWeb }  >Volver</a>            
            </nav>
            <br/>

            <div id="educativos">
                       <h4> Sitios Educativos </h4> <br/>
                        {
                            sitiosWeb[0].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                <div className="row"> 
                                <div><img alt="Desarrollo de otras ofertas" className="img_circ" src={img.DesarrolloDecSitios}/></div>
                                   <h6> {item.nombre} </h6>
                                   </div>
                                    <p>  {item.desc}  </p>
                                    <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" > > Visitar </a>
                                    <hr/>
                                </div>
                            ) )
                         }
            </div>

            <div id="web">
                    <h4> Herramientas Web </h4> <br/>
                    {
                            sitiosWeb[1].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                    <h6> &#8605; {item.nombre} </h6>
                                    <p>  {item.desc}  </p>
                                    <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" > > Visitar </a>
                                    <hr/>
                                </div>
                            ) )
                         }

            </div>


        </React.Fragment>
     );
}
 
export default CatalogoWeb;