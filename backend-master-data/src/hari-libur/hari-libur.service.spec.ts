import { Test, TestingModule } from '@nestjs/testing';
import { HariLiburService } from './hari-libur.service';

describe('HariLiburService', () => {
  let service: HariLiburService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HariLiburService],
    }).compile();

    service = module.get<HariLiburService>(HariLiburService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
