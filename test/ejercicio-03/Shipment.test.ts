import { describe, test, expect, vi } from "vitest";
import { Shipment } from "../../src/ejercicio-03/Shipment";

describe("Shipment", () => {

  test("muestra los tres cálculos por consola", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const shipment = new Shipment();
    shipment.compare(10, 100);

    expect(spy).toHaveBeenCalledTimes(4); 

    expect(spy).toHaveBeenCalledWith("Precios según el tipo de envio:");
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Viaje estandar"));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Viaje urgente"));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Viaje internacional"));

    spy.mockRestore();
  });

  test("lanza error si peso o distancia son negativos", () => {
    const shipment = new Shipment();

    expect(() => shipment.compare(-10, -100)).toThrow(
      "La distancia y el peso no pueden ser negativos."
    );
  });

});