import { ICalculoViaje } from "./interface";
export declare class CalculadoraCostes {
    private estrategia;
    constructor(estrategia: ICalculoViaje);
    calcular(peso: number, distancia: number): number;
    setEstrategia(estrategia: ICalculoViaje): void;
}
