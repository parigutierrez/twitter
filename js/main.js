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
