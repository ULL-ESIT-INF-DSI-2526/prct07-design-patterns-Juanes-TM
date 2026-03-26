import { Item } from "./type";

/**
 * Interfaz que define el contrato para las estrategias de recomendación.
 * Cada estrategia implementa un algoritmo distinto.
 */
export interface RecommendationStrategy {
  /**
   * Genera una lista de recomendaciones para un usuario.
   * @param userId Identificador del usuario.
   * @param items Lista de elementos disponibles.
   * @returns Lista de identificadores recomendados.
   */
  recommend(userId: string, items: Item[]): string[];
}