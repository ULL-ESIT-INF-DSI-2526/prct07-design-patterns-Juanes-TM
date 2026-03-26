/**
 * Clase abstracta que define el algoritmo de evaluación de exámenes.
 * Implementa el patrón Template Method.
 */
export abstract class ExamCorrector {
  protected respuestasAlumno: string[] = [];
  protected plantillaCorreccion: string[] = [];
  protected correctas: number = 0;
  protected erradas: number = 0;
  protected nota: number = 0;

  /**
   * @param comentarios Indica si se deben generar comentarios.
   */
  constructor(private comentarios: boolean) {}

  /**
   * Método plantilla que define el flujo completo de evaluación.
   */
  evaluate(): void {
    this.correctas = 0;
    this.erradas = 0;

    this.CargarRespuestas();
    this.CargarPlantilla();
    this.CorregirRespuestas();
    this.CalcularNota();

    if (this.HayComentarios()) {
      this.GenerarFeedback();
    }
  }

  /**
   * Hook que determina si se generan comentarios.
   */
  private HayComentarios(): boolean {
    return this.comentarios;
  }

  /**
   * Simula la carga de respuestas del alumno.
   */
  private CargarRespuestas(): void {
    this.respuestasAlumno = ['A', 'B', 'C', 'E', 'H'];
  }

  /**
   * Simula la carga de la plantilla de corrección.
   */
  private CargarPlantilla(): void {
    this.plantillaCorreccion = ['A', 'B', 'C', 'D', 'E'];
  }

  /**
   * Corrige las respuestas del alumno.
   */
  protected abstract CorregirRespuestas(): void;

  /**
   * Calcula la nota final.
   */
  protected abstract CalcularNota(): void;

  /**
   * Genera comentarios del examen.
   */
  private GenerarFeedback(): void {
    console.log("Generando comentario");
  }
}