import { Exportador } from "./interface";
/**
 * Exportador concreto para formato Word.
 */
export declare class WORDExportador implements Exportador {
    /**
     * Exporta el contenido en formato Word.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como Word.
     */
    export(content: string): string;
    /**
     * Devuelve la extensión ".docx".
     */
    getFileExtension(): string;
}
