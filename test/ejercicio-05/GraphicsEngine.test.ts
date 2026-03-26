import { describe, test, expect, vi } from "vitest";
import { GraphicsEngine } from "../../src/ejercicio-05/GraphicsEngine";

describe("GraphicsEngine", () => {
  test("initialize y shutdown funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const g = new GraphicsEngine();

    g.initialize();
    g.shutdown();

    expect(spy).toHaveBeenCalledWith("initializing graphics engine services");
    expect(spy).toHaveBeenCalledWith("shutdowning graphics engine services");

    spy.mockRestore();
  });
});