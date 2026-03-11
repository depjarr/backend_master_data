import { Test, TestingModule } from '@nestjs/testing';
import { PengurangKompetenKinerjaService } from './pengurang-kompeten-kinerja.service';

describe('PengurangKompetenKinerjaService', () => {
  let service: PengurangKompetenKinerjaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PengurangKompetenKinerjaService],
    }).compile();

    service = module.get<PengurangKompetenKinerjaService>(PengurangKompetenKinerjaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
