import { describe, test, expect } from "vitest";
import { RecommendationEngine } from "../../src/ejercicio-06/RecommendationEngine";
import { PopularStrategy } from "../../src/ejercicio-06/PopularStrategy";
import { HistoryStrategy } from "../../src/ejercicio-06/HistoryStrategy";

describe("RecommendationEngine", () => {

  const items = [
    { id: "1", category: "action", popularity: 10 },
    { id: "2", category: "rpg", popularity: 50 },
    { id: "3", category: "action", popularity: 30 },
  ];

  test("usa estrategia inicial correctamente", () => {
    const engine = new RecommendationEngine(
      new PopularStrategy(),
      items
    );

    const result = engine.getRecommendations("user");

    expect(result).toEqual(["2", "3", "1"]);
  });

  test("permite cambiar estrategia en runtime", () => {
    const engine = new RecommendationEngine(
      new PopularStrategy(),
      items
    );

    engine.setStrategy(new HistoryStrategy());

    const result = engine.getRecommendations("user");

    expect(result).toEqual(["1", "3"]);
  });

});