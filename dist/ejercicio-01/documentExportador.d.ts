import { ExportadorFactory } from "./factory";
/**
 * Clase cliente que utiliza factories para exportar documentos
 * sin depender de implementaciones concretas.
 */
export declare class DocumentExportador {
    /**
     * Comprueba si el contenido no está vacío.
     * @param contenido Texto a validar.
     * @returns true si no está vacío.
     */
    private noVacio;
    /**
     * Exporta contenido utilizando una factory.
     * @param factory Factory del exportador.
     * @param contenido Contenido a exportar.
     * @throws Error si el contenido está vacío.
     */
    exportar(factory: ExportadorFactory, contenido: string): string;
}
