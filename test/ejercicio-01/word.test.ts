import { describe, test, expect } from "vitest";
import { WORDExportador } from "../../src/ejercicio-01/word";

describe("WORDExportador", () => {
  test("exporta correctamente", () => {
    const word = new WORDExportador();
    expect(word.export("hola")).toBe("WORD: hola");
  });

  test("devuelve extensión correcta", () => {
    const word = new WORDExportador();
    expect(word.getFileExtension()).toBe(".docx");
  });
});