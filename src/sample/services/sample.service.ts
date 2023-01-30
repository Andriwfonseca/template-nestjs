import { Injectable } from "@nestjs/common";
import { AddUserExampleDto } from "../dtos/add-user-example.dto";

@Injectable()
export class SampleService {
    public async ping () {
        return {
            "ping": true
        }
    }

    public async pong () {
        return {
            "pong": true
        }
    }

    public async addUser(dto: AddUserExampleDto){
        const user = {
            name: dto.name,
            email: dto.email
        };
        return {user}
    }
}