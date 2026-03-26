import { Exportador } from "./interface";
import { ExportadorFactory } from "./factory";
/**
 * Factory concreta para crear exportadores Word.
 */
export declare class WORDExportadorFactory extends ExportadorFactory {
    /**
     * Crea una instancia de WORDExportador.
     */
    crearExportador(): Exportador;
}
