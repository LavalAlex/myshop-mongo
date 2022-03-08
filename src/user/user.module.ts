import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:User.name, schema: UserSchema
  }])],
  providers: [UserService, UserResolver],
  controllers: [UserController]
})
export class UserModule {}
