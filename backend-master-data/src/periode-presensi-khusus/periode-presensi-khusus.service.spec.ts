import { Test, TestingModule } from '@nestjs/testing';
import { PeriodePresensiKhususService } from './periode-presensi-khusus.service';

describe('PeriodePresensiKhususService', () => {
  let service: PeriodePresensiKhususService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodePresensiKhususService],
    }).compile();

    service = module.get<PeriodePresensiKhususService>(PeriodePresensiKhususService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
