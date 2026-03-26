import { describe, test, expect } from "vitest";
import { CrearReciboImpresoFactory } from "../../src/ejercicio-08/ImpresoFactory";

describe("CrearReciboImpresoFactory", () => {
  test("crea recibo impreso", () => {
    const factory = new CrearReciboImpresoFactory();
    expect(factory.generarRecibo()).toBe("Recibo impreso");
  });
});