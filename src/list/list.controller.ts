import { Body, Controller, Get, Post } from '@nestjs/common';
import { createListDTO } from 'src/dtos/create-list.dto';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
    constructor(private readonly listService: ListService ){}

    @Post()
    async createList(@Body() input:createListDTO){
        const newList = await this.listService.createList(input)
        return {
            msg:'Successfulle created',
            newList
        }
    }

    @Get()
    async getAll(){
        const list = await this.listService.allList()
        return{
            msg:'Successfully searched',
            list
        }
    }
}
