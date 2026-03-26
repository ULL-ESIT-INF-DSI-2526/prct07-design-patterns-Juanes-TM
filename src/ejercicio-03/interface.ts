/**
 * Interfaz que define el contrato de las estrategias de cálculo de costes de envío.
 * Cada implementación representa una forma distinta de calcular el precio.
 */
export interface ICalculoViaje {
  /**
   * Calcula el coste del envío en función del peso y la distancia.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío.
   * @returns Coste total del envío.
   */
  calcular(peso: number, distancia: number): number;
}