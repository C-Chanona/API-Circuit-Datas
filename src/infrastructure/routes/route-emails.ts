import { Router } from "express";
import { emailController } from "../dependencies/dependencies";

export const routes_email = Router();

routes_email.post("/email", emailController.UserRegister.bind(emailController));