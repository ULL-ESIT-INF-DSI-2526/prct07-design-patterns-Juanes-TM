import { ProcesarPedido } from "./ProcesarPedido";
import { CrearReciboDigitalFactory } from "./DigitalFactory";

/**
 * Procesador de pedidos para aplicación móvil.
 */
export class TiendaApp extends ProcesarPedido {
  /**
   * Crea un recibo digital.
   */
  protected crearRecibo(): void {
    const factory = new CrearReciboDigitalFactory();
    this.recibo = factory.generarRecibo();
  }
}