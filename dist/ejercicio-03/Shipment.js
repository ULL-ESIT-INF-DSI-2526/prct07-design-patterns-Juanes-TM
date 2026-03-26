"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CalculadoraCostes_1 = require("./CalculadoraCostes");
const estantar_1 = require("./estantar");
const urgente_1 = require("./urgente");
const internacional_1 = require("./internacional");
class Shipment {
    compare(peso, distancia) {
        console.log("Precios según el tipo de envio:");
        const viaje = new CalculadoraCostes_1.CalculadoraCostes(new estantar_1.ViajeEstandar);
        console.log(`Viaje estandar: ${viaje.calcular(peso, distancia)}`);
        viaje.setEstrategia(new urgente_1.ViajeUrgente);
        console.log(`Viaje urgente: ${viaje.calcular(peso, distancia)}`);
        viaje.setEstrategia(new internacional_1.ViajeInternacional);
        console.log(`Viaje internacional: ${viaje.calcular(peso, distancia)}`);
    }
}
const ship = new Shipment();
ship.compare(10, 50);
//# sourceMappingURL=Shipment.js.map