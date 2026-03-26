import { describe, test, expect, vi } from "vitest";
import { TiendaOnline } from "../../src/ejercicio-08/TiendaOnline";

describe("TiendaOnline", () => {
  test("genera recibo pdf", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    new TiendaOnline().procesar();

    expect(spy).toHaveBeenCalledWith("Recibo.pdf");

    spy.mockRestore();
  });
});