import { IUsersRepository } from "../domain/repositorys/IUsersRepository";

export class RegisterUserUseaCase {

    //El caso de uso recibe el repository para poder inicializarlo y tener acceso a sus metodos
    constructor(readonly userRepository: IUsersRepository){};

    //metodo que hace uso del repository
    async registerTopic(email: string){
        return this.userRepository.TopicSubscription(email)
        .then((newUser) => {
            console.log(newUser);
            return newUser;
        }).catch((error) => {
            console.log(error);
        });
    };
};