import { Test, TestingModule } from '@nestjs/testing';
import { MatriksKaryawanController } from './matriks_karyawan.controller';
import { MatriksKaryawanService } from './matriks_karyawan.service';

describe('MatriksKaryawanController', () => {
  let controller: MatriksKaryawanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriksKaryawanController],
      providers: [MatriksKaryawanService],
    }).compile();

    controller = module.get<MatriksKaryawanController>(MatriksKaryawanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
