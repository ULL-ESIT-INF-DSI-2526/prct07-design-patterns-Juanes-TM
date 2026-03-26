import { IRecibo } from "./interface";
import { ReciboDigital } from "./ReciboDigital";
import { CrearReciboFactory } from "./factory";

/**
 * Factory concreta para crear recibos digitales.
 */
export class CrearReciboDigitalFactory extends CrearReciboFactory {
  /**
   * Crea un recibo digital.
   */
  crearRecibo(): IRecibo {
    return new ReciboDigital();
  }
}