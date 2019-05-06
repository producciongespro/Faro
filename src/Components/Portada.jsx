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
            
            <div className="row" >
                    <div className="col-6">                    
                        <img onClick = {props.showModal }  data-typecontent ="video" data-content= {textos[0].VideoMinistro } className="img-fluid botones-portada"   src={images[0].BtnBienvenida} alt="Bienvenida"/>
                    </div>
                    <div className="col-6 text-right">                        
                        <img  data-content= {audios[0].Portada }  data-typecontent ="audio"  onClick = {props.showModal }  className="img-fluid botones-portada " src={images[0].BtnAudio} alt="Audio"/>
                    </div>
            </div>
            <br/>
            <div className="row" >
                    <div className="col-6 ">                     
                        <img  data-content={textos[0].IndicacionesPortada  } data-typecontent="html"   onClick = {props.showModal }  className="img-fluid botones-portada" src={images[0].BtnIndicaciones } alt="Indicaciones"/>
                    </div>
                    <div className="col-6 text-right">                        
                        <img  data-tar="Home"  onClick={props.changePage}  className="img-fluid botones-portada " src={images[0].BtnIngresar} alt="Ingresar"/>
                    </div>
            </div>
     
        </React.Fragment>
     );
}
 
export default Portada;