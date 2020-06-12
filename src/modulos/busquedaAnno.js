
/*
Se hace una busqueda por año mediante expresion regular, debido a que un registro puede contenerer varios años
Por ejemplo: un recurso podría tener en el campo "ammo": "priemro, segundo, tercero"
*/


function busquedaAnno  (array, cadena ) {
let tmpArray=[];



    for (let index = 0; index < array.length; index++) {      
        
        let strAnno = array[index].anno
        let pattAnno = new RegExp( cadena  );
        let resAnno = pattAnno.test(strAnno);

        if (resAnno ) {
            tmpArray.push(array[index]);
        }        
    }    

    return tmpArray;
}


export default busquedaAnno