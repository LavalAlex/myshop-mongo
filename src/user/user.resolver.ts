import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor(private readonly userService: UserService){}

    @Query(() => String)
    sayHelloUser(){
        return 'Hello Angel'
    }

    @Query(()=> [User])
    async getUsers(){
        const users = await this.userService.findAll()
        console.log(users)
        return users
    }
}
