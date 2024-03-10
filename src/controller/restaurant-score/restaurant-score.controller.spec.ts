import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantScoreController } from './restaurant-score.controller';

describe('RestaurantScoreController', () => {
  let controller: RestaurantScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantScoreController],
    }).compile();

    controller = module.get<RestaurantScoreController>(RestaurantScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
