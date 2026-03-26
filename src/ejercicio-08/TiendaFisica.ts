import { ProcesarPedido } from "./ProcesarPedido";
import { CrearReciboImpresoFactory } from "./ImpresoFactory";

/**
 * Procesador de pedidos para tienda física.
 */
export class TiendaFisica extends ProcesarPedido {
  /**
   * Crea un recibo impreso.
   */
  protected crearRecibo(): void {
    const factory = new CrearReciboImpresoFactory();
    this.recibo = factory.generarRecibo();
  }
}