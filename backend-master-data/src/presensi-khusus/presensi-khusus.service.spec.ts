import { Test, TestingModule } from '@nestjs/testing';
import { PresensiKhususService } from './presensi-khusus.service';

describe('PresensiKhususService', () => {
  let service: PresensiKhususService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresensiKhususService],
    }).compile();

    service = module.get<PresensiKhususService>(PresensiKhususService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
