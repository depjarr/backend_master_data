import { Test, TestingModule } from '@nestjs/testing';
import { StatusKehadiranService } from './status-kehadiran.service';

describe('StatusKehadiranService', () => {
  let service: StatusKehadiranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusKehadiranService],
    }).compile();

    service = module.get<StatusKehadiranService>(StatusKehadiranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
