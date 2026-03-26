/**
 * Representa una herramienta de formateo de código.
 */
export class CodeFormatter {
  /**
   * Aplica formato al código fuente.
   */
  format(): string {
    return "formatted";
  }
}

/**
 * Representa una herramienta de análisis estático.
 */
export class Linter {
  /**
   * Analiza el código en busca de errores o malas prácticas.
   */
  analyze(): string {
    return "analyzed";
  }
}

/**
 * Representa el compilador de TypeScript.
 */
export class TypeScriptCompiler {
  /**
   * Compila el código TypeScript a JavaScript.
   */
  compile(): string {
    return "compiled";
  }
}

/**
 * Representa un ejecutor de tests.
 */
export class TestRunner {
  /**
   * Ejecuta los tests del proyecto.
   */
  run(): string {
    return "tested";
  }
}

/**
 * Representa un empaquetador de código.
 */
export class Bundler {
  /**
   * Empaqueta el proyecto para producción.
   */
  bundle(): string {
    return "bundled";
  }
}