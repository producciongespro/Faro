import React, { Component } from 'react';
import BotonNavigation from "./BotonNavigation";

class Oficiales extends Component {

  render() {
    return (
      <div>
       

      <div  className="titulo" >
          <h1>Documentos Oficiales</h1>       
      </div>

      <img src="https://www.w3schools.com/tags/planets.gif" width="145" height="126" alt="Planets" useMap="#planetmap" />
      
        
      

      <map name="planetmap">
      <area data-tar="imgPerro"  id="areaSol"   onClick={this.prueba}  onMouseEnter={ this.resaltado} shape="rect" coords="0,0,82,126" alt="Sun" href="#"    / >
      <area  id="areaMercurio"  onClick={this.prueba}  onMouseEnter={this.resaltado}  shape="circle" coords="90,58,3" alt="Mercury" href="#"/>
      <area id="areaVenus" shape="circle" coords="124,58,8" alt="Venus"  onMouseEnter={this.resaltado} href="#"/>
      </map>

      <div >
          <img id="imgPerro" className="img-oculta" src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbdd.png" alt="Peroo" />
      </div>
      

      documentos importantes
      <BotonNavigation     navigation={this.props.changePage}  label="Inicio"  tar="Home"  />


      </div>
    );
  }
}

export default Oficiales;
