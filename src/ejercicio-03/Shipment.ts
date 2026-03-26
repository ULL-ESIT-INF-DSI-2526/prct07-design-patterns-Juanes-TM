import { CalculadoraCostes } from "./CalculadoraCostes";
import { ViajeEstandar } from "./estantar";
import { ViajeUrgente } from "./urgente";
import { ViajeInternacional } from "./internacional";
import { error } from "node:console";

/**
 * Clase cliente que utiliza diferentes estrategias de envío
 * para comparar costes.
 */
export class Shipment {
  /**
   * Muestra por consola el coste del envío utilizando distintas estrategias.
   * @param peso Peso del paquete.
   * @param distancia Distancia del envío.
   */
  compare(peso: number, distancia: number): void {
    if (peso < 0 || distancia < 0)
      throw new Error ("La distancia y el peso no pueden ser negativos.");

    console.log("Precios según el tipo de envio:");

    const viaje = new CalculadoraCostes(new ViajeEstandar());
    console.log(`Viaje estandar: ${viaje.calcular(peso, distancia)}`);

    viaje.setEstrategia(new ViajeUrgente());
    console.log(`Viaje urgente: ${viaje.calcular(peso, distancia)}`);

    viaje.setEstrategia(new ViajeInternacional());
    console.log(`Viaje internacional: ${viaje.calcular(peso, distancia)}`);
  }
}