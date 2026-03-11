import { Test, TestingModule } from '@nestjs/testing';
import { JenjangPendidikanService } from './jenjang-pendidikan.service';

describe('JenjangPendidikanService', () => {
  let service: JenjangPendidikanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenjangPendidikanService],
    }).compile();

    service = module.get<JenjangPendidikanService>(JenjangPendidikanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
