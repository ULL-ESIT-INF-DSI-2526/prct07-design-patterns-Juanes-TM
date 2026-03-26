import { describe, test, expect } from "vitest";
import { CrearReciboImpresoFactory } from "../../src/ejercicio-08/ImpresoFactory";

describe("CrearReciboFactory (abstracto)", () => {
  test("usa método factory correctamente", () => {
    const factory = new CrearReciboImpresoFactory();
    expect(factory.generarRecibo()).toBe("Recibo impreso");
  });
});