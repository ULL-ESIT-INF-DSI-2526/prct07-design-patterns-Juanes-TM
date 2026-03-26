import { describe, test, expect } from "vitest";
import { ReciboDigital } from "../../src/ejercicio-08/ReciboDigital";

describe("ReciboDigital", () => {
  test("genera recibo digital", () => {
    expect(new ReciboDigital().generate()).toBe("Recibo digital");
  });
});