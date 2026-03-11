import { Test, TestingModule } from '@nestjs/testing';
import { MataUangController } from './mata-uang.controller';
import { MataUangService } from './mata-uang.service';

describe('MataUangController', () => {
  let controller: MataUangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MataUangController],
      providers: [MataUangService],
    }).compile();

    controller = module.get<MataUangController>(MataUangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
