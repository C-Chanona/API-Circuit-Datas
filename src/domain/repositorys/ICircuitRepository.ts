

export interface ICircuitRepository {
    circuitData(humidity:number, temperature: number, pressure: number): Promise <void | null>;
}