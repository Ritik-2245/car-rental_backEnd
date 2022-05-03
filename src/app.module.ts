import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentModule } from './components/cars/component.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ConfigModule.forRoot(),DatabaseModule,GraphQLModule.forRoot<ApolloDriverConfig>(
{
  driver:ApolloDriver,
  playground:process.env.NODE_ENV==="Development",
  debug:process.env.NODE_ENV==="Development",
  autoSchemaFile:true
,
}

  ),ComponentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
