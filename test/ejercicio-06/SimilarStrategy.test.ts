import { describe, test, expect } from "vitest";
import { SimilarStrategy } from "../../src/ejercicio-06/SimilarStrategy";

describe("SimilarStrategy", () => {
  test("filtra por categoría similar", () => {
    const items = [
      { id: "1", category: "rpg", popularity: 10 },
      { id: "2", category: "action", popularity: 50 },
      { id: "3", category: "rpg", popularity: 30 },
    ];

    const strategy = new SimilarStrategy();
    const result = strategy.recommend("user", items);

    expect(result).toEqual(["1", "3"]);
  });
});