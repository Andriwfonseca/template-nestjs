import { Controller, Get, Body, Render, Post } from '@nestjs/common';
import {  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SampleService } from '../services/sample.service';
import { AddUserExampleDto } from '../dtos/add-user-example.dto';

@Controller('sample')
@ApiTags('sample')
export class SampleController {

    constructor(private readonly sampleService: SampleService) {
    }

    @Get('/ping')
    @ApiOperation({
        summary: "Ping",
        description: "Exemplo de API com autenticação"
    })
    @ApiResponse({ status: 200, description: "" })
    public async Ping () {
        return this.sampleService.ping();
    }

    @Get('/pong')
    @ApiOperation({
        summary: "Pong",
        description: "Exemplo de API sem autenticação"
    })
    @ApiResponse({ status: 200, description: "" })
    public async Pong () {
        return this.sampleService.pong();
    }

    @Post('/add-user-example')
    @ApiOperation({
        summary: "Adiciona usuário",
        description: "Exemplo de API para adicionar usuário"
    })
    @ApiResponse({ status: 200, description: "" })
    public async addUserExample (@Body() dto: AddUserExampleDto) {
        return this.sampleService.addUser(dto);
    }

    @Get('/pagina-exemplo')
    @Render('pagina-exemplo/pagina')
    public async page () {          
        return {  layout: "template" };
    }
}