import { describe, test, expect, vi } from "vitest";
import { TiendaFisica } from "../../src/ejercicio-08/TiendaFisica";

describe("ProcesarPedido", () => {

  test("ejecuta el flujo completo", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    new TiendaFisica().procesar();

    expect(spy).toHaveBeenCalledWith("Pedido validado");
    expect(spy).toHaveBeenCalledWith("Pedido cobrado");
    expect(spy).toHaveBeenCalledWith("Recibo impreso");

    spy.mockRestore();
  });

});