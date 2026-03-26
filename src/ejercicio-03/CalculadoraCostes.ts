import { ICalculoViaje } from "./interface";

/**
 * Contexto que utiliza una estrategia de cálculo de costes.
 * Permite cambiar dinámicamente el algoritmo de cálculo.
 */
export class CalculadoraCostes {
  /**
   * @param estrategia Estrategia inicial de cálculo.
   */
  constructor(private estrategia: ICalculoViaje) {}

  /**
   * Calcula el coste del envío delegando en la estrategia actual.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío.
   * @returns Coste calculado.
   */
  calcular(peso: number, distancia: number): number {
    return this.estrategia.calcular(peso, distancia);
  }

  /**
   * Cambia la estrategia de cálculo en tiempo de ejecución.
   * @param estrategia Nueva estrategia a utilizar.
   */
  setEstrategia(estrategia: ICalculoViaje): void {
    this.estrategia = estrategia;
  }
}