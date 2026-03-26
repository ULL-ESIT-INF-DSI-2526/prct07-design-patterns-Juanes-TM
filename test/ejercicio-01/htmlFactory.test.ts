import { describe, test, expect } from "vitest";
import { HTMLExportadorFactory } from "../../src/ejercicio-01/htmlFactory";
import { HTMLExportador } from "../../src/ejercicio-01/html";

describe("HTMLExportadorFactory", () => {
  test("crea instancia correcta", () => {
    const factory = new HTMLExportadorFactory();
    const exp = factory.crearExportador();
    expect(exp).toBeInstanceOf(HTMLExportador);
  });
});