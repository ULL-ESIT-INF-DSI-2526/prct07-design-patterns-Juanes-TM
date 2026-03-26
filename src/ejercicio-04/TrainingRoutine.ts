/**
 * Clase abstracta que define el algoritmo general de entrenamiento.
 * Implementa el patrón Template Method, fijando la estructura
 * del proceso y delegando algunos pasos a las subclases.
 */
export abstract class TrainingRoutine {
  /**
   * Método plantilla que define el flujo completo del entrenamiento.
   * No debe ser modificado por las subclases.
   */
  training(): void {
    this.calentar();
    this.entrenamientoPrincipal();
    this.descansar();

    if (this.haceEspecial()) {
      this.ejercicioEspecial();
    }

    this.evaluar();
  }

  /**
   * Paso común: calentamiento.
   */
  private calentar(): void {
    console.log("Calentando");
  }

  /**
   * Paso variable: entrenamiento principal.
   * Debe ser implementado por cada subclase.
   */
  protected abstract entrenamientoPrincipal(): void;

  /**
   * Paso común: descanso.
   */
  private descansar(): void {
    console.log("Descansando");
  }

  /**
   * Paso variable: ejercicio especial.
   * Puede ser implementado de forma distinta por cada subclase.
   */
  protected abstract ejercicioEspecial(): void;

  /**
   * Hook que permite decidir si se ejecuta el ejercicio especial.
   * @returns true si se debe ejecutar el ejercicio especial.
   */
  protected haceEspecial(): boolean {
    return true;
  }

  /**
   * Paso común: evaluación del entrenamiento.
   */
  private evaluar(): void {
    console.log("Buen entrenamiento");
  }
}