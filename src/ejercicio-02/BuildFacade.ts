import {
  CodeFormatter,
  TypeScriptCompiler,
  Linter,
  TestRunner,
  Bundler
} from "./clasesBasicas";

/**
 * Fachada que simplifica el proceso de construcción de un proyecto.
 * Encapsula múltiples herramientas y define un flujo de ejecución.
 */
export class BuildFacade {
  private formatter = new CodeFormatter();
  private linter = new Linter();
  private tester = new TestRunner();
  private compiler = new TypeScriptCompiler();
  private bundler = new Bundler();

  /**
   * Ejecuta las comprobaciones de calidad:
   * formateo, análisis estático y tests.
   */
  runQualityChecks(): void {
    this.formatter.format();
    this.linter.analyze();
    this.tester.run();
  }

  /**
   * Construye el proyecto completo.
   * Incluye comprobaciones de calidad antes de compilar y empaquetar.
   */
  buildProject(): void {
    this.runQualityChecks();
    this.compiler.compile();
    this.bundler.bundle();
  }
}