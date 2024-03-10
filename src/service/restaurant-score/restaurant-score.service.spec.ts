import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantScoreService } from './restaurant-score.service';

describe('RestaurantScoreService', () => {
  let service: RestaurantScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantScoreService],
    }).compile();

    service = module.get<RestaurantScoreService>(RestaurantScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
