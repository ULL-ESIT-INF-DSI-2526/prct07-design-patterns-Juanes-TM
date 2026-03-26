import { describe, test, expect } from "vitest";
import { ViajeUrgente } from "../../src/ejercicio-03/urgente";

describe("ViajeUrgente", () => {
  test("calcula correctamente con peso y distancia", () => {
    const estrategia = new ViajeUrgente();
    expect(estrategia.calcular(10, 100)).toBe(13 + 50); // 10*1.3 + 100*0.5
  });
});