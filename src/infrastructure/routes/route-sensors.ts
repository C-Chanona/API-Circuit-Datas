import { Router } from "express";
import { datasController } from "../dependencies/dependencies";

export const routes_sensor = Router();

routes_sensor.post("/datas", datasController.extractCircuitDatas.bind(datasController));