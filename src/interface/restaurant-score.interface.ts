import { Document, Types } from 'mongoose';

export interface IRestaurantScore extends Document {
  readonly dishId: Types.ObjectId;
  readonly restaurantId: Types.ObjectId;
  readonly score: number;
}
