import { describe, test, expect } from "vitest";
import { PopularStrategy } from "../../src/ejercicio-06/PopularStrategy";

describe("PopularStrategy", () => {
  test("devuelve los elementos más populares", () => {
    const items = [
      { id: "1", category: "a", popularity: 10 },
      { id: "2", category: "b", popularity: 50 },
      { id: "3", category: "c", popularity: 30 },
      { id: "4", category: "d", popularity: 70 },
    ];

    const strategy = new PopularStrategy();
    const result = strategy.recommend("user", items);

    expect(result).toEqual(["4", "2", "3"]);
  });
});