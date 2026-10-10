function saludar() {
let nombre = document.getElementById("nombre").value;
alert("bienvenido "+ nombre);
   
    
}

function oscuro(){
  document.body.style.backgroundColor = " #ff0000b0";
  document.body.style.color = "white";
}

function sumar() {
const n1 = parseInt(document.getElementById("n1").value);
const n2 = parseInt(document.getElementById("n2").value);

const suma = n1 + n2;
document.getElementById("resultado").value = suma;
}