import { RecommendationStrategy } from "./interface";
import { Item } from "./type";

/**
 * Contexto que utiliza una estrategia de recomendación.
 * Permite cambiar dinámicamente el algoritmo utilizado.
 */
export class RecommendationEngine {
  /**
   * @param strategy Estrategia inicial de recomendación.
   * @param items Lista de elementos disponibles.
   */
  constructor(
    private strategy: RecommendationStrategy,
    private items: Item[]
  ) {}

  /**
   * Genera recomendaciones para un usuario.
   * @param userId Identificador del usuario.
   * @returns Lista de recomendaciones.
   */
  getRecommendations(userId: string): string[] {
    return this.strategy.recommend(userId, this.items);
  }

  /**
   * Cambia la estrategia de recomendación en tiempo de ejecución.
   * @param strategy Nueva estrategia a utilizar.
   */
  setStrategy(strategy: RecommendationStrategy): void {
    this.strategy = strategy;
  }
}