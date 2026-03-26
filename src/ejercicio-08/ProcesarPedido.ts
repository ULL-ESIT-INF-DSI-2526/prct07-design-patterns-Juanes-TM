/**
 * Clase abstracta que define el flujo de procesamiento de un pedido.
 * Implementa el patrón Template Method.
 */
export abstract class ProcesarPedido {
  protected recibo: string = "";

  /**
   * Método plantilla que define el flujo del proceso.
   */
  public procesar(): void {
    this.recibo = "";

    this.validarPedido();
    this.cobrar();
    this.crearRecibo();
    this.mostrarRecibo();
  }

  /**
   * Valida el pedido.
   */
  private validarPedido(): void {
    console.log("Pedido validado");
  }

  /**
   * Cobra el pedido.
   */
  private cobrar(): void {
    console.log("Pedido cobrado");
  }

  /**
   * Método abstracto que delega la creación del recibo.
   */
  protected abstract crearRecibo(): void;

  /**
   * Muestra el recibo generado.
   */
  private mostrarRecibo(): void {
    console.log(this.recibo);
  }
}