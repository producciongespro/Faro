import React, { Component } from 'react';
import "./css/master.css";

import fondosPantallas from "./data/fondos.json";


import Primera from "./Components/Primera";
import Oficiales from "./Components/Oficiales";
import PerfilDocente from "./Components/PerfilDocente";
import Splash from "./Components/Splash";



class App extends Component {

  

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "Portada",
      currentPage : <Splash />      
    };
    this.changePage = this.changePage.bind(this);    
    this.loadHome = this.loadHome.bind(this); 
    
    setTimeout(() => {
      this.loadHome();
    }, 1000);
 
  }


  loadHome ( ) {
    this.setState ({
      nameCurrentPage : "Portada",      
      currentPage : <Primera imgFondo = {fondosPantallas[0] }  changePage={this.changePage}   nameCurrentPage={this.state.nameCurrentPage}  />      
    });        
  }


  //Muestra la imagen con el texto en cada pantalla
  resaltado (e) {
    console.log("Hover desde " +  e.target.id);
    let tmp = document.getElementById(e.target.dataset.tar);
    console.log(tmp);   
    //tmp.className = "img-visible";    
    tmp.classList.remove("img-oculta");
    //tmp.classList.add("otherclass");
}



  changePage (e) { 
    e.preventDefault();     
    const targetPage = e.target.dataset.tar;    
    var tmpComponent;
    console.log("Target", targetPage );


    this.setState ({
      nameCurrentPage : targetPage      
    }) 

      
    switch (targetPage) {
        case "Portada":
          tmpComponent = <Primera changePage={this.changePage}  nameCurrentPage={this.state.nameCurrentPage} imgFondo={fondosPantallas[0]}  />
        break;
        case "Home":
        tmpComponent = <Primera changePage={this.changePage}  nameCurrentPage={this.state.nameCurrentPage} imgFondo={fondosPantallas[1] }   />
        break;
        case "Oficiales":
          tmpComponent = <Oficiales changePage={this.changePage}  nameCurrentPage={this.state.nameCurrentPage} imgFondo={fondosPantallas[2] }   />
        break;
        case "PerfilDocente":
        tmpComponent = <PerfilDocente changePage={this.changePage}   nameCurrentPage={this.state.nameCurrentPage}  />
        break;
        default:
          break;
      }   

      this.setState ({        
        currentPage : tmpComponent        
      }) 
      
      
     
  }
 

render() {  
    return (
      <div className="contenedor">    
        <div className="visor" >
             {this.state.currentPage}
        </div>        
      </div>
    );
  }






}

export default App;
