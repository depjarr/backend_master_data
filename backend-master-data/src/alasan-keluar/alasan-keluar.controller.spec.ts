import { Test, TestingModule } from '@nestjs/testing';
import { AlasanKeluarController } from './alasan-keluar.controller';
import { AlasanKeluarService } from './alasan-keluar.service';

describe('AlasanKeluarController', () => {
  let controller: AlasanKeluarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlasanKeluarController],
      providers: [AlasanKeluarService],
    }).compile();

    controller = module.get<AlasanKeluarController>(AlasanKeluarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
