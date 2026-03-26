import { Exportador } from "./interface";
/**
 * Exportador concreto para formato HTML.
 */
export declare class HTMLExportador implements Exportador {
    /**
     * Exporta el contenido en formato HTML.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como HTML.
     */
    export(content: string): string;
    /**
     * Devuelve la extensión ".html".
     */
    getFileExtension(): string;
}
