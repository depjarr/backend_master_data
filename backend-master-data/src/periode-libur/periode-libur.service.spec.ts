import { Test, TestingModule } from '@nestjs/testing';
import { PeriodeLiburService } from './periode-libur.service';

describe('PeriodeLiburService', () => {
  let service: PeriodeLiburService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodeLiburService],
    }).compile();

    service = module.get<PeriodeLiburService>(PeriodeLiburService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
