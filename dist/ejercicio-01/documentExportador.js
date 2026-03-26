"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentExportador = void 0;
/**
 * Clase cliente que utiliza factories para exportar documentos
 * sin depender de implementaciones concretas.
 */
class DocumentExportador {
    /**
     * Comprueba si el contenido no está vacío.
     * @param contenido Texto a validar.
     * @returns true si no está vacío.
     */
    noVacio(contenido) {
        return contenido.trim().length > 0;
    }
    /**
     * Exporta contenido utilizando una factory.
     * @param factory Factory del exportador.
     * @param contenido Contenido a exportar.
     * @throws Error si el contenido está vacío.
     */
    exportar(factory, contenido) {
        if (!this.noVacio(contenido)) {
            throw new Error("Informe vacío, no se puede exportar.");
        }
        return factory.exportarInforme(contenido);
    }
}
exports.DocumentExportador = DocumentExportador;
//# sourceMappingURL=documentExportador.js.map