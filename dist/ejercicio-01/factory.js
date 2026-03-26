"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportadorFactory = void 0;
/**
 * Clase abstracta que define el Factory Method para crear exportadores.
 */
class ExportadorFactory {
    /**
     * Exporta un informe utilizando el exportador creado.
     * @param content Contenido del informe.
     * @returns Contenido exportado.
     */
    exportarInforme(content) {
        const exportador = this.crearExportador();
        return exportador.export(content);
    }
}
exports.ExportadorFactory = ExportadorFactory;
//# sourceMappingURL=factory.js.map