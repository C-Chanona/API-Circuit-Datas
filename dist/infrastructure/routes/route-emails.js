"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes_email = void 0;
const express_1 = require("express");
const dependencies_1 = require("../dependencies/dependencies");
exports.routes_email = (0, express_1.Router)();
exports.routes_email.post("/email", dependencies_1.emailController.UserRegister.bind(dependencies_1.emailController));
