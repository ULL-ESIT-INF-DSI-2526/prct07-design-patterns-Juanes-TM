import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
import { HTMLExportador } from "./html";

/**
 * Factory concreta para crear exportadores HTML.
 */
export class HTMLExportadorFactory extends ExportadorFactory {
  /**
   * Crea una instancia de HTMLExportador.
   */
  crearExportador(): Exportador {
    return new HTMLExportador();
  }
}