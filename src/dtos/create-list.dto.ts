import { IsArray, IsNumber, IsString } from "class-validator";

export class createListDTO{
    @IsArray()
    list: [string]

    @IsNumber()
    total: number

    @IsString()
    uderId:string;
}