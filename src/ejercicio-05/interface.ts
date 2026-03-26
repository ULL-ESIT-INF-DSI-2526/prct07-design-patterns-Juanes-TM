/**
 * Define la interfaz común para los subsistemas del juego.
 * Cada servicio debe poder inicializarse y cerrarse.
 */
export interface IServices {
  /**
   * Inicializa el servicio.
   */
  initialize(): void;

  /**
   * Cierra el servicio de forma controlada.
   */
  shutdown(): void;
}