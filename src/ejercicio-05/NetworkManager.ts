/**
 * Subsistema encargado de la conexión de red.
 */
export class NetworkManager {
  /**
   * Establece la conexión de red.
   */
  connect(): void {
    console.log("Network manager connected");
  }

  /**
   * Cierra la conexión de red.
   */
  disconnect(): void {
    console.log("Network manager disconnected");
  }
}