"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bundler = exports.TestRunner = exports.TypeScriptCompiler = exports.Linter = exports.CodeFormatter = void 0;
/**
 * Representa una herramienta de formateo de código.
 */
class CodeFormatter {
    /**
     * Aplica formato al código fuente.
     */
    format() {
        return "formatted";
    }
}
exports.CodeFormatter = CodeFormatter;
/**
 * Representa una herramienta de análisis estático.
 */
class Linter {
    /**
     * Analiza el código en busca de errores o malas prácticas.
     */
    analyze() {
        return "analyzed";
    }
}
exports.Linter = Linter;
/**
 * Representa el compilador de TypeScript.
 */
class TypeScriptCompiler {
    /**
     * Compila el código TypeScript a JavaScript.
     */
    compile() {
        return "compiled";
    }
}
exports.TypeScriptCompiler = TypeScriptCompiler;
/**
 * Representa un ejecutor de tests.
 */
class TestRunner {
    /**
     * Ejecuta los tests del proyecto.
     */
    run() {
        return "tested";
    }
}
exports.TestRunner = TestRunner;
/**
 * Representa un empaquetador de código.
 */
class Bundler {
    /**
     * Empaqueta el proyecto para producción.
     */
    bundle() {
        return "bundled";
    }
}
exports.Bundler = Bundler;
//# sourceMappingURL=clasesBasicas.js.map