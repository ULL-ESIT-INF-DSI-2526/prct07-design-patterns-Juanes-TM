import { describe, test, expect } from "vitest";
import { CrearReciboDigitalFactory } from "../../src/ejercicio-08/DigitalFactory";

describe("CrearReciboDigitalFactory", () => {
  test("crea recibo digital", () => {
    const factory = new CrearReciboDigitalFactory();
    expect(factory.generarRecibo()).toBe("Recibo digital");
  });
});