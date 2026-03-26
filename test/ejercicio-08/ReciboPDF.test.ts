import { describe, test, expect } from "vitest";
import { ReciboPDF } from "../../src/ejercicio-08/ReciboPDF";

describe("ReciboPDF", () => {
  test("genera recibo pdf", () => {
    expect(new ReciboPDF().generate()).toBe("Recibo.pdf");
  });
});