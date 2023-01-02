import { Test, TestingModule } from '@nestjs/testing';
import { PetShopsController } from './pet-shops.controller';
import { PetShopsService } from './pet-shops.service';

describe('PetShopsController', () => {
  let controller: PetShopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetShopsController],
      providers: [PetShopsService],
    }).compile();

    controller = module.get<PetShopsController>(PetShopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
