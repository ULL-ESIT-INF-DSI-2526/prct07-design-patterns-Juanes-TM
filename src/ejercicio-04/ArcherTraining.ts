import { TrainingRoutine } from "./TrainingRoutine";

/**
 * Entrenamiento específico para arqueros.
 */
export class ArcherTraining extends TrainingRoutine {
  /**
   * Entrenamiento principal del arquero.
   */
  protected entrenamientoPrincipal(): void {
    console.log("Entrenamiento de arquero");
  }

  /**
   * Ejercicio especial del arquero.
   */
  protected ejercicioEspecial(): void {
    console.log("Ejercicio especial de arquero");
  }
}