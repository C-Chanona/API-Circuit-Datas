"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_sensor = void 0;
const express_1 = require("express");
const dependencies_1 = require("../dependencies/dependencies");
exports.routes_sensor = (0, express_1.Router)();
exports.routes_sensor.post("/datas", dependencies_1.datasController.extractCircuitDatas.bind(dependencies_1.datasController));
