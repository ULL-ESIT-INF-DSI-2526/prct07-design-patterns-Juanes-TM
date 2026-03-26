import { describe, test, expect } from "vitest";
import { HTMLExportador } from "../../src/ejercicio-01/html";

describe("HTMLExportador", () => {
  test("exporta correctamente", () => {
    const html = new HTMLExportador();
    expect(html.export("hola")).toBe("HTML: hola");
  });

  test("devuelve extensión correcta", () => {
    const html = new HTMLExportador();
    expect(html.getFileExtension()).toBe(".html");
  });
});