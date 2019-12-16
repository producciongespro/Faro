import React from 'react';
import sitiosWeb from '../data/desarrollo/sitios.json'
import images from "../data/images.json";
//import recursos from '../data/recursos/recursosPreescolar';

var img = images[0];
//console.log(sitiosWeb);



const CatalogoWeb = (props) => {
    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <img className="img-fluid"  alt="Recursos Digitales"  src={img.DesarrolloTituloRecursosDigitales}/>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><a className=" nav-link " href="#educativos">Sitios Educativos</a></li>
                    <li className="nav-item"><a className=" nav-link " href="#web">Herramientas Web</a></li>
                    <li className="nav-item"><a className=" nav-link " href="#apps">Apps Educativas</a></li>
                    <li className="nav-item"><a className=" nav-link " href="#estrategias">Estrategias de aprendizaje</a> </li>          
                    <li className="nav-item"><a className=" nav-link " href="#tmp"  onClick={props.handlerCloseCatalogWeb }> Volver</a></li>              
                </ul>
                </div>
            </nav>
             </div>
            </div>
            
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