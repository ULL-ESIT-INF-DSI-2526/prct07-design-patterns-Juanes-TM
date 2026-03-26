import { IServices } from "./interface";

/**
 * Subsistema encargado del renderizado gráfico del juego.
 */
export class GraphicsEngine implements IServices {
  /**
   * Inicializa el motor gráfico.
   */
  initialize(): void {
    console.log("initializing graphics engine services");
  }

  /**
   * Apaga el motor gráfico.
   */
  shutdown(): void {
    console.log("shutdowning graphics engine services");
  }
}