import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
/**
 * Factory concreta para crear exportadores PDF.
 */
export declare class PDFExportadorFactory extends ExportadorFactory {
    /**
     * Crea una instancia de PDFExportador.
     */
    crearExportador(): Exportador;
}
