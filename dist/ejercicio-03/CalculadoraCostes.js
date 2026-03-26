"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraCostes = void 0;
const estantar_1 = require("./estantar");
class CalculadoraCostes {
    estrategia;
    constructor(estrategia) {
        this.estrategia = estrategia;
    }
    calcular(peso, distancia) {
        if (this.estrategia instanceof estantar_1.ViajeEstandar)
            return this.estrategia.calcular(peso);
        else
            return this.estrategia.calcular(peso, distancia);
    }
    setEstrategia(estrategia) {
        this.estrategia = estrategia;
    }
}
exports.CalculadoraCostes = CalculadoraCostes;
//# sourceMappingURL=CalculadoraCostes.js.map