import { ICalculoViaje } from "./interface";

/**
 * Estrategia concreta para envíos internacionales.
 * Incluye un coste adicional por gestión aduanera.
 */
export class ViajeInternacional implements ICalculoViaje {
  /**
   * Calcula el coste incluyendo peso, distancia y recargo adicional.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío.
   * @returns Coste del envío internacional.
   */
  calcular(peso: number, distancia: number): number {
    return peso * 1.3 + distancia * 0.5 + peso * 1.2;
  }
}