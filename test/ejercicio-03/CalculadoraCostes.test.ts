import { describe, test, expect } from "vitest";
import { CalculadoraCostes } from "../../src/ejercicio-03/CalculadoraCostes";
import { ViajeEstandar } from "../../src/ejercicio-03/estantar";
import { ViajeUrgente } from "../../src/ejercicio-03/urgente";

describe("CalculadoraCostes", () => {

  test("usa estrategia inicial correctamente", () => {
    const calc = new CalculadoraCostes(new ViajeEstandar());
    expect(calc.calcular(10, 100)).toBe(13);
  });

  test("permite cambiar estrategia en runtime", () => {
    const calc = new CalculadoraCostes(new ViajeEstandar());

    calc.setEstrategia(new ViajeUrgente());

    expect(calc.calcular(10, 100)).toBe(13 + 50);
  });

});