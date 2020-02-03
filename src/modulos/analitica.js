const analitica = (nombreCampo)=> {
    //console.log("analítica-Sección seleccionada:", nombreCampo);    
 
    const data = { campo: nombreCampo };
    

fetch('https://cajadeherramientas.mep.go.cr/caja/registrar_ingreso.php', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
  //console.log('Success:', data);
})
.catch((error) => {
  //console.error('Error:', error);
});
}


export default analitica;