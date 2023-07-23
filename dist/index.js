"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const route_sensors_1 = require("./infrastructure/routes/route-sensors");
const route_emails_1 = require("./infrastructure/routes/route-emails");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/sensors", route_sensors_1.routes_sensor);
app.use("/topic", route_emails_1.routes_email);
// import WebSocket from "ws";
// const wsServer = new WebSocket.Server({ port: 8080 });
// wsServer.on('connection', (ws) => {
//     console.log('Cliente WebSocket conectado');
//     // Manejar mensajes recibidos desde el cliente WebSocket
//     ws.on('message', (message) => {
//         console.log('Mensaje recibido del cliente WebSocket:', message);
//     });
//     // Manejar el cierre de la conexión del cliente WebSocket
//     ws.on('close', () => {
//         console.log('Cliente WebSocket desconectado');
//     });
// });
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`);
});
