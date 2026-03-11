import { Test, TestingModule } from '@nestjs/testing';
import { PeriodeLiburController } from './periode-libur.controller';
import { PeriodeLiburService } from './periode-libur.service';

describe('PeriodeLiburController', () => {
  let controller: PeriodeLiburController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeriodeLiburController],
      providers: [PeriodeLiburService],
    }).compile();

    controller = module.get<PeriodeLiburController>(PeriodeLiburController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
