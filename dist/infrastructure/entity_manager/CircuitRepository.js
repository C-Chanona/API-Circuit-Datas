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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircuitRepository = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
// //Para el server
// import express from "express";
// import http from "http";
// import socketIO from "socket.io";
// const server = http.createServer(express());
// // const io = socketIO.listen(server);
// server.listen(3000, () => {
//     console.log('server listening on port', 3000);
// });
class CircuitRepository {
    circuitData(humidity, temperature, pressure) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullDatas = {
                humidity: humidity,
                temperature: temperature,
                pressure: pressure
            };
            let sendDatas = JSON.stringify(fullDatas);
            console.log(typeof sendDatas);
            //envio a la cola
            (() => __awaiter(this, void 0, void 0, function* () {
                const queue = 'data';
                const conn = yield amqplib_1.default.connect('amqp://44.216.167.198');
                console.log("Conexion exitosa");
                const channel = yield conn.createChannel();
                // Sender
                yield channel.sendToQueue(queue, Buffer.from(sendDatas));
            }))();
        });
    }
}
exports.CircuitRepository = CircuitRepository;
