import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
import { PDFExportador } from "./pdf";

/**
 * Factory concreta para crear exportadores PDF.
 */
export class PDFExportadorFactory extends ExportadorFactory {
  /**
   * Crea una instancia de PDFExportador.
   */
  crearExportador(): Exportador {
    return new PDFExportador();
  }
}