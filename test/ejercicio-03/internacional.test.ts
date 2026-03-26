import { describe, test, expect } from "vitest";
import { ViajeInternacional } from "../../src/ejercicio-03/internacional";

describe("ViajeInternacional", () => {
  test("calcula correctamente con recargo internacional", () => {
    const estrategia = new ViajeInternacional();
    expect(estrategia.calcular(10, 100)).toBe(13 + 50 + 12); 
  });
});