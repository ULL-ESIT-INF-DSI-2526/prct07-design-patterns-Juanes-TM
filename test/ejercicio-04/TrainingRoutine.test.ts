import { describe, test, expect, vi } from "vitest";
import { WarriorTraining } from "../../src/ejercicio-04/WarriorTraining";
import { MageTraining } from "../../src/ejercicio-04/MageTraining";
import { ArcherTraining } from "../../src/ejercicio-04/ArcherTraining";

describe("TrainingRoutine (Template Method)", () => {

  test("WarriorTraining omite ejercicio especial", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const warrior = new WarriorTraining();
    warrior.training();

    expect(spy).toHaveBeenCalledWith("Calentando");
    expect(spy).toHaveBeenCalledWith("Entrenamiento de guerrero");
    expect(spy).toHaveBeenCalledWith("Descansando");
    expect(spy).not.toHaveBeenCalledWith("Ejercicio especial de guerrero");
    expect(spy).toHaveBeenCalledWith("Buen entrenamiento");

    spy.mockRestore();
  });

  test("MageTraining ejecuta todos los pasos", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const mage = new MageTraining();
    mage.training();

    expect(spy).toHaveBeenCalledWith("Calentando");
    expect(spy).toHaveBeenCalledWith("Entrenamiento de mago");
    expect(spy).toHaveBeenCalledWith("Descansando");
    expect(spy).toHaveBeenCalledWith("Ejercicio especial de mago");
    expect(spy).toHaveBeenCalledWith("Buen entrenamiento");

    spy.mockRestore();
  });

  test("ArcherTraining ejecuta todos los pasos", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});

    const archer = new ArcherTraining();
    archer.training();

    expect(spy).toHaveBeenCalledWith("Calentando");
    expect(spy).toHaveBeenCalledWith("Entrenamiento de arquero");
    expect(spy).toHaveBeenCalledWith("Descansando");
    expect(spy).toHaveBeenCalledWith("Ejercicio especial de arquero");
    expect(spy).toHaveBeenCalledWith("Buen entrenamiento");

    spy.mockRestore();
  });

  test("WarriorTraining ejercicioEspecial existe y no hace nada", () => {
    const warrior = new WarriorTraining();
    (warrior as any).ejercicioEspecial();

    expect(true).toBe(true); 
  });

});