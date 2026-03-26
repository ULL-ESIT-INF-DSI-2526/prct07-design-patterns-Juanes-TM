"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLExportadorFactory = void 0;
const factory_1 = require("./factory");
const html_1 = require("./html");
/**
 * Factory concreta para crear exportadores HTML.
 */
class HTMLExportadorFactory extends factory_1.ExportadorFactory {
    /**
     * Crea una instancia de HTMLExportador.
     */
    crearExportador() {
        return new html_1.HTMLExportador();
    }
}
exports.HTMLExportadorFactory = HTMLExportadorFactory;
//# sourceMappingURL=htmlFactory.js.map