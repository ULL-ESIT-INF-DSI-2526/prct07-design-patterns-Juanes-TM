import { TrainingRoutine } from "./TrainingRoutine";

/**
 * Entrenamiento específico para guerreros.
 * No realiza ejercicio especial.
 */
export class WarriorTraining extends TrainingRoutine {
  /**
   * Indica que el guerrero no realiza ejercicio especial.
   */
  protected haceEspecial(): boolean {
    return false;
  }

  /**
   * Entrenamiento principal del guerrero.
   */
  protected entrenamientoPrincipal(): void {
    console.log("Entrenamiento de guerrero");
  }

  /**
   * Método requerido por la clase base.
   * No se ejecuta porque haceEspecial() devuelve false.
   */
  protected ejercicioEspecial(): void {}
}