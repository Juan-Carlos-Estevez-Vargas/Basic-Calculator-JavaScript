const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const display = new Display(displayValorAnterior, displayValorActual);

/**
 * Por cada botón perteneciente a un número agrega el valor o texto HTML en el display 
 * cada que se haga click en uno de ellos.
 */
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

/**
 * Por cada botón perteneciente a un operador se realiza el cálculo especificado en el
 * valor del botón.
 */
botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});