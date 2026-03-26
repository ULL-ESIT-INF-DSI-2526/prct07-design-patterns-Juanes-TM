import { describe, test, expect } from "vitest";
import { HistoryStrategy } from "../../src/ejercicio-06/HistoryStrategy";

describe("HistoryStrategy", () => {
  test("filtra por categoría del usuario", () => {
    const items = [
      { id: "1", category: "action", popularity: 10 },
      { id: "2", category: "rpg", popularity: 50 },
      { id: "3", category: "action", popularity: 30 },
    ];

    const strategy = new HistoryStrategy();
    const result = strategy.recommend("user", items);

    expect(result).toEqual(["1", "3"]);
  });
});