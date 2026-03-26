import { describe, test, expect, vi } from "vitest";
import { PhysicsEngine } from "../../src/ejercicio-05/PhysicsEngine";

describe("PhysicsEngine", () => {
  test("initialize y shutdown funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const p = new PhysicsEngine();

    p.initialize();
    p.shutdown();

    expect(spy).toHaveBeenCalledWith("initializing physics engine services");
    expect(spy).toHaveBeenCalledWith("shutdowning physics engine services");

    spy.mockRestore();
  });
});