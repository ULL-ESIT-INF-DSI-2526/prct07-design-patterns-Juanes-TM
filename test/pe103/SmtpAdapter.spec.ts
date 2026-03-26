import { describe, test, expect, vi } from "vitest";
import {SmtpAdapter} from "../../src/pe103/SmtpAdapter"
import { LegacySmtpClient } from "../../src/pe103/LegacySmtpClient";

describe("SmtpAdapter", () => {
  test("Se conecta correctamente", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const legacy = new LegacySmtpClient;
    const adapter = new SmtpAdapter(legacy, "g", 80);
    expect(spy).toHaveBeenCalledWith("[SMTP] Connected to g:80");
    spy.mockRestore();
  });

  test("Se conecta incorrectamente", () => {
    const legacy = new LegacySmtpClient;
    legacy.connect("g", 80);
    expect(() => new SmtpAdapter(legacy, "g", 80)).toThrow();
  });

    test("Se conecta incorrectamente - salta el if", () => {
      const legacy = new LegacySmtpClient;
      expect(() => new SmtpAdapter(legacy, " ", -80)).toThrow();
    });

  test("Se desconecta correctamente", () => {
    const legacy = new LegacySmtpClient;
    const adapter = new SmtpAdapter(legacy, "g", 80);
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    adapter.close();
    expect(spy).toHaveBeenCalledWith("[SMTP] Disconnected");
    spy.mockRestore();
  });

  test("Se desconecta incorrectamente", () => {
    const legacy = new LegacySmtpClient;
    const adapter = new SmtpAdapter(legacy, "g", 80);
    adapter.close();
    expect(() => adapter.close()).toThrow();
  });

  test("Se envia un mensaje incorrectamente", () => {
    const legacy = new LegacySmtpClient;
    const adapter = new SmtpAdapter(legacy, "g", 80);
    expect(() => adapter.send([" ", " ", " ", [], false])).toThrow();
  });

  test("Se envia un mensaje correctamente", () => {
    const legacy = new LegacySmtpClient;
    const adapter = new SmtpAdapter(legacy, "g", 80);
    adapter.send(["Juan", "Trabajo", "Correo", ["pepe"], false]);
    expect(adapter.counter).toBe(1);
  });
});