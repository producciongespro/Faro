import React, {useState}  from 'react';
import textosJson from "../data/textos.json";
import assets from '../data/config/config.json';
import ModalBs from './ModalBs';

const textos = textosJson[0];
const img = assets.img.portada;
const imgGeneral = assets.img.general;

function Portada  (props)  {
    
    const [tituloModal, setTituloModal]= useState(false);    
    const [opcionModal, setOpcionModal ]= useState(null);        
    
    

    const handleAbriModal=(e)=>{
        console.log(e.target.dataset.typecontent  );        
        setTituloModal(e.target.title);
        setOpcionModal( e.target.dataset.typecontent );        
        
    }

    


  

  
    /**
     * Se inlcuye clase sr-only para mejor descripción de elemento en los lectores de pantalla
     */


    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <img 
                    tabIndex="1" 
                    id="img-portada" 
                    src={img + "titulo.png"  } 
                    className="img-fluid"
                     alt="Título portada Caja de herramientas para docentes, Ministerio de Educación Pública"/>
            </div>
        </div>
 
            <div className="row" >
         
                    <div className="col-4 text-right">                        
                    <img 
                        tabIndex="2" 
                        role="button"  
                        title="Bienvenida de la Ministra"   
                        onClick={handleAbriModal}
                        onKeyPress={handleAbriModal}
                        data-typecontent ="videoMinistra" 
                        data-content= {textos.VideoMinistro } 
                        className="img-fluid botones-portada hvr-pop"   
                        src={img + "btn_bienvenida.png"} />
                    </div>
                    <div className="col-4 text-center">                           
                        <img 
                            tabIndex="3"
                            role= "button"
                            id="btn-aprendo" 
                            title="Enlaces de aprendo en casa"
                            src={img + "aprendo-en-casa.png"  } 
                            className="img-fluid botones-portada  hvr-pop"                             
                            onClick={handleAbriModal}
                            onKeyPress={handleAbriModal}
                            data-typecontent ="aprendoEnCasa" 
                            />
                    </div>
                    <div className="col-4 text-left">                     
                        <img tabIndex="3" role="button" title="Ingresar a la caja de Herramientas"  data-tar="Home"  onClick={props.changePage} onKeyPress={props.changePage}   className="img-fluid botones-portada hvr-pop" src={img + "btn_ingresar.png"} />
                    </div>
      
            </div>
        <div className="row">
     
        <div tabIndex="4" className="col-12 text-center pie-pagina">
           <br/>
        <br/> 
      
        <span className="sr-only"> Direcciones participantes</span>
        DIRECCIÓN DE DESARROLLO CURRICULAR - DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO
        </div> <br/> <br/>  

        <div className="col-12 text-center">
        <a tabIndex="5" href="https://creativecommons.org/licenses/by-nc-sa/3.0/cr/" target="_blank" rel="noopener noreferrer"> <img id="img-licencia" src={imgGeneral + "licencia.png"  } className="img-fluid" alt="Licencia Creative"/></a>
        <br/> <br/>
        <p className="creative">Caja de Herramientas by Costa Rica.  Ministerio de Educación Pública. is licensed under a Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License. <br/>
        Creado a partir de la obra en https:cajadeherramientas.mep.go.cr <br/>  Puede hallar permisos más allá de los concedidos con esta licencia en https://www.mep.go.cr/educatico/cajadeherramientas
        </p>
        <p>ISBN: 978-9977-60-384-1</p>
        </div>
       
        </div>
        <ModalBs tituloModal={tituloModal} opcionModal={opcionModal} valor={valor}  />
        </React.Fragment>
        
     );
}
 
export default Portada;