import { IServices } from "./interface";

/**
 * Subsistema encargado de la gestión de guardado y carga de partidas.
 */
export class SaveSystem implements IServices {
  /**
   * Inicializa el sistema de guardado.
   */
  initialize(): void {
    console.log("initializing save system service");
  }

  /**
   * Cierra el sistema de guardado.
   */
  shutdown(): void {
    console.log("shutdowning save system service");
  }

  /**
   * Carga una partida desde un slot específico.
   * @param slot Número de slot (1-10).
   * @throws Error si el slot no es válido.
   */
  loadGame(slot: number): void {
    if (slot < 1 || slot > 10) {
      throw new Error("El slot no existe");
    }

    console.log(`Game loaded from the ${slot} slot`);
  }
}