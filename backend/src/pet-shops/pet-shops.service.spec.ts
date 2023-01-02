import { Test, TestingModule } from '@nestjs/testing';
import { PetShopsService } from './pet-shops.service';

describe('PetShopsService', () => {
  let service: PetShopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetShopsService],
    }).compile();

    service = module.get<PetShopsService>(PetShopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    const teste = service.findAll();
  });
});
