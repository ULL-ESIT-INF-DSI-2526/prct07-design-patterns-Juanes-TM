import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
import { WORDExportador } from "./word";

/**
 * Factory concreta para crear exportadores Word.
 */
export class WORDExportadorFactory extends ExportadorFactory {
  /**
   * Crea una instancia de WORDExportador.
   */
  crearExportador(): Exportador {
    return new WORDExportador();
  }
}