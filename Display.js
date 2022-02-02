/**
 * Se encarga de construir y setear números, valores y resultados al display
 * de la calculadora.
 */
class Display {

  /**
   * Constructor de clase.
   * 
   * @param {*} displayValorAnterior Valor que anterior al que se va a setear.
   * @param {*} displayValorActual Valor actual con el que se va a operar.
   */
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos = {
      sumar: "+",
      dividir: "%",
      multiplicar: "x",
      restar: "-",
    };
  }

  /**
   * Se encarga de borrar el valor ingresado de uno en uno.
   */
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  /**
   * Borra todo lo que esté en el display.
   */
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }

  /**
   * 
   * @param {*} tipo 
   */
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.imprimirValores();
  }

  /**
   * Agrega el número clickeado al display.
   * 
   * @param {*} numero a agregar en el display.
   * @returns Impresión del número al display.
   */
  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return;
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  /**
   * Imprime los valores, números y operaciones en el display de la calculadora.
   */
  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  /**
   * Realiza la operación indicada por el usuario (Suma valor anterior con valor actual).
   * 
   * @returns null en caso que alguno de los valores no sea un número. 
   */
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}