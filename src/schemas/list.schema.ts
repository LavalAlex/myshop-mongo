import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { User } from './user.schema';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

export type ListDocument = List & Document;

@Schema()
@ObjectType()
export class List {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Field()
  id: string;

  @Prop({nulleable:false})
  @Field(()=> [String])
  list: [string];

  @Prop({ type: 'number', nullable: false })
  @Field(()=> Float)
  total: number;

  @Prop()
  @Field(()=> User)
  user: User;
}

export const ListSchema = SchemaFactory.createForClass(List);
