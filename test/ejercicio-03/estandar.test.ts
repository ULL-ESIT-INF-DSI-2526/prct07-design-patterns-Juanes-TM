import { describe, test, expect } from "vitest";
import { ViajeEstandar } from "../../src/ejercicio-03/estantar";

describe("ViajeEstandar", () => {
  test("calcula correctamente solo con peso", () => {
    const estrategia = new ViajeEstandar();
    expect(estrategia.calcular(10, 100)).toBe(13); // 10 * 1.3
  });
});