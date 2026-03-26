import { describe, test, expect } from "vitest";
import { WORDExportadorFactory } from "../../src/ejercicio-01/wordFactory";
import { WORDExportador } from "../../src/ejercicio-01/word";

describe("WORDExportadorFactory", () => {
  test("crea instancia correcta", () => {
    const factory = new WORDExportadorFactory();
    const exp = factory.crearExportador();
    expect(exp).toBeInstanceOf(WORDExportador);
  });
});