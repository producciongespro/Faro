import React from 'react';
import config from '../data/config/config.json';
const imgGeneral = config.img.general;


const Splash = (props) => {
  return ( 
        <div className="container bg-white mt-5 text-center">
        <br/><br/><br/>
          <div className="row ">     
              <div className="col-12 "  >
                  <img src={imgGeneral + "splash.jpg"} alt="Logo Caja de Herramientas" />              
              </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">
                  <img src={imgGeneral + "ajax_loader.gif"}  alt="Ajax Loader"/>
                  <br/>
                  Espere un momento por favor...   
            </div>
          </div>           
     
        </div>
   );
}
 
export default Splash;