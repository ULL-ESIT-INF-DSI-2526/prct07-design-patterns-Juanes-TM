import { RecommendationStrategy } from "./interface";
import { Item } from "./type";

/**
 * Estrategia basada en el historial del usuario.
 */
export class HistoryStrategy implements RecommendationStrategy {
  /**
   * Filtra elementos según la categoría preferida del usuario.
   * @param userId Identificador del usuario.
   * @param items Lista de elementos disponibles.
   * @returns Lista de IDs filtrados por categoría.
   */
  recommend(userId: string, items: Item[]): string[] {
    const userCategory = "action"; // Simulación

    return items
      .filter(i => i.category === userCategory)
      .slice(0, 3)
      .map(i => i.id);
  }
}