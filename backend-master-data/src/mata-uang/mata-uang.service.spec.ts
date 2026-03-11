import { Test, TestingModule } from '@nestjs/testing';
import { MataUangService } from './mata-uang.service';

describe('MataUangService', () => {
  let service: MataUangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MataUangService],
    }).compile();

    service = module.get<MataUangService>(MataUangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
