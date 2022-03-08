import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { hash } from 'bcryptjs';
import { UserRoles } from 'src/enum/user.enum';
import{BeforeInsert, BeforeUpdate} from 'typeorm'
import { Field, ObjectType } from '@nestjs/graphql';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop({ type: String, minlength: 4, maxlength: 10 })
  @Field()
  username: string;

  @Prop({ type: String })
  @IsEmail()
  @MinLength(4)
  @MaxLength(16)
  @Field()
  email: string;

  @Prop()
  @MinLength(4)
  @MaxLength(16)
  @Field()
  password: string;

  @Prop()
  @Field()
  roles: UserRoles;

}

export const UserSchema = SchemaFactory.createForClass(User);