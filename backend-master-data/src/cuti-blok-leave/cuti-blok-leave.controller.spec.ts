import { Test, TestingModule } from '@nestjs/testing';
import { CutiBlokLeaveController } from './cuti-blok-leave.controller';
import { CutiBlokLeaveService } from './cuti-blok-leave.service';

describe('CutiBlokLeaveController', () => {
  let controller: CutiBlokLeaveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutiBlokLeaveController],
      providers: [CutiBlokLeaveService],
    }).compile();

    controller = module.get<CutiBlokLeaveController>(CutiBlokLeaveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
