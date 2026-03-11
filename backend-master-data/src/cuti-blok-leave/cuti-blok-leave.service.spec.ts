import { Test, TestingModule } from '@nestjs/testing';
import { CutiBlokLeaveService } from './cuti-blok-leave.service';

describe('CutiBlokLeaveService', () => {
  let service: CutiBlokLeaveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CutiBlokLeaveService],
    }).compile();

    service = module.get<CutiBlokLeaveService>(CutiBlokLeaveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
