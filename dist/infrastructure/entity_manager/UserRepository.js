"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
const dotenv_1 = require("dotenv");
class UsersRepository {
    TopicSubscription(email) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, dotenv_1.config)();
            const sns = new aws_sdk_1.SNS({
                accessKeyId: process.env.ACCESS_KEY_ID,
                secretAccessKey: process.env.SECRET_ACCESS_KEY,
                region: process.env.REGION
            });
            //Definicion de los parametros del mensaje SNS
            const paramsMessage = {
                Protocol: 'EMAIL',
                TopicArn: process.env.TOPIC_EMAIL || "",
                Endpoint: email
            };
            //Suscribcion del usuario al sns
            sns.subscribe(paramsMessage, (err, data) => {
                if (err) {
                    console.log("Error al suscribirse a SNS", err);
                    return "Error al suscribirse, por favor intentelo de nuevo y asegurese de contar con una direccion de correo valida";
                }
                else {
                    console.log("Usuario suscrito a SNS correctamente", data);
                }
            });
            return "Enviamos un correo de confirmacion a su direccion de correo electronico, por favor confirme la suscripcion";
        });
    }
}
exports.UsersRepository = UsersRepository;
