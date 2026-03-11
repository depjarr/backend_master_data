import { Test, TestingModule } from '@nestjs/testing';
import { KategoriPeringatanController } from './kategori-peringatan.controller';
import { KategoriPeringatanService } from './kategori-peringatan.service';

describe('KategoriPeringatanController', () => {
  let controller: KategoriPeringatanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KategoriPeringatanController],
      providers: [KategoriPeringatanService],
    }).compile();

    controller = module.get<KategoriPeringatanController>(KategoriPeringatanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
