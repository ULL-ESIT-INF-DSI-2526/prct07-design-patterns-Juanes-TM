import { describe, test, expect, vi } from "vitest";
import { SaveSystem } from "../../src/ejercicio-05/SaveSystem";

describe("SaveSystem", () => {
  test("initialize y shutdown funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const s = new SaveSystem();

    s.initialize();
    s.shutdown();

    expect(spy).toHaveBeenCalledWith("initializing save system service");
    expect(spy).toHaveBeenCalledWith("shutdowning save system service");

    spy.mockRestore();
  });

  test("loadGame válido", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const s = new SaveSystem();

    s.loadGame(5);

    expect(spy).toHaveBeenCalledWith("Game loaded from the 5 slot");

    spy.mockRestore();
  });

  test("loadGame inválido lanza error", () => {
    const s = new SaveSystem();

    expect(() => s.loadGame(0)).toThrow("El slot no existe");
  });
});