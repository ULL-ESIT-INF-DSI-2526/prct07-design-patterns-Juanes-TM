import { IServices } from "./interface";

/**
 * Subsistema encargado de la simulación física.
 */
export class PhysicsEngine implements IServices {
  /**
   * Inicializa el motor de físicas.
   */
  initialize(): void {
    console.log("initializing physics engine services");
  }

  /**
   * Apaga el motor de físicas.
   */
  shutdown(): void {
    console.log("shutdowning physics engine services");
  }
}