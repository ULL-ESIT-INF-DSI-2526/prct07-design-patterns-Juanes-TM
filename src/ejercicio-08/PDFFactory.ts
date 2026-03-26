import { IRecibo } from "./interface";
import { ReciboPDF } from "./ReciboPDF";
import { CrearReciboFactory } from "./factory";

/**
 * Factory concreta para crear recibos PDF.
 */
export class CrearReciboPDFFactory extends CrearReciboFactory {
  /**
   * Crea un recibo PDF.
   */
  crearRecibo(): IRecibo {
    return new ReciboPDF();
  }
}