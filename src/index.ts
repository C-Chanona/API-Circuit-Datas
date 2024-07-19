import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import { routes_sensor } from "./infrastructure/routes/route-sensors";
import { routes_email } from "./infrastructure/routes/route-emails";

config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use("/sensors", routes_sensor);
app.use("/topic", routes_email);

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
})