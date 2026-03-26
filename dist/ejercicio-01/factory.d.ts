import { Exportador } from "./interface";
/**
 * Clase abstracta que define el Factory Method para crear exportadores.
 */
export declare abstract class ExportadorFactory {
    /**
     * Método fábrica que debe implementar cada subclase
     * para crear un exportador concreto.
     */
    abstract crearExportador(): Exportador;
    /**
     * Exporta un informe utilizando el exportador creado.
     * @param content Contenido del informe.
     * @returns Contenido exportado.
     */
    exportarInforme(content: string): string;
}
