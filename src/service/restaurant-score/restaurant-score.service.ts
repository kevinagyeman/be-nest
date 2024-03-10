import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantScoreDto } from 'src/dto/restaurant-score/create-restaurant-score.dto';
import { UpdateRestaurantScoreDto } from 'src/dto/restaurant-score/update-restaurant-score.dto';
import { IRestaurantScore } from 'src/interface/restaurant-score.interface';

@Injectable()
export class RestaurantScoreService {
  constructor(
    @InjectModel('RestaurantScore')
    private restaurantScoreModel: Model<IRestaurantScore>,
  ) {}

  async createRestaurantScore(
    createRestaurantScoreDto: CreateRestaurantScoreDto,
  ): Promise<IRestaurantScore> {
    const newRestaurantScore = await new this.restaurantScoreModel(
      createRestaurantScoreDto,
    );
    return newRestaurantScore.save();
  }

  async updateRestaurantScore(
    restaurantScoreId: string,
    updateRestaurantScoreDto: UpdateRestaurantScoreDto,
  ): Promise<IRestaurantScore> {
    const existingRestaurantScore =
      await this.restaurantScoreModel.findByIdAndUpdate(
        restaurantScoreId,
        updateRestaurantScoreDto,
        { new: true },
      );
    if (!existingRestaurantScore) {
      throw new NotFoundException(
        `RestaurantScore #${restaurantScoreId} not found`,
      );
    }
    return existingRestaurantScore;
  }

  async getAllRestaurantScores(): Promise<IRestaurantScore[]> {
    const restaurantScoreData = await this.restaurantScoreModel.find();
    if (!restaurantScoreData || restaurantScoreData.length == 0) {
      throw new NotFoundException('RestaurantScores data not found!');
    }
    return restaurantScoreData;
  }

  async getRestaurantScore(
    restaurantScoreId: string,
  ): Promise<IRestaurantScore> {
    const existingRestaurantScore = await this.restaurantScoreModel
      .findById(restaurantScoreId)
      .exec();
    if (!existingRestaurantScore) {
      throw new NotFoundException(
        `RestaurantScore #${restaurantScoreId} not found`,
      );
    }
    return existingRestaurantScore;
  }

  async deleteRestaurantScore(
    restaurantScoreId: string,
  ): Promise<IRestaurantScore> {
    const deletedRestaurantScore =
      await this.restaurantScoreModel.findByIdAndDelete(restaurantScoreId);
    if (!deletedRestaurantScore) {
      throw new NotFoundException(
        `RestaurantScore #${restaurantScoreId} not found`,
      );
    }
    return deletedRestaurantScore;
  }
}
