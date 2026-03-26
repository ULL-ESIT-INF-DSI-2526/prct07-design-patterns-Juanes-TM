"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLExportador = void 0;
/**
 * Exportador concreto para formato HTML.
 */
class HTMLExportador {
    /**
     * Exporta el contenido en formato HTML.
     * @param content Contenido a exportar.
     * @returns Contenido formateado como HTML.
     */
    export(content) {
        return `HTML: ${content}`;
    }
    /**
     * Devuelve la extensión ".html".
     */
    getFileExtension() {
        return ".html";
    }
}
exports.HTMLExportador = HTMLExportador;
//# sourceMappingURL=html.js.map