import { RecommendationStrategy } from "./interface";
import { Item } from "./type";

/**
 * Estrategia que recomienda elementos similares a otros.
 */
export class SimilarStrategy implements RecommendationStrategy {
  /**
   * Filtra elementos similares a una categoría de referencia.
   * @param userId Identificador del usuario.
   * @param items Lista de elementos disponibles.
   * @returns Lista de IDs de elementos similares.
   */
  recommend(userId: string, items: Item[]): string[] {
    const referenceCategory = "rpg"; // Simulación

    return items
      .filter(i => i.category === referenceCategory)
      .map(i => i.id);
  }
}