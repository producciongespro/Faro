import React, { Component } from 'react';
//import BotonNavigation    from "./BotonNavigation";
//import fondoMAestra from "../img/maestra.jpg";


class Home extends Component {
  render() {
    return (
      <div>
       
        {
          console.log(this.props.imgFondo)          
        }
        <img src={this.props.imgFondo.url } alt = "Home" />

      </div>
    );
  }
}

export default Home;
