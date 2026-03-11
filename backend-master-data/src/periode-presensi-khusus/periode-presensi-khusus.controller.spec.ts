import { Test, TestingModule } from '@nestjs/testing';
import { PeriodePresensiKhususController } from './periode-presensi-khusus.controller';
import { PeriodePresensiKhususService } from './periode-presensi-khusus.service';

describe('PeriodePresensiKhususController', () => {
  let controller: PeriodePresensiKhususController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodePresensiKhususController],
      providers: [PeriodePresensiKhususService],
    }).compile();

    controller = module.get<PeriodePresensiKhususController>(PeriodePresensiKhususController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
