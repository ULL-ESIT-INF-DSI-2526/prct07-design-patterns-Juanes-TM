import { describe, test, expect, vi } from "vitest";
import { TiendaApp } from "../../src/ejercicio-08/TiendaApp";

describe("TiendaApp", () => {
  test("genera recibo digital", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    new TiendaApp().procesar();

    expect(spy).toHaveBeenCalledWith("Recibo digital");

    spy.mockRestore();
  });
});