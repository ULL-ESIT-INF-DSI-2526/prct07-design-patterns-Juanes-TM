import { describe, test, expect, vi } from "vitest";
import { InputManager } from "../../src/ejercicio-05/InputManager";

describe("InputManager", () => {
  test("initialize y shutdown funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const i = new InputManager();

    i.initialize();
    i.shutdown();

    expect(spy).toHaveBeenCalledWith("initializing input manager service");
    expect(spy).toHaveBeenCalledWith("shutdowning input manager service");

    spy.mockRestore();
  });
});