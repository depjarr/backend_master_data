import { Test, TestingModule } from '@nestjs/testing';
import { PengurangKompetenKinerjaController } from './pengurang-kompeten-kinerja.controller';
import { PengurangKompetenKinerjaService } from './pengurang-kompeten-kinerja.service';

describe('PengurangKompetenKinerjaController', () => {
  let controller: PengurangKompetenKinerjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PengurangKompetenKinerjaController],
      providers: [PengurangKompetenKinerjaService],
    }).compile();

    controller = module.get<PengurangKompetenKinerjaController>(PengurangKompetenKinerjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
