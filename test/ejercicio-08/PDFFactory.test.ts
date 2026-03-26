import { describe, test, expect } from "vitest";
import { CrearReciboPDFFactory } from "../../src/ejercicio-08/PDFFactory";

describe("CrearReciboPDFFactory", () => {
  test("crea recibo pdf", () => {
    const factory = new CrearReciboPDFFactory();
    expect(factory.generarRecibo()).toBe("Recibo.pdf");
  });
});