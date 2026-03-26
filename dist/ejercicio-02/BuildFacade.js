"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildFacade = void 0;
const clasesBasicas_1 = require("./clasesBasicas");
/**
 * Fachada que simplifica el proceso de construcción de un proyecto.
 * Encapsula múltiples herramientas y define un flujo de ejecución.
 */
class BuildFacade {
    formatter = new clasesBasicas_1.CodeFormatter();
    linter = new clasesBasicas_1.Linter();
    tester = new clasesBasicas_1.TestRunner();
    compiler = new clasesBasicas_1.TypeScriptCompiler();
    bundler = new clasesBasicas_1.Bundler();
    /**
     * Ejecuta las comprobaciones de calidad:
     * formateo, análisis estático y tests.
     */
    runQualityChecks() {
        this.formatter.format();
        this.linter.analyze();
        this.tester.run();
    }
    /**
     * Construye el proyecto completo.
     * Incluye comprobaciones de calidad antes de compilar y empaquetar.
     */
    buildProject() {
        this.runQualityChecks();
        this.compiler.compile();
        this.bundler.bundle();
    }
}
exports.BuildFacade = BuildFacade;
//# sourceMappingURL=BuildFacade.js.map