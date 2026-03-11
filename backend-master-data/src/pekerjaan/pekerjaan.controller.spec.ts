import { Test, TestingModule } from '@nestjs/testing';
import { PekerjaanController } from './pekerjaan.controller';
import { PekerjaanService } from './pekerjaan.service';

describe('PekerjaanController', () => {
  let controller: PekerjaanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PekerjaanController],
      providers: [PekerjaanService],
    }).compile();

    controller = module.get<PekerjaanController>(PekerjaanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
