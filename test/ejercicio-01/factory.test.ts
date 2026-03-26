import { describe, test, expect } from "vitest";
import { PDFExportadorFactory } from "../../src/ejercicio-01/pdfFactory";

describe("ExportadorFactory", () => {
  test("exportarInforme usa el exportador correctamente", () => {
    const factory = new PDFExportadorFactory();
    expect(factory.exportarInforme("test")).toBe("PDF: test");
  });
});