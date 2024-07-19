import { SubscribeInput } from "aws-sdk/clients/sns";
import { IUsersRepository } from "../../domain/repositorys/IUsersRepository";
import { SNS } from "aws-sdk";
import { config } from "dotenv";

export class UsersRepository implements IUsersRepository {

    async TopicSubscription(email: string): Promise<string | null> {
        config();
        const sns = new SNS({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            region: process.env.REGION
        })

        //Definicion de los parametros del mensaje SNS
        const paramsMessage: SubscribeInput = {
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
    }
    
}