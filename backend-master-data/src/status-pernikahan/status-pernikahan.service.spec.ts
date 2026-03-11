import { Test, TestingModule } from '@nestjs/testing';
import { StatusPernikahanService } from './status-pernikahan.service';

describe('StatusPernikahanService', () => {
  let service: StatusPernikahanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusPernikahanService],
    }).compile();

    service = module.get<StatusPernikahanService>(StatusPernikahanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
