import { Request, Response } from "express";
import { CircuitDataUseCase } from "../../application/CircuitDataUseCase";

export class DatasController {
    constructor(readonly circuitData: CircuitDataUseCase) {};

    extractCircuitDatas = async (req: Request, res: Response) => {
        try {
            const {humidity, temperature, pressure} = req.body;
            await this.circuitData.sendCircuitData(humidity,temperature,pressure);
            res.status(200).json({message: "OK"});
        } catch (error) {
            res.status(500).json({ error: "Internal Server error" });    
        }
    }
}