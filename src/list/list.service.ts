import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { List, ListDocument } from 'src/schemas/list.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { createListDTO } from 'src/dtos/create-list.dto';
import { updateList } from 'src/dtos/edit-list.dot';
import { updateInputList } from 'src/input/list.input';
import e from 'express';


@Injectable()
export class ListService {
  constructor(
    @InjectModel(List.name) private  modeList: Model<ListDocument>,
    @InjectModel(User.name) private  modelUser: Model<UserDocument>,
  ) {}

  async createList(input: createListDTO): Promise<List> {
    try {
      const user = await this.modelUser.findOne({ _id: input.uderId });
      const newList = new List();
      newList.list = input.list;
      newList.total = input.total;
      newList.user = user;
      const list = await this.modeList.create(newList);
      list.save();
      return list;
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Not found user with thet id');
    }
  }

  async allList(){
      const lists = await this.modeList.find()
      return lists
  }

  async updteList(id:String, input:updateInputList){
      console.log(id)
      const list = await this.modeList.findOne({_id:id})
      console.log(list)
      if(!list) throw new NotFoundException('Not found list with that id')
      const newList = Object.assign(list, input)
      newList.save()
      return newList
  }

  async findListUser(idUser: String){
      const user = await this.modelUser.findById(idUser)
    const userLists = await this.modeList.find({user})
    console.log(userLists)
    return userLists
  }
}
