import { describe, test, expect } from "vitest";
import { PDFExportadorFactory } from "../../src/ejercicio-01/pdfFactory";
import { PDFExportador } from "../../src/ejercicio-01/pdf";

describe("PDFExportadorFactory", () => {
  test("crea instancia correcta", () => {
    const factory = new PDFExportadorFactory();
    const exp = factory.crearExportador();
    expect(exp).toBeInstanceOf(PDFExportador);
  });
});