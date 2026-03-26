"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORDExportador = void 0;
/**
 * Exportador concreto para formato Word.
 */
class WORDExportador {
    /**
     * Exporta el contenido en formato Word.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como Word.
     */
    export(content) {
        return `WORD: ${content}`;
    }
    /**
     * Devuelve la extensión ".docx".
     */
    getFileExtension() {
        return ".docx";
    }
}
exports.WORDExportador = WORDExportador;
//# sourceMappingURL=word.js.map