import { ICircuitRepository } from "../domain/repositorys/ICircuitRepository";

export class CircuitDataUseCase {

    //El caso de uso recibe el repository para poder inicializarlo y tener acceso a sus metodos
    constructor(readonly circuitRepository: ICircuitRepository){};

    //metodo que hace uso del repository
    async sendCircuitData(humidity: number, temperature: number, pressure: number) {
        return this.circuitRepository.circuitData(humidity, temperature, pressure)
        .then((data) => {
            return data;
        }).catch((error) => {
            console.log(error);
        });
    };
};