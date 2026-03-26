import { describe, test, expect, vi } from "vitest";
import { GameFacade } from "../../src/ejercicio-05/GameFacade";
import { GraphicsEngine } from "../../src/ejercicio-05/GraphicsEngine";
import { AudioEngine } from "../../src/ejercicio-05/AudioEngine";
import { PhysicsEngine } from "../../src/ejercicio-05/PhysicsEngine";
import { InputManager } from "../../src/ejercicio-05/InputManager";
import { SaveSystem } from "../../src/ejercicio-05/SaveSystem";
import { NetworkManager } from "../../src/ejercicio-05/NetworkManager";

describe("GameFacade", () => {

  test("startGame inicializa todos los subsistemas", () => {
    const spyGraphics = vi.spyOn(GraphicsEngine.prototype, "initialize");
    const spyAudio = vi.spyOn(AudioEngine.prototype, "initialize");
    const spyPhysics = vi.spyOn(PhysicsEngine.prototype, "initialize");
    const spyInput = vi.spyOn(InputManager.prototype, "initialize");
    const spySave = vi.spyOn(SaveSystem.prototype, "initialize");
    const spyNetwork = vi.spyOn(NetworkManager.prototype, "connect");

    const facade = new GameFacade();
    facade.startGame();

    expect(spyGraphics).toHaveBeenCalled();
    expect(spyAudio).toHaveBeenCalled();
    expect(spyPhysics).toHaveBeenCalled();
    expect(spyInput).toHaveBeenCalled();
    expect(spySave).toHaveBeenCalled();
    expect(spyNetwork).toHaveBeenCalled();
  });

  test("loadSavedGame inicializa y carga partida", () => {
    const spyLoad = vi.spyOn(SaveSystem.prototype, "loadGame");

    const facade = new GameFacade();
    facade.loadSavedGame(3);

    expect(spyLoad).toHaveBeenCalledWith(3);
  });

  test("shutdownGame cierra todos los subsistemas", () => {
    const spyGraphics = vi.spyOn(GraphicsEngine.prototype, "shutdown");
    const spyAudio = vi.spyOn(AudioEngine.prototype, "shutdown");
    const spyPhysics = vi.spyOn(PhysicsEngine.prototype, "shutdown");
    const spyInput = vi.spyOn(InputManager.prototype, "shutdown");
    const spySave = vi.spyOn(SaveSystem.prototype, "shutdown");
    const spyNetwork = vi.spyOn(NetworkManager.prototype, "disconnect");

    const facade = new GameFacade();
    facade.shutdownGame();

    expect(spyNetwork).toHaveBeenCalled();
    expect(spySave).toHaveBeenCalled();
    expect(spyInput).toHaveBeenCalled();
    expect(spyPhysics).toHaveBeenCalled();
    expect(spyAudio).toHaveBeenCalled();
    expect(spyGraphics).toHaveBeenCalled();
  });

});