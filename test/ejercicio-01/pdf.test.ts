import { describe, test, expect } from "vitest";
import { PDFExportador } from "../../src/ejercicio-01/pdf";

describe("PDFExportador", () => {
  test("exporta correctamente", () => {
    const pdf = new PDFExportador();
    expect(pdf.export("hola")).toBe("PDF: hola");
  });

  test("devuelve extensión correcta", () => {
    const pdf = new PDFExportador();
    expect(pdf.getFileExtension()).toBe(".pdf");
  });
});