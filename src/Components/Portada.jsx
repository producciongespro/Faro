import React from 'react';
//json:
import images from "../data/images.json";
import audios from "../data/audios";
import textos from "../data/textos";

const Portada = (props) => {
    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-12 text-center">
                <img src={images[0].TituloPortada   } className="img-fluid" alt="Título portada"/>
            </div>
        </div>
        <br/>
        <br/>    
            <div className="row" >
         
                    <div className="col-5 text-right">                        
                    <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos[0].VideoMinistro } className="img-fluid botones-portada"   src={images[0].BtnBienvenida} alt="Bienvenida"/>
                    </div>
                    <div className="col-2 ">                     
                   
                    </div>
                    <div className="col-5 text-left">                     
                    <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada " src={images[0].BtnIngresar} alt="Ingresar"/>
                    </div>
      
            </div>
        <div className="row">
     
        <div className="col-12 text-center pie-pagina">
           <br/>
        <br/>
        INSTITUTO DE DESARROLLO PROFESIONAL ULADISLAO GÁMEZ SOLANO - DIRECCIÓN DE RECURSOS TECNOLÓGICOS EN EDUCACIÓN - DIRECCIÓN DE DESARROLLO CURRICULAR
        </div>
       
        </div>
        </React.Fragment>
     );
}
 
export default Portada;