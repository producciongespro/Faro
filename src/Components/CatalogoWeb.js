import React, {useState} from 'react';
import images from "../data/images.json";
import filtrar from '../modulos/filtrar';

import config from '../data/config/config';
const imgGen = config.img.general;

var img = images[0];
//console.log(sitiosWeb);
var recursosWeb=null;
var subcategoriasODP=null;
var subCategoria=null;

const cargarRecursosWeb=()=>{
    recursosWeb = filtrar(JSON.parse(localStorage.getItem("arrayDesarrolloProfesional")), "id_tipo", "2");
    subcategoriasODP=  filtrar(JSON.parse(localStorage.getItem("subcategoriasODP")), "idOferta", "2");
    //console.log("recursosWeb",recursosWeb);    
    //console.log("subcategoriasODP",subcategoriasODP);
}



//Componente que renderiza recursos web para docentes
const CatalogoWeb = (props) => {
    const [recursosFiltrados, setRecursosFiltrados]= useState(false);

    cargarRecursosWeb();

    const handleObtenerSubcategoriga=(e)=>{
        subCategoria = e.target.value;
        setRecursosFiltrados(  filtrar(recursosWeb, "nombreCategoria", subCategoria )  )
    }

    return ( 
        <React.Fragment>
            <div className="row">
                <div id="titulo_recursosWeb" className="col-sm-12">
                    <img role="banner" tabIndex="1" alt="Banner de Recuros Digitales" className="img-fluid" src={img.DesarrolloTituloRecursosDigitales}/>                
                    <img role="button" tabIndex="5"  className="botones-portada hvr-pop img-fluid derecha btn-idp" id="btnVolver" onClick={props.handlerCloseCatalogWeb} onKeyPress={props.handlerCloseCatalogWeb} src={imgGen + "btn_volver.png"} alt="Regresar a Oferta de Desarrollo Profesional" />
             </div>
            </div>

            <div className="row">
                <div className="col-sm-6">                
                                <div className="input-group-prepend">
                                    <label tabIndex="2" alt="Título de subcategorías" className="input-group-text  etiquetas-busquedas" htmlFor="selSubCategoria">Subcategoría</label>
                                    <select tabIndex="3" alt="Seleccione un subcategoría"
                                    className="custom-select buscadores-materias" 
                                    id="selSubCategoria"
                                    onChange={handleObtenerSubcategoriga} >
                                    <option defaultValue value="" >Seleccione:</option>
                                            {
                                            subcategoriasODP.map((item, i) => (
                                                <option alt={item.nombreCategoria} key={"niveles" + i} value={item.nombreCategoria}> {item.nombreCategoria } </option>
                                            ))}
                                </select> 
                                </div>
                                             
                </div>
            </div>
            
            <div id="educativos">  
                    {subCategoria &&
                        <h4 tabIndex="4" alt={subCategoria} className="tit-catalogo" > {subCategoria} </h4> 
                    }                   
                    
                        {
                            recursosFiltrados && 
                            recursosFiltrados.map((item, i) => (
                                <div className="tarjetas-web"  key={i} >
                                
                                    <div className="row"> 

                                        <div className="col-1"> 
                                        <div>
                                            <img  alt="Desarrollo de otras ofertas" className="img_dec_sitio" src={img.DesarrolloDecSitios}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-11">   
                                        <h6 tabIndex="4" > <b> {item.nombre}</b></h6>
                                            <p tabIndex="4" className="text-catalogo">  {item.descripcion}  </p>
                                            <a tabIndex="4" title="Abre en una ventana nueva" href={item.url } className="link-card"  target="_blank" rel="noopener noreferrer" ><b>Visitar</b></a>
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