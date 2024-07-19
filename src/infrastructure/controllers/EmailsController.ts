import { Request, Response } from "express";
import { RegisterUserUseaCase } from "../../application/RegisterUserUseCase";

export class EmailsController {
    constructor(readonly newUser: RegisterUserUseaCase) {};

    UserRegister = async (req: Request, res: Response) => {
        try {
            const { email } = req.body;
            const newEmail = await this.newUser.registerTopic(email);

            res.status(200).json(newEmail);
        } catch (error) {
            res.status(500).json({ error: "Internal Server error" });    
        }
    }
}