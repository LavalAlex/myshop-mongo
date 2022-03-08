import { PartialType, OmitType } from "@nestjs/mapped-types";
import { userCreateDTO } from "./create-user.dto";
import { UserRoles } from '../enum/user.enum';

export class userUpdateDTO extends PartialType(
   OmitType(userCreateDTO, ['password'] as const)){

}
