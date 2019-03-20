import React, { Component } from 'react';
import "./css/master.css";

import Portada from "./Components/Portada";
import Header from "./Components/Header";
import Oficiales from "./Components/Oficiales";
import PerfilDocente from "./Components/PerfilDocente";
import Home from "./Components/Home";
import Splash from "./Components/Splash";



class App extends Component {

  constructor ( ) {
    super ();
    this.state = {
      nameCurrentPage : "splash",
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
      currentPage : <Home method={this.changePage}  />
    }) 
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


saludar ( ) { 
  
}


  changePage (e) {      
    const targetPage = e.target.dataset.tar;
    var tmpComponent;
      console.log(targetPage);
      
      switch (targetPage) {
        case "Home":
          tmpComponent = <Home changePage={this.changePage}  />
        break;
        case "Portada":
        tmpComponent = <Portada changePage={this.changePage} />
        break;
        case "Oficiales":
          tmpComponent = <Oficiales changePage={this.changePage} />
        break;
        case "PerfilDocente":
        tmpComponent = <PerfilDocente changePage={this.changePage} />
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
      <div className="container">
        <div className= "mt-2">
            <Header changePage={this.changePage}/>
        </div>

        <div className="visor" >
             {this.state.currentPage}
        </div>        
      </div>
    );
  }
}

export default App;
