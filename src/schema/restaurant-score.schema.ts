import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class RestaurantScore {
  @Prop()
  dishId: Types.ObjectId;

  @Prop()
  restaurantId: Types.ObjectId;

  @Prop()
  score: number;
}
export const RestaurantScoreSchema =
  SchemaFactory.createForClass(RestaurantScore);
