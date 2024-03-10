import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantScoreDto } from './create-restaurant-score.dto';

export class UpdateRestaurantScoreDto extends PartialType(
  CreateRestaurantScoreDto,
) {}
