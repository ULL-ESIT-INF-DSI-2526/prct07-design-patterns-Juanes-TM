import { RecommendationStrategy } from "./interface";
import { Item } from "./type";

/**
 * Estrategia que recomienda los elementos más populares.
 */
export class PopularStrategy implements RecommendationStrategy {
  /**
   * Devuelve los elementos con mayor popularidad.
   * @param userId Identificador del usuario (no utilizado).
   * @param items Lista de elementos disponibles.
   * @returns Lista de IDs ordenados por popularidad.
   */
  recommend(userId: string, items: Item[]): string[] {
    return [...items]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3)
      .map(i => i.id);
  }
}