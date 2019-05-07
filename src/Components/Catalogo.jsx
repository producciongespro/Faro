import React from 'react';
import CardsImage from "../Comp-primitive/CardsImage.jsx";


const datos = [
    {
      urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
      title : "Montaña",
      desc :  "Es una bella montaña",
      urlWeb : "lo.com"
    },
    {
      urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
      title : "Montaña",
      desc :  "Es una bella montaña",
      urlWeb : "lo.com"
    },
    {
      urlImage : "https://www.ecestaticos.com/imagestatic/clipping/b05/b5b/b05b5bd1b9eec88c912908db22159143/las-misteriosas-montanas-africanas-en-las-que-se-produjo-el-genesis-de-la-vida.jpg",
      title : "Montaña",
      desc :  "Es una bella montaña",
      urlWeb : "lo.com"
    }

]





const Catalogo = () => {
    return (          
  <div className="row">  
 {
      datos.map( (dato, i) => {
        return (
          <CardsImage urlImage={dato.urlImage }     title={dato.title}  desc={dato.desc}   urlWeb={dato.urlImage} key={i} />
        )
})
}   

  </div>        
     );
}
 
export default Catalogo;