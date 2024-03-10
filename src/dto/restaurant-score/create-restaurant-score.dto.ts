import { IsInt, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateRestaurantScoreDto {
  @IsNotEmpty()
  readonly dishId: Types.ObjectId;

  @IsNotEmpty()
  readonly restaurantId: Types.ObjectId;

  @IsInt()
  @IsNotEmpty()
  readonly score: number;
}
