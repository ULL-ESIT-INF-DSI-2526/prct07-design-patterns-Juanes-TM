import { describe, test, expect, vi } from "vitest";
import { NetworkManager } from "../../src/ejercicio-05/NetworkManager";

describe("NetworkManager", () => {
  test("connect y disconnect funcionan", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const n = new NetworkManager();

    n.connect();
    n.disconnect();

    expect(spy).toHaveBeenCalledWith("Network manager connected");
    expect(spy).toHaveBeenCalledWith("Network manager disconnected");

    spy.mockRestore();
  });
});