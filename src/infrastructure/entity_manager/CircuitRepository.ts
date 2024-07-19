import { NumberLengthBetween12And19 } from "aws-sdk/clients/paymentcryptographydata";
import { ICircuitRepository } from "../../domain/repositorys/ICircuitRepository";
import amqplib from "amqplib";
// //Para el server
// import express from "express";
// import http from "http";
// import socketIO from "socket.io";

// const server = http.createServer(express());
// // const io = socketIO.listen(server);

// server.listen(3000, () => {
//     console.log('server listening on port', 3000);
// });

export class CircuitRepository implements ICircuitRepository {

    async circuitData(humidity: number, temperature: number, pressure: number): Promise<void | null> {

        type PropFullData = {
            humidity: number;
            temperature: number;
            pressure: number;
        };
        const fullDatas: PropFullData = {
            humidity: humidity,
            temperature: temperature,
            pressure: pressure
        };

        let sendDatas = JSON.stringify(fullDatas);
        console.log(typeof sendDatas);

        //envio a la cola
        (async () => {
            const queue = 'data';
            const conn = await amqplib.connect('amqp://44.216.167.198');
            console.log("Conexion exitosa");
            const channel = await conn.createChannel();

            // Sender
            await channel.sendToQueue(queue, Buffer.from(sendDatas));
        })();
    }
}