import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
/**
 * Factory concreta para crear exportadores HTML.
 */
export declare class HTMLExportadorFactory extends ExportadorFactory {
    /**
     * Crea una instancia de HTMLExportador.
     */
    crearExportador(): Exportador;
}
