import { describe, test, expect, vi } from "vitest";
import { MultipleChoiceExam } from "../../src/ejercicio-07/MultipleChoiceExam";
import { TrueFalseExam } from "../../src/ejercicio-07/TrueFalseExam";
import { ShortAnswerExam } from "../../src/ejercicio-07/ShortAnswerExam";

describe("ExamCorrector", () => {

  test("MultipleChoice calcula correctamente", () => {
    const exam = new MultipleChoiceExam(false);
    exam.evaluate();

    expect((exam as any).nota).toBe(4); 
  });

  test("TrueFalse calcula correctamente", () => {
    const exam = new TrueFalseExam(false);
    exam.evaluate();

    expect((exam as any).nota).toBe(5); 
  });

  test("ShortAnswer calcula correctamente", () => {
    const exam = new ShortAnswerExam(false);
    exam.evaluate();

    expect((exam as any).nota).toBeGreaterThan(0);
  });

  test("genera comentarios si está activado", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const exam = new MultipleChoiceExam(true);
    exam.evaluate();

    expect(spy).toHaveBeenCalledWith("Generando comentario");

    spy.mockRestore();
  });

  test("ShortAnswer maneja respuestas vacías correctamente", () => {
    const exam = new ShortAnswerExam(false);

    (exam as any).respuestasAlumno = ["", "", "", "", ""];
    (exam as any).plantillaCorreccion = ["A", "B", "C", "D", "E"];

    (exam as any).correctas = 0;
    (exam as any).erradas = 0;

    (exam as any).CorregirRespuestas();

    expect((exam as any).correctas).toBe(0);
  });

});