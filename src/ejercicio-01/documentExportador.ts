import { ExportadorFactory } from "./factory";
  
/**
 * Clase cliente que utiliza factories para exportar documentos
 * sin depender de implementaciones concretas.
 */
export class DocumentExportador {
  /**
   * Comprueba si el contenido no está vacío.
   * @param contenido Texto a validar.
   * @returns true si no está vacío.
   */
  private noVacio(contenido: string): boolean {
    return contenido.trim().length > 0;
  }

  /**
   * Exporta contenido utilizando una factory.
   * @param factory Factory del exportador.
   * @param contenido Contenido a exportar.
   * @throws Error si el contenido está vacío.
   */
  exportar(factory: ExportadorFactory, contenido: string): string {
    if (!this.noVacio(contenido)) {
      throw new Error("Informe vacío, no se puede exportar.");
    }

    return factory.exportarInforme(contenido);
  }
}