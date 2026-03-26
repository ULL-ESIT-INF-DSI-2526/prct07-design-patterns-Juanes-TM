import { ExamCorrector } from "./ExamCorrector";

/**
 * Evaluación de examen tipo verdadero/falso.
 */
export class TrueFalseExam extends ExamCorrector {
  constructor(comentario: boolean) {super(comentario)}

  protected CorregirRespuestas(): void {
    for (let i = 0; i < this.plantillaCorreccion.length; i++) {
      if (this.plantillaCorreccion[i] === this.respuestasAlumno[i])
        this.correctas++;
      else 
        this.erradas++;
    }
  }

  protected CalcularNota(): void {
    this.nota = (this.correctas * 2) - (this.erradas * 0.5);
  }
}