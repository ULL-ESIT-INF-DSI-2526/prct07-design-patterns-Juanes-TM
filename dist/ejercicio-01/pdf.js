"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFExportador = void 0;
/**
 * Exportador concreto para formato PDF.
 */
class PDFExportador {
    /**
     * Exporta el contenido en formato PDF.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como PDF.
     */
    export(content) {
        return `PDF: ${content}`;
    }
    /**
     * Devuelve la extensión ".pdf".
     */
    getFileExtension() {
        return ".pdf";
    }
}
exports.PDFExportador = PDFExportador;
//# sourceMappingURL=pdf.js.map