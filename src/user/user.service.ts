import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { userCreateDTO } from 'src/dtos/create-user.dto';
import { userUpdateDTO } from 'src/dtos/edit-user.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly modelUser: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.modelUser.find();
    return users;
  }

  async findOne(id: string) {
    try {
      const user = await this.modelUser.findById(id);
      if (!user) throw new NotFoundException('Not found user with thet id');
      return {
        msg: 'Successfully serched',
        user,
      };
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Not found user with thet id');
    }
  }

  async createUser(newUser: userCreateDTO) {
    const user = await this.modelUser.create(newUser);
    user.save();
    delete user.password;
    return user;
  }

  async updateUser(id: string, editUser: userUpdateDTO) {
    try {
      const user = await this.modelUser.findOne({ _id: id });
      if (!user) throw new NotFoundException('Error on updated user');
      const newUser = Object.assign(user, editUser);
      newUser.save();
      return newUser;
    } catch (e) {
      throw new NotFoundException('Error on updated user');
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.modelUser.findOneAndDelete({ _id: id });
      return { msg: 'Successfully deleted' };
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Not found user that id');
    }
  }
}
