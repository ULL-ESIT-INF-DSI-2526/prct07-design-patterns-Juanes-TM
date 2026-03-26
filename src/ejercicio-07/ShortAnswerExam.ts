import { ExamCorrector } from "./ExamCorrector";

/**
 * Evaluación de examen de respuesta corta.
 */
export class ShortAnswerExam extends ExamCorrector {
  constructor(comentario: boolean) {super(comentario)}

  protected CorregirRespuestas(): void {
    for (let i = 0; i < this.plantillaCorreccion.length; i++) {
      if (this.plantillaCorreccion[i] === this.respuestasAlumno[i])
        this.correctas++;
      else 
        if (this.respuestasAlumno[i].trim().length !== 0)
          this.correctas += 0.2;
        
    }
  }

  protected CalcularNota(): void {
    this.nota = (this.correctas * 2);
  }
}