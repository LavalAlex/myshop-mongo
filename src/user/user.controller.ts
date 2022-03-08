import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { userCreateDTO } from 'src/dtos/create-user.dto';
import { userUpdateDTO } from 'src/dtos/edit-user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async allUsers() {
    const allUsers = await this.userService.findAll();
    console.log(allUsers)
    return { msg: 'Successfully serached', allUsers };
  }

  @Post()
  async createUser(@Body() newUser: userCreateDTO) {
    const user = await this.userService.createUser(newUser);
    return {
      msg: 'Successfully create',
      user,
    };
  }

  @Put('/:id')
  async updateUser(
      @Param('id') id:string, 
      @Body() input: userUpdateDTO
    ) {
    const editUser = await this.userService.updateUser(id, input);
    return {
      msg: 'Successfully updated',
      editUser,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id:string){
      return await this.userService.findOne(id)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
      return await this.userService.deleteUser(id)
  }
}
