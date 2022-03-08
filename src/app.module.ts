import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    UserModule,
    ListModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schemas/schema.gql',
      sortSchema: true ,
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
     }),
     MongooseModule.forRoot('mongodb://localhost:27020/myshop-mongo'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
