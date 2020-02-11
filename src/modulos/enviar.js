const axios = require('axios');

function enviar(url, data) {

  console.log("data a enviar", data);
  

  axios.post(url, data)
    .then((response) => {
      console.log(response);
      alert(response.data.msj);
    }, (error) => {
      console.log(error);
      alert("Error al intentar enviar datos: " + error)
    });
}

export default enviar;