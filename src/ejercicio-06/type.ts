/**
 * Representa un elemento que puede ser recomendado.
 */
export type Item = {
  /**
   * Identificador único del elemento.
   */
  id: string;

  /**
   * Categoría a la que pertenece el elemento.
   */
  category: string;

  /**
   * Nivel de popularidad del elemento.
   */
  popularity: number;
};