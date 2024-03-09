import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDto } from 'src/dto/restaurant/create-restaurant.dto';
import { UpdateRestaurantDto } from 'src/dto/restaurant/update-restaurant.dto';
import { IRestaurant } from 'src/interface/restaurant.interface';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel('Restaurant') private restaurantModel: Model<IRestaurant>,
  ) {}

  async createRestaurant(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<IRestaurant> {
    const newRestaurant = await new this.restaurantModel(createRestaurantDto);
    return newRestaurant.save();
  }

  async updateRestaurant(
    restaurantId: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<IRestaurant> {
    const existingRestaurant = await this.restaurantModel.findByIdAndUpdate(
      restaurantId,
      updateRestaurantDto,
      { new: true },
    );
    if (!existingRestaurant) {
      throw new NotFoundException(`Restaurant #${restaurantId} not found`);
    }
    return existingRestaurant;
  }

  async getAllRestaurants(): Promise<IRestaurant[]> {
    const restaurantData = await this.restaurantModel.find();
    if (!restaurantData || restaurantData.length == 0) {
      throw new NotFoundException('Restaurants data not found!');
    }
    return restaurantData;
  }

  async getRestaurant(restaurantId: string): Promise<IRestaurant> {
    const existingRestaurant = await this.restaurantModel
      .findById(restaurantId)
      .exec();
    if (!existingRestaurant) {
      throw new NotFoundException(`Restaurant #${restaurantId} not found`);
    }
    return existingRestaurant;
  }

  async deleteRestaurant(restaurantId: string): Promise<IRestaurant> {
    const deletedRestaurant =
      await this.restaurantModel.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) {
      throw new NotFoundException(`Restaurant #${restaurantId} not found`);
    }
    return deletedRestaurant;
  }
}
