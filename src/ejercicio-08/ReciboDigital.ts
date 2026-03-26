import { IRecibo } from "./interface";

/**
 * Representa un recibo digital.
 */
export class ReciboDigital implements IRecibo {
  /**
   * Genera el recibo digital.
   * @returns Texto del recibo.
   */
  generate(): string {
    return "Recibo digital";
  }
}