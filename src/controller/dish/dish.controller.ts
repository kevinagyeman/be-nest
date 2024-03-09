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
import { CreateDishDto } from 'src/dto/dish/create-dish.dto';
import { UpdateDishDto } from 'src/dto/dish/update-dish.dto';
import { DishService } from 'src/service/dish/dish.service';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Post()
  async createDish(@Res() response, @Body() createDishDto: CreateDishDto) {
    try {
      const newDish = await this.dishService.createDish(createDishDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Dish has been created successfully',
        newDish,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Dish not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateDish(
    @Res() response,
    @Param('id') dishId: string,
    @Body() updateDishDto: UpdateDishDto,
  ) {
    try {
      const existingDish = await this.dishService.updateDish(
        dishId,
        updateDishDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Dish has been successfully updated',
        existingDish,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getDishs(@Res() response) {
    try {
      const dishData = await this.dishService.getAllDishs();
      return response.status(HttpStatus.OK).json({
        message: 'All dishs data found successfully',
        dishData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getDish(@Res() response, @Param('id') dishId: string) {
    try {
      const existingDish = await this.dishService.getDish(dishId);
      return response.status(HttpStatus.OK).json({
        message: 'Dish found successfully',
        existingDish,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteDish(@Res() response, @Param('id') dishId: string) {
    try {
      const deletedDish = await this.dishService.deleteDish(dishId);
      return response.status(HttpStatus.OK).json({
        message: 'Dish deleted successfully',
        deletedDish,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
