import React, { Component } from 'react';
import CardsImage from "../Comp-primitive/CardsImage.jsx";


class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            indice : 0,
            limite : 4
         }
    }


datos = [
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 0 ",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 1",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 2 ",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 3",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 4",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 5",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
          urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
          title : "Montaña 6",
          desc :  "Es una bella montaña",
          urlWeb : "lo.com"
        },
        {
            urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
            title : "Montaña 7",
            desc :  "Es una bella montaña",
            urlWeb : "lo.com"
          },
          {
            urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
            title : "Montaña 8",
            desc :  "Es una bella montaña",
            urlWeb : "lo.com"
          },
          {
            urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
            title : "Montaña 9",
            desc :  "Es una bella montaña",
            urlWeb : "lo.com"
          },
          {
            urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
            title : "Montaña 10",
            desc :  "Es una bella montaña",
            urlWeb : "lo.com"
          }
    
    ]


    cargarArray () {
        return this.datos.slice(  this.state.indice, this.state.indice + this.state.limite );
    }

    incrementarIndice = () => {
        //Aumenta el indice para cargar los demás objetos del array
        this.setState({
            indice : this.state.indice + 4
        })
    }



    render() { 
        let tmpArray = this.cargarArray();
        return ( 
            <React.Fragment>
            <div className="row"> 
              
           {
               
               tmpArray.map( (dato, i) => {
                  return (
                    <CardsImage urlImage={dato.urlImage }     title={dato.title}  desc={dato.desc}   urlWeb={dato.urlImage} key={i} />
                  )
          })
          }  
                
              </div> 
              
              <div className="row">
            <button className="btn btn-success"   onClick={this.incrementarIndice} >siguiente</button>
               </div>

               

              </React.Fragment>
         );
    }
}
 
export default Catalogo;

