import { GraphicsEngine } from "./GraphicsEngine";
import { AudioEngine } from "./AudioEngine";
import { PhysicsEngine } from "./PhysicsEngine";
import { InputManager } from "./InputManager";
import { SaveSystem } from "./SaveSystem";
import { NetworkManager } from "./NetworkManager";

/**
 * Fachada que simplifica la inicialización, carga y cierre del videojuego.
 * Oculta la complejidad de los subsistemas internos.
 */
export class GameFacade {
  private graphics = new GraphicsEngine();
  private audio = new AudioEngine();
  private physics = new PhysicsEngine();
  private inputM = new InputManager();
  private save = new SaveSystem();
  private networkM = new NetworkManager();

  /**
   * Inicializa todos los subsistemas necesarios para iniciar el juego.
   */
  startGame(): void {
    this.graphics.initialize();
    this.audio.initialize();
    this.physics.initialize();
    this.inputM.initialize();
    this.save.initialize();
    this.networkM.connect();
  }

  /**
   * Inicializa el juego y carga una partida guardada.
   * @param slot Slot de guardado a cargar.
   */
  loadSavedGame(slot: number): void {
    this.startGame();
    this.save.loadGame(slot);
  }

  /**
   * Cierra todos los subsistemas en orden correcto.
   */
  shutdownGame(): void {
    this.networkM.disconnect();
    this.save.shutdown();
    this.inputM.shutdown();
    this.physics.shutdown();
    this.audio.shutdown();
    this.graphics.shutdown();
  }
}