import { describe, test, expect, vi } from "vitest";
import { BuildFacade } from "../../src/ejercicio-02/BuildFacade";
import {
  CodeFormatter,
  Linter,
  TestRunner,
  TypeScriptCompiler,
  Bundler
} from "../../src/ejercicio-02/clasesBasicas";

describe("BuildFacade", () => {

  test("runQualityChecks ejecuta formatter, linter y tester en orden", () => {
    const calls: string[] = [];

    vi.spyOn(CodeFormatter.prototype, "format").mockImplementation(() => {
      calls.push("format");
      return "formatted";
    });

    vi.spyOn(Linter.prototype, "analyze").mockImplementation(() => {
      calls.push("lint");
      return "analyzed";
    });

    vi.spyOn(TestRunner.prototype, "run").mockImplementation(() => {
      calls.push("test");
      return "tested";
    });

    const facade = new BuildFacade();
    facade.runQualityChecks();

    expect(calls).toEqual(["format", "lint", "test"]);
  });

  test("buildProject ejecuta todo el pipeline en orden", () => {
    const calls: string[] = [];

    vi.spyOn(CodeFormatter.prototype, "format").mockImplementation(() => {
      calls.push("format");
      return "formatted";
    });

    vi.spyOn(Linter.prototype, "analyze").mockImplementation(() => {
      calls.push("lint");
      return "analyzed";
    });

    vi.spyOn(TestRunner.prototype, "run").mockImplementation(() => {
      calls.push("test");
      return "tested";
    });

    vi.spyOn(TypeScriptCompiler.prototype, "compile").mockImplementation(() => {
      calls.push("compile");
      return "compiled";
    });

    vi.spyOn(Bundler.prototype, "bundle").mockImplementation(() => {
      calls.push("bundle");
      return "bundled";
    });

    const facade = new BuildFacade();
    facade.buildProject();

    expect(calls).toEqual([
      "format",
      "lint",
      "test",
      "compile",
      "bundle"
    ]);
  });

});