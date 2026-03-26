"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFExportadorFactory = void 0;
const factory_1 = require("./factory");
const pdf_1 = require("./pdf");
/**
 * Factory concreta para crear exportadores PDF.
 */
class PDFExportadorFactory extends factory_1.ExportadorFactory {
    /**
     * Crea una instancia de PDFExportador.
     */
    crearExportador() {
        return new pdf_1.PDFExportador();
    }
}
exports.PDFExportadorFactory = PDFExportadorFactory;
//# sourceMappingURL=pdfFactory.js.map