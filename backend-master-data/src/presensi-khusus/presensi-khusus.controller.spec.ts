import { Test, TestingModule } from '@nestjs/testing';
import { PresensiKhususController } from './presensi-khusus.controller';
import { PresensiKhususService } from './presensi-khusus.service';

describe('PresensiKhususController', () => {
  let controller: PresensiKhususController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresensiKhususController],
      providers: [PresensiKhususService],
    }).compile();

    controller = module.get<PresensiKhususController>(PresensiKhususController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
