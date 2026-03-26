import { IServices } from "./interface";

/**
 * Subsistema encargado del audio del juego.
 */
export class AudioEngine implements IServices {
  /**
   * Inicializa el sistema de audio.
   */
  initialize(): void {
    console.log("initializing audio engine services");
  }

  /**
   * Apaga el sistema de audio.
   */
  shutdown(): void {
    console.log("shutdowning audio engine services");
  }
}