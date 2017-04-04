var contador = 0
//disable textarea
function cuenta(){
      	document.forms[0].contador.value=document.forms[0].contenedor.value.length
      }


function clickLink() {
    contador++;
      if (contador == 1) {
          document.getElementById("clicks").innerHTML = contador;
      }
      else
      {
          document.getElementById("clicks").innerHTML = contador;
      }
}

function enviarMensaje(){
var tweet=document.getElementById("contenedorMensajes").value;
var remitente=document.getElementById("remitente").value;

console.log(tweet);
console.log(remitente);

}
