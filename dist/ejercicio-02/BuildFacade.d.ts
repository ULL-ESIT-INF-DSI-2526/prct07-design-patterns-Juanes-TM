/**
 * Fachada que simplifica el proceso de construcción de un proyecto.
 * Encapsula múltiples herramientas y define un flujo de ejecución.
 */
export declare class BuildFacade {
    private formatter;
    private linter;
    private tester;
    private compiler;
    private bundler;
    /**
     * Ejecuta las comprobaciones de calidad:
     * formateo, análisis estático y tests.
     */
    runQualityChecks(): void;
    /**
     * Construye el proyecto completo.
     * Incluye comprobaciones de calidad antes de compilar y empaquetar.
     */
    buildProject(): void;
}
