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
                    <img className="img-fluid"  alt="Recursos Digitales"  src={img.DesarrolloTituloRecursosDigitales}/>                
                    <img className="botones-portada hvr-pop img-fluid derecha btn-idp" id="btnVolver" onClick={props.handlerCloseCatalogWeb } src={imgGen + "btn_volver.png"} alt="Volver" />
             </div>
            </div>

            <div className="row">
                <div className="col-sm-6">                
                                <div className="input-group-prepend">
                                    <label className="input-group-text  etiquetas-busquedas" htmlFor="selSubCategoria">Subcategoría</label>
                                    <select 
                                    className="custom-select buscadores-materias" 
                                    id="selSubCategoria"
                                    onClick={handleObtenerSubcategoriga} >
                                    <option defaultValue value="" >Seleccione:</option>
                                            {
                                            subcategoriasODP.map((item, i) => (
                                                <option key={"niveles" + i} value={item.nombreCategoria}> {item.nombreCategoria } </option>
                                            ))}
                                </select> 
                                </div>
                                             
                </div>
            </div>
            
            <div id="educativos">  
                    {subCategoria &&
                        <h4 className="tit-catalogo" > {subCategoria} </h4> 
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
                                        <h6> <b> {item.nombre}</b></h6>
                                            <p className="text-catalogo">  {item.descripcion}  </p>
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