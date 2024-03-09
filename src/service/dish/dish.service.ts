import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDishDto } from 'src/dto/dish/create-dish.dto';
import { IDish } from 'src/interface/dish.interface';
import { Model } from 'mongoose';
import { UpdateDishDto } from 'src/dto/dish/update-dish.dto';

@Injectable()
export class DishService {
  constructor(@InjectModel('Dish') private dishModel: Model<IDish>) {}

  async createDish(createDishDto: CreateDishDto): Promise<IDish> {
    const newDish = await new this.dishModel(createDishDto);
    return newDish.save();
  }

  async updateDish(
    dishId: string,
    updateDishDto: UpdateDishDto,
  ): Promise<IDish> {
    const existingDish = await this.dishModel.findByIdAndUpdate(
      dishId,
      updateDishDto,
      { new: true },
    );
    if (!existingDish) {
      throw new NotFoundException(`Dish #${dishId} not found`);
    }
    return existingDish;
  }

  async getAllDishs(): Promise<IDish[]> {
    const dishData = await this.dishModel.find();
    if (!dishData || dishData.length == 0) {
      throw new NotFoundException('Dishs data not found!');
    }
    return dishData;
  }

  async getDish(dishId: string): Promise<IDish> {
    const existingDish = await this.dishModel.findById(dishId).exec();
    if (!existingDish) {
      throw new NotFoundException(`Dish #${dishId} not found`);
    }
    return existingDish;
  }

  async deleteDish(dishId: string): Promise<IDish> {
    const deletedDish = await this.dishModel.findByIdAndDelete(dishId);
    if (!deletedDish) {
      throw new NotFoundException(`Dish #${dishId} not found`);
    }
    return deletedDish;
  }
}
