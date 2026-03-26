import { IRecibo } from "./interface";

/**
 * Representa un recibo impreso.
 */
export class ReciboImpreso implements IRecibo {
  /**
   * Genera el recibo en formato físico.
   * @returns Texto del recibo.
   */
  generate(): string {
    return "Recibo impreso";
  }
}