import React from 'react';
import CardsImage from "../Comp-primitive/CardsImage.jsx";


const datos = [
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
    }

]


var cont = 0;
var limite = 4;

var sllicedArray = datos.slice(cont, cont + limite );


const Catalogo = () => {
    return ( 
      
      <React.Fragment>
  <div className="row"> 
    
 {
      sllicedArray.map( (dato, i) => {
        return (
          <CardsImage urlImage={dato.urlImage }     title={dato.title}  desc={dato.desc}   urlWeb={dato.urlImage} key={i} />
        )
})
}  
      
    </div> 
    
    <div className="row">
  <button className="btn btn-success">siguiente</button>

    </div>
    </React.Fragment>
    
     );
}
 
export default Catalogo;