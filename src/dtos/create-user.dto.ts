import { IsAlpha, IsBoolean, IsEmail, IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { UserRoles } from '../enum/user.enum';

export class userCreateDTO {
  @IsString()
  @IsAlpha()
  @MinLength(4)
  @MaxLength(128)
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  readonly password: string

  @IsEnum(UserRoles, {
    message: `Invalid option. Valids options are: -${Object.values(UserRoles).filter(value => typeof value==='string' )}-`,
})
  readonly roles: UserRoles;
}
