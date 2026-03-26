import { ICalculoViaje } from "./interface";

/**
 * Estrategia concreta para envíos urgentes.
 * El coste depende del peso y de la distancia.
 */
export class ViajeUrgente implements ICalculoViaje {
  /**
   * Calcula el coste combinando peso y distancia.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío.
   * @returns Coste del envío urgente.
   */
  calcular(peso: number, distancia: number): number {
    return peso * 1.3 + distancia * 0.5;
  }
}