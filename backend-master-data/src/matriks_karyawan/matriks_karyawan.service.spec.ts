import { Test, TestingModule } from '@nestjs/testing';
import { MatriksKaryawanService } from './matriks_karyawan.service';

describe('MatriksKaryawanService', () => {
  let service: MatriksKaryawanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatriksKaryawanService],
    }).compile();

    service = module.get<MatriksKaryawanService>(MatriksKaryawanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
