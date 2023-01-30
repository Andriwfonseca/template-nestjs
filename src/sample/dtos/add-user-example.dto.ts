import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class AddUserExampleDto {
    @ApiProperty()
    @IsNotEmpty({ message: "Nome inválido" })
    public name: string;
    
    @ApiProperty()
    @IsEmail({}, { message: "E-mail inválido" })
    public email: string;
}