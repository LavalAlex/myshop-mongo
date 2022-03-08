import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { updateList } from 'src/dtos/edit-list.dot';
import { updateInputList } from 'src/input/list.input';
import { List } from 'src/schemas/list.schema';
import { User } from 'src/schemas/user.schema';
import { ListService } from './list.service';

@Resolver()
export class ListResolver {
    
    constructor(private readonly listService: ListService){}
    @Query(()=> String)
    helloAngel(){
        return 'Hi Angel, it is list'
    }

    @Query(()=> [List])
    async allList(){
        const lists = await this.listService.allList()

        console.log(lists)
        return lists
    }

    @Mutation(()=> List)
    async editList(@Args('input') input:updateInputList){
        console.log(input)
        const editList = await this.listService.updteList(input.idList, input)
        return editList
    }

    @Mutation(()=> [List])
    async lists(@Args('idUser') idUser: string){
        const userLists = await this.listService.findListUser(idUser)
        return userLists
    }
}
