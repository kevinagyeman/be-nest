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
import { CreateRestaurantDto } from 'src/dto/restaurant/create-restaurant.dto';
import { UpdateRestaurantDto } from 'src/dto/restaurant/update-restaurant.dto';
import { RestaurantService } from 'src/service/restaurant/restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async createRestaurant(
    @Res() response,
    @Body() createRestaurantDto: CreateRestaurantDto,
  ) {
    try {
      const newRestaurant =
        await this.restaurantService.createRestaurant(createRestaurantDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Restaurant has been created successfully',
        newRestaurant,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Restaurant not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateRestaurant(
    @Res() response,
    @Param('id') restaurantId: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    try {
      const existingRestaurant = await this.restaurantService.updateRestaurant(
        restaurantId,
        updateRestaurantDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Restaurant has been successfully updated',
        existingRestaurant,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getRestaurants(@Res() response) {
    try {
      const restaurantData = await this.restaurantService.getAllRestaurants();
      return response.status(HttpStatus.OK).json({
        message: 'All restaurants data found successfully',
        restaurantData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getRestaurant(@Res() response, @Param('id') restaurantId: string) {
    try {
      const existingRestaurant =
        await this.restaurantService.getRestaurant(restaurantId);
      return response.status(HttpStatus.OK).json({
        message: 'Restaurant found successfully',
        existingRestaurant,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteRestaurant(@Res() response, @Param('id') restaurantId: string) {
    try {
      const deletedRestaurant =
        await this.restaurantService.deleteRestaurant(restaurantId);
      return response.status(HttpStatus.OK).json({
        message: 'Restaurant deleted successfully',
        deletedRestaurant,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
