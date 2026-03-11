import { Test, TestingModule } from '@nestjs/testing';
import { StatusPernikahanController } from './status-pernikahan.controller';
import { StatusPernikahanService } from './status-pernikahan.service';

describe('StatusPernikahanController', () => {
  let controller: StatusPernikahanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusPernikahanController],
      providers: [StatusPernikahanService],
    }).compile();

    controller = module.get<StatusPernikahanController>(StatusPernikahanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
