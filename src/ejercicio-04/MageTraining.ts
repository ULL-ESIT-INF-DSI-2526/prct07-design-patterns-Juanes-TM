import { TrainingRoutine } from "./TrainingRoutine";

/**
 * Entrenamiento específico para magos.
 */
export class MageTraining extends TrainingRoutine {
  /**
   * Entrenamiento principal del mago.
   */
  protected entrenamientoPrincipal(): void {
    console.log("Entrenamiento de mago");
  }

  /**
   * Ejercicio especial del mago.
   */
  protected ejercicioEspecial(): void {
    console.log("Ejercicio especial de mago");
  }
}