import React from 'react';
import sitiosWeb from '../data/desarrollo/sitios.json'

//console.log(sitiosWeb);



const CatalogoWeb = (props) => {
    return ( 
        <React.Fragment>
            <nav className="nav nav-pills fixed-top nav-justified custom-nav">
            <a className="nav-item nav-link ink-custom" href="#educativos">Sitios Educativos</a>
            <a className="nav-item nav-link ink-custom" href="#web">Herramientas Web</a>
            <a className="nav-item nav-link ink-custom" href="#apps">Apps Educativas</a>            
            <a className="nav-item nav-link ink-custom" href="#estrategias">Estrategias de aprendizaje</a>            
            <a className="nav-item nav-link ink-custom" href="#tmp"  onClick={props.handlerCloseCatalogWeb }  >Volver</a>            
            </nav>
            <br/>

            <div id="educativos">
                       <h4> Sitios Educativos </h4> <br/>
                        {
                            sitiosWeb[0].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                    <p>  {item.nombre}  </p>
                                    <p>  {item.desc}  </p>
                                    <p>  <a href={item.url} target="_blank" rel="noopener noreferrer"> {item.url} </a>      </p>
                                </div>
                            ) )
                         }
            </div>

            <div id="web">
                    <h4> Herramientas Web </h4> <br/>
                    {
                            sitiosWeb[1].map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                    <p>  {item.nombre}  </p>
                                    <p>  {item.desc}  </p>
                                    <p>  <a href={item.url} target="_blank" rel="noopener noreferrer"> {item.url} </a>      </p>
                                </div>
                            ) )
                         }

            </div>


        </React.Fragment>
     );
}
 
export default CatalogoWeb;