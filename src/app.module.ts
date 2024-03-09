import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishController } from './controller/dish/dish.controller';
import { DishSchema } from './schema/dish.schema';
import { DishService } from './service/dish/dish.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017', {
      dbName: 'myfoodrank-db',
    }),
    MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }]),
  ],
  controllers: [AppController, DishController, DishController],
  providers: [AppService, DishService, DishService],
})
export class AppModule {}
