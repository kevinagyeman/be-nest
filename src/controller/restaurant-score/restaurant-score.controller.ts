import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateRestaurantScoreDto } from 'src/dto/restaurant-score/create-restaurant-score.dto';
import { UpdateRestaurantScoreDto } from 'src/dto/restaurant-score/update-restaurant-score.dto';
import { RestaurantScoreService } from 'src/service/restaurant-score/restaurant-score.service';

@Controller('restaurant-score')
export class RestaurantScoreController {
  constructor(
    private readonly restaurantScoreService: RestaurantScoreService,
  ) {}

  @Post()
  async createRestaurantScore(
    @Res() response,
    @Body() createRestaurantScoreDto: CreateRestaurantScoreDto,
  ) {
    try {
      const newRestaurantScore =
        await this.restaurantScoreService.createRestaurantScore(
          createRestaurantScoreDto,
        );
      return response.status(HttpStatus.CREATED).json({
        message: 'RestaurantScore has been created successfully',
        newRestaurantScore,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: RestaurantScore not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateRestaurantScore(
    @Res() response,
    @Param('id') restaurantScoreId: string,
    @Body() updateRestaurantScoreDto: UpdateRestaurantScoreDto,
  ) {
    try {
      const existingRestaurantScore =
        await this.restaurantScoreService.updateRestaurantScore(
          restaurantScoreId,
          updateRestaurantScoreDto,
        );
      return response.status(HttpStatus.OK).json({
        message: 'RestaurantScore has been successfully updated',
        existingRestaurantScore,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getRestaurantScores(@Res() response) {
    try {
      const restaurantScoreData =
        await this.restaurantScoreService.getAllRestaurantScores();
      return response.status(HttpStatus.OK).json({
        message: 'All restaurantScores data found successfully',
        restaurantScoreData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getRestaurantScore(
    @Res() response,
    @Param('id') restaurantScoreId: string,
  ) {
    try {
      const existingRestaurantScore =
        await this.restaurantScoreService.getRestaurantScore(restaurantScoreId);
      return response.status(HttpStatus.OK).json({
        message: 'RestaurantScore found successfully',
        existingRestaurantScore,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteRestaurantScore(
    @Res() response,
    @Param('id') restaurantScoreId: string,
  ) {
    try {
      const deletedRestaurantScore =
        await this.restaurantScoreService.deleteRestaurantScore(
          restaurantScoreId,
        );
      return response.status(HttpStatus.OK).json({
        message: 'RestaurantScore deleted successfully',
        deletedRestaurantScore,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
