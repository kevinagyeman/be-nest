import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DishController } from './controller/dish/dish.controller';
import { DishSchema } from './schema/dish.schema';
import { DishService } from './service/dish/dish.service';
import { RestaurantController } from './controller/restaurant/restaurant.controller';
import { RestaurantService } from './service/restaurant/restaurant.service';
import { RestaurantSchema } from './schema/restaurant.schema';
import { RestaurantScoreService } from './service/restaurant-score/restaurant-score.service';
import { RestaurantScoreController } from './controller/restaurant-score/restaurant-score.controller';
import { RestaurantScoreSchema } from './schema/restaurant-score.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017', {
      dbName: 'myfoodrank-db',
    }),
    MongooseModule.forFeature([
      { name: 'Dish', schema: DishSchema },
      { name: 'Restaurant', schema: RestaurantSchema },
      { name: 'RestaurantScore', schema: RestaurantScoreSchema },
    ]),
  ],
  controllers: [
    AppController,
    DishController,
    RestaurantController,
    RestaurantScoreController,
  ],
  providers: [
    AppService,
    DishService,
    RestaurantService,
    RestaurantScoreService,
  ],
})
export class AppModule {}
