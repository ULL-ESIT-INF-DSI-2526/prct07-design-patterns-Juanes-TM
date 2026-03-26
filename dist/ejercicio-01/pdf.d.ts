import { Exportador } from "./interface";
/**
 * Exportador concreto para formato PDF.
 */
export declare class PDFExportador implements Exportador {
    /**
     * Exporta el contenido en formato PDF.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como PDF.
     */
    export(content: string): string;
    /**
     * Devuelve la extensión ".pdf".
     */
    getFileExtension(): string;
}
