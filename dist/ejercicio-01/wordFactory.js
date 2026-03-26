"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORDExportadorFactory = void 0;
const factory_1 = require("./factory");
const word_1 = require("./word");
/**
 * Factory concreta para crear exportadores Word.
 */
class WORDExportadorFactory extends factory_1.ExportadorFactory {
    /**
     * Crea una instancia de WORDExportador.
     */
    crearExportador() {
        return new word_1.WORDExportador();
    }
}
exports.WORDExportadorFactory = WORDExportadorFactory;
//# sourceMappingURL=wordFactory.js.map