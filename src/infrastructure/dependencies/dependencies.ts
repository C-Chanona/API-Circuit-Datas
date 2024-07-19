import { DatasController } from "../controllers/DatasController";
import { EmailsController } from "../controllers/EmailsController";


import { UsersRepository } from "../entity_manager/UserRepository";
import { CircuitRepository } from "../entity_manager/CircuitRepository";

import { RegisterUserUseaCase } from "../../application/RegisterUserUseCase";
import { CircuitDataUseCase } from "../../application/CircuitDataUseCase";

const usersRep = new UsersRepository();
const circuitRep = new CircuitRepository();


const newUser = new RegisterUserUseaCase(usersRep);
const extractDatas = new CircuitDataUseCase(circuitRep);

export const datasController = new DatasController(extractDatas);
export const emailController = new EmailsController(newUser);