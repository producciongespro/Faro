const analitica = (nombreCampo)=> {
    console.log("analítica-Sección seleccionada:", nombreCampo);    
       
    /*
    fetch('https://pruebacajav2.mep.go.cr/caja/registrar_ingreso.php', {
        method: 'POST',        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body:JSON.stringify({
                "campo":seccion                
            })
    }).then((res) => res.json())
    .then((data) =>  console.log("Respuesta del servidor:", data))
    .catch((err)=>console.log( "Error al intentar enviar datos:", err))
*/



    const data = { campo: nombreCampo };
    

fetch('https://pruebacajav2.mep.go.cr/caja/registrar_ingreso.php', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}


export default analitica;