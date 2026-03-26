import { Exportador } from "./interface";

/**
 * Exportador concreto para formato HTML.
 */
export class HTMLExportador implements Exportador {
  /**
   * Exporta el contenido en formato HTML.
   * @param content Contenido a exportar.
   * @returns Contenido formateado como HTML.
   */
  export(content: string): string {
    return `HTML: ${content}`;
  }

  /**
   * Devuelve la extensión ".html".
   */
  getFileExtension(): string {
    return ".html";
  }
}