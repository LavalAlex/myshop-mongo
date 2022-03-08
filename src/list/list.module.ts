import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from 'src/schemas/list.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { ListController } from './list.controller';
import { ListResolver } from './list.resolver';
import { ListService } from './list.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: List.name,
        schema: ListSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [ListController],
  providers: [ListResolver, ListService],
})
export class ListModule {}
