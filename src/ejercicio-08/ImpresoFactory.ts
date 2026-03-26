import { IRecibo } from "./interface";
import { ReciboImpreso } from "./ReciboImpreso";
import { CrearReciboFactory } from "./factory";

/**
 * Factory concreta para crear recibos impresos.
 */
export class CrearReciboImpresoFactory extends CrearReciboFactory {
  /**
   * Crea un recibo impreso.
   */
  crearRecibo(): IRecibo {
    return new ReciboImpreso();
  }
}