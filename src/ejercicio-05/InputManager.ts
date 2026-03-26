import { IServices } from "./interface";

/**
 * Subsistema encargado de gestionar las entradas del usuario.
 */
export class InputManager implements IServices {
  /**
   * Inicializa el sistema de entrada.
   */
  initialize(): void {
    console.log("initializing input manager service");
  }

  /**
   * Detiene el sistema de entrada.
   */
  shutdown(): void {
    console.log("shutdowning input manager service");
  }
}