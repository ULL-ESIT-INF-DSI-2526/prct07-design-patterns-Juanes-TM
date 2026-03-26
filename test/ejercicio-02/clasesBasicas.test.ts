import { describe, test, expect } from "vitest";
import {
  CodeFormatter,
  Linter,
  TypeScriptCompiler,
  TestRunner,
  Bundler
} from "../../src/ejercicio-02/clasesBasicas";

describe("Clases básicas", () => {
  test("CodeFormatter.format devuelve formatted", () => {
    const formatter = new CodeFormatter();
    expect(formatter.format()).toBe("formatted");
  });

  test("Linter.analyze devuelve analyzed", () => {
    const linter = new Linter();
    expect(linter.analyze()).toBe("analyzed");
  });

  test("TypeScriptCompiler.compile devuelve compiled", () => {
    const compiler = new TypeScriptCompiler();
    expect(compiler.compile()).toBe("compiled");
  });

  test("TestRunner.run devuelve tested", () => {
    const tester = new TestRunner();
    expect(tester.run()).toBe("tested");
  });

  test("Bundler.bundle devuelve bundled", () => {
    const bundler = new Bundler();
    expect(bundler.bundle()).toBe("bundled");
  });
});