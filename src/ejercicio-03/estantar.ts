import { ICalculoViaje } from "./interface";

/**
 * Estrategia concreta para envíos estándar.
 * El coste depende únicamente del peso del paquete.
 */
export class ViajeEstandar implements ICalculoViaje {
  /**
   * Calcula el coste aplicando un recargo del 30% sobre el peso.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío (no utilizada).
   * @returns Coste del envío estándar.
   */
  calcular(peso: number, distancia: number): number {
    return peso * 1.3;
  }
}