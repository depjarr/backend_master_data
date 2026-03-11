import { Test, TestingModule } from '@nestjs/testing';
import { JenjangPendidikanController } from './jenjang-pendidikan.controller';
import { JenjangPendidikanService } from './jenjang-pendidikan.service';

describe('JenjangPendidikanController', () => {
  let controller: JenjangPendidikanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JenjangPendidikanController],
      providers: [JenjangPendidikanService],
    }).compile();

    controller = module.get<JenjangPendidikanController>(JenjangPendidikanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
