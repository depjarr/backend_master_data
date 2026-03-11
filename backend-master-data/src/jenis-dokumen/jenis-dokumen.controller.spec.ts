import { Test, TestingModule } from '@nestjs/testing';
import { JenisDokumenController } from './jenis-dokumen.controller';
import { JenisDokumenService } from './jenis-dokumen.service';

describe('JenisDokumenController', () => {
  let controller: JenisDokumenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JenisDokumenController],
      providers: [JenisDokumenService],
    }).compile();

    controller = module.get<JenisDokumenController>(JenisDokumenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
