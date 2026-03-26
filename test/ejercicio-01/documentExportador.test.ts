import { describe, test, expect } from "vitest";
import { DocumentExportador } from "../../src/ejercicio-01/documentExportador";
import { PDFExportadorFactory } from "../../src/ejercicio-01/pdfFactory";

describe("DocumentExportador", () => {
  test("exporta correctamente", () => {
    const doc = new DocumentExportador();
    const result = doc.exportar(new PDFExportadorFactory(), "hola");
    expect(result).toBe("PDF: hola");
  });

  test("lanza error si contenido vacío", () => {
    const doc = new DocumentExportador();

    expect(() =>
      doc.exportar(new PDFExportadorFactory(), "   ")
    ).toThrow();
  });
});