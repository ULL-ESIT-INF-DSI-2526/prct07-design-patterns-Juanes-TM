import { describe, test, expect } from "vitest";
import { ReciboImpreso } from "../../src/ejercicio-08/ReciboImpreso";

describe("ReciboImpreso", () => {
  test("genera recibo impreso", () => {
    expect(new ReciboImpreso().generate()).toBe("Recibo impreso");
  });
});