import { IRecibo } from "./interface";

/**
 * Clase abstracta que define el Factory Method para crear recibos.
 */
export abstract class CrearReciboFactory {
  /**
   * Método fábrica que deben implementar las subclases.
   */
  abstract crearRecibo(): IRecibo;

  /**
   * Genera el recibo utilizando el objeto creado.
   */
  generarRecibo(): string {
    const recibo = this.crearRecibo();
    return recibo.generate();
  }
}