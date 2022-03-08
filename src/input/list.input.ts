import { Field, InputType } from "@nestjs/graphql";
import { PartialType } from "@nestjs/mapped-types";
import { IsArray, IsNumber, IsString } from "class-validator";
import { createListDTO } from "../dtos/create-list.dto";

@InputType()
export class updateInputList{
    
    @Field(()=> String,{nullable:false})
    @IsString()
    idList: string

    @Field(()=> [String], {nullable:true})
    @IsArray()
    list: [string]

    @Field({nullable:true})
    @IsNumber()
    total: number
    
    @Field({nullable:true})
    @IsString()
    uderId:string;
}