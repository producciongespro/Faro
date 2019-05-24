import React from 'react';
import sitiosWeb from '../data/desarrollo/sitios.json'
import images from "../data/images.json";
//import recursos from '../data/recursos/recursosPreescolar';

var img = images[0];
//console.log(sitiosWeb);



const CatalogoWeb = (props) => {
    return ( 
        <React.Fragment>
            
            <div className="tit_rec_dig row"><img  alt="Recursos Digitales"  src={img.DesarrolloTituloRecursosDigitales}/></div>
            <nav id="inicio" className="nav nav-pills nav-justified  custom-nav">
            <a className="nav-item nav-link link-custom" href="#educativos">Sitios Educativos</a> <br/><br/><br/>
            <a className="nav-item nav-link link-custom" href="#web">Herramientas Web</a>
            <a className="nav-item nav-link link-custom" href="#apps">Apps Educativas</a>            
            <a className="nav-item nav-link link-custom" href="#estrategias">Estrategias de aprendizaje</a>            
            <a className="nav-item nav-link link-custom" href="#tmp"  onClick={props.handlerCloseCatalogWeb }> Volver</a>            
            </nav>
            <br/>  <br/>
    
        
            <div id="educativos">  <a href="#inicio">   <h4 className="tit-catalogo" > Sitios Educativos </h4> <br/> </a>    
                        {
                            sitiosWeb[0].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                
                                    <div className="row"> 

                                        <div className="col-1"> 
                                        <div>
                                            <img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-11">   
                                        <h6> <b> {item.nombre}</b></h6>
                                            <p className="text-catalogo">  {item.desc}  </p>
                                            <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                            <hr/>  <hr/>
                                        </div>

                                    </div>
                                </div>
                            ) )
                         }
            </div>

            <div id="web">   <a href="#inicio">    <h4 className="tit-catalogo"> Herramientas Web </h4> <br/> </a> 
                        {
                            sitiosWeb[1].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                
                                    <div className="row"> 

                                        <div className="col-1"> 
                                        <div>
                                            <img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-11">   
                                        <h6> <b> {item.nombre}</b></h6>
                                            <p className="text-catalogo">  {item.desc}  </p>
                                            <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                            <hr/>  <hr/>
                                        </div>

                                    </div>
                                </div>
                            ) )
                         }
            </div>

            <div id="apps">   <a href="#inicio">   <h4 className="tit-catalogo"> Apps Educativas </h4> <br/> </a>  
                        {
                            sitiosWeb[2].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                
                                    <div className="row"> 

                                        <div className="col-1"> 
                                        <div>
                                            <img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-11">   
                                        <h6> <b> {item.nombre}</b></h6>
                                            <p className="text-catalogo">  {item.desc}  </p>
                                            <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                            <hr/>  <hr/>
                                        </div>

                                    </div>
                                </div>
                            ) )
                         }
            </div>

            <div id="estrategias">  <a href="#inicio">      <h4 className="tit-catalogo"> Estrategias de aprendizaje</h4> <br/> </a>
                        {
                            sitiosWeb[3].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                
                                    <div className="row"> 

                                        <div className="col-1"> 
                                        <div>
                                            <img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-11">   
                                        <h6> <b> {item.nombre}</b></h6>
                                            <p className="text-catalogo">  {item.desc}  </p>
                                            <a href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
                                            <hr/>  <hr/>
                                        </div>

                                    </div>
                                </div>
                            ) )
                         }
            </div>

        </React.Fragment>
     );
}
 
export default CatalogoWeb;