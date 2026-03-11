import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanService } from './pekerjaan.service';

describe('PekerjaanService', () => {
  let service: PekerjaanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PekerjaanService],
    }).compile();

    service = module.get<PekerjaanService>(PekerjaanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
