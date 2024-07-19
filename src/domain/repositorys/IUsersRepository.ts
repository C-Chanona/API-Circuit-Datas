import { Users } from "../entities/Users";

export interface IUsersRepository {
    
    TopicSubscription(email: string): Promise <string | null>;
}