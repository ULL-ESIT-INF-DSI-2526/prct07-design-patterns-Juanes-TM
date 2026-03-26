/**
 * Representa un exportador de documentos.
 * Define las operaciones necesarias para exportar contenido
 * a un formato específico.
 */
export interface Exportador {
    /**
     * Exporta el contenido al formato correspondiente.
     * @param content Contenido a exportar.
     * @returns Contenido formateado.
     */
    export(content: string): string;
    /**
     * Devuelve la extensión del archivo asociada al formato.
     * @returns Extensión del archivo (ej: ".pdf").
     */
    getFileExtension(): string;
}
