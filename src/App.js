import React, { Component } from 'react';
import "./css/master.css";

import fondosPantallas from "./data/fondos.json";
//Componentes
import Primera from "./Components/Primera";
import Splash from "./Components/Splash";




class App extends Component {

  

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "Portada",
      currentPage : <Splash  urlImage={fondosPantallas[0].logoFaro }  />      
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
      currentPage : <Primera imgFondo = {fondosPantallas[0].Portada}  changePage={this.changePage}   nameCurrentPage={this.state.nameCurrentPage}  />      
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
    console.log("Target", targetPage );

    this.setState({ 
      nameCurrentPage: targetPage      
    }, () => {
       //console.log(this.state.valor) => 1
       console.log( "Página actual", this.state.nameCurrentPage );
       this.setState (
         {
          currentPage:  <Primera changePage={this.changePage}  nameCurrentPage={this.state.nameCurrentPage} imgFondo={fondosPantallas[0][targetPage] }  />
         }
       )
    });     
     
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
