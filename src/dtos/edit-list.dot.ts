import { PartialType } from "@nestjs/mapped-types";
import { createListDTO } from "./create-list.dto";

export class updateList extends PartialType(createListDTO){
    idList: String
}