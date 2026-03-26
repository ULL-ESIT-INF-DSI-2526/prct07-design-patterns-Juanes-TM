import { describe, test, expect, vi } from "vitest";
import { AudioEngine } from "../../src/ejercicio-05/AudioEngine";

describe("AudioEngine", () => {
  test("initialize y shutdown funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const a = new AudioEngine();

    a.initialize();
    a.shutdown();

    expect(spy).toHaveBeenCalledWith("initializing audio engine services");
    expect(spy).toHaveBeenCalledWith("shutdowning audio engine services");

    spy.mockRestore();
  });
});