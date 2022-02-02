/**
 * Se encarga de realizar las operaciones básicas de una calculadora.
 */
class Calculadora {

  /**
   * Se encarga de sumar dos valores seteados por parámetro.
   * 
   * @param {*} num1 Valor a sumar.
   * @param {*} num2 Valor a sumar.
   * @returns Suma de parámetros.
   */
  sumar(num1, num2) {
    return num1 + num2;
  }

  /**
   * Se encarga de restar dos valores seteados por parámetro.
   * 
   * @param {*} num1 Valor a restar.
   * @param {*} num2 Valor a restar.
   * @returns Resta de parámetros.
   */
  restar(num1, num2) {
    return num1 - num2;
  }

  /**
   * Se encarga de dividir dos números.
   *
   * @param {*} num1 Dividendo.
   * @param {*} num2 Divisor (debe ser distinto de 0 o null).
   * @returns División efectuada.
   */
  dividir(num1, num2) {
    return num1 / num2;
  }

  /**
   * Se encarga de multiplicar dos números.
   * @param {*} num1 Número a multiplicar.
   * @param {*} num2 Número a multiplicar.
   * @returns Valor de la multiplicación realizada.
   */
  multiplicar(num1, num2) {
    return num1 * num2;
  }
}