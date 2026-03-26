/**
 * Interfaz que define el contrato de un recibo.
 */
export interface IRecibo {
  /**
   * Genera el contenido del recibo.
   * @returns Representación del recibo.
   */
  generate(): string;
}