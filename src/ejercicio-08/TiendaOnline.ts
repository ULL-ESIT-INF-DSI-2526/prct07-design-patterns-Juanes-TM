import { ProcesarPedido } from "./ProcesarPedido";
import { CrearReciboPDFFactory } from "./PDFFactory";

/**
 * Procesador de pedidos para tienda online.
 */
export class TiendaOnline extends ProcesarPedido {
  /**
   * Crea un recibo en PDF.
   */
  protected crearRecibo(): void {
    const factory = new CrearReciboPDFFactory();
    this.recibo = factory.generarRecibo();
  }
}