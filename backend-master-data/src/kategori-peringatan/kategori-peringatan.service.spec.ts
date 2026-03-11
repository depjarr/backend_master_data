import { Test, TestingModule } from '@nestjs/testing';
import { KategoriPeringatanService } from './kategori-peringatan.service';

describe('KategoriPeringatanService', () => {
  let service: KategoriPeringatanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KategoriPeringatanService],
    }).compile();

    service = module.get<KategoriPeringatanService>(KategoriPeringatanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
