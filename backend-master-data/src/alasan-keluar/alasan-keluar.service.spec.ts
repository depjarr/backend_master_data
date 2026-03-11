import { Test, TestingModule } from '@nestjs/testing';
import { AlasanKeluarService } from './alasan-keluar.service';

describe('AlasanKeluarService', () => {
  let service: AlasanKeluarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlasanKeluarService],
    }).compile();

    service = module.get<AlasanKeluarService>(AlasanKeluarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
