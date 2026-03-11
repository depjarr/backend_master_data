import { Test, TestingModule } from '@nestjs/testing';
import { HariLiburController } from './hari-libur.controller';
import { HariLiburService } from './hari-libur.service';

describe('HariLiburController', () => {
  let controller: HariLiburController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HariLiburController],
      providers: [HariLiburService],
    }).compile();

    controller = module.get<HariLiburController>(HariLiburController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
