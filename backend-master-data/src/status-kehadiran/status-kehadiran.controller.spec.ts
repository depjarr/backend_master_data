import { Test, TestingModule } from '@nestjs/testing';
import { StatusKehadiranController } from './status-kehadiran.controller';
import { StatusKehadiranService } from './status-kehadiran.service';

describe('StatusKehadiranController', () => {
  let controller: StatusKehadiranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusKehadiranController],
      providers: [StatusKehadiranService],
    }).compile();

    controller = module.get<StatusKehadiranController>(StatusKehadiranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
