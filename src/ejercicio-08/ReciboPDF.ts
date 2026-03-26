import { IRecibo } from "./interface";

/**
 * Representa un recibo en formato PDF.
 */
export class ReciboPDF implements IRecibo {
  /**
   * Genera el recibo en formato PDF.
   * @returns Texto del recibo.
   */
  generate(): string {
    return "Recibo.pdf";
  }
}