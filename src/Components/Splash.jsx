import React from 'react';

const Splash = (props) => {
  return ( 
        <div className="container bg-white mt-5 text-center">
        <br/><br/><br/>
          <div className="row ">     
              <div className="col-12 "  >
                  <img src={props.urlImage} alt="Logo Faro" />              
              </div>
          </div>
          <br/> 
          <div className="row">
            <div className="col-12">
                  <img src="https://recursos.mep.go.cr/ws_faro/generales/ajax_loader.gif" alt="Ajax Loader"/>
                  <br/>
                  Espere un momento por favor...   
            </div>
          </div>           
     
        </div>
   );
}
 
export default Splash;