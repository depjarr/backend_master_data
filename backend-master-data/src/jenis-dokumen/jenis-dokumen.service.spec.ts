import { Test, TestingModule } from '@nestjs/testing';
import { JenisDokumenService } from './jenis-dokumen.service';

describe('JenisDokumenService', () => {
  let service: JenisDokumenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisDokumenService],
    }).compile();

    service = module.get<JenisDokumenService>(JenisDokumenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
