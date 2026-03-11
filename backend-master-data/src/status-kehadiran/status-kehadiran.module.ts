import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { StatusKehadiranService } from './status-kehadiran.service';
import { StatusKehadiranController } from './status-kehadiran.controller';
import { StatusKehadiran } from './entities/status-kehadiran.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([StatusKehadiran])
  ],
  controllers: [StatusKehadiranController],
  providers: [StatusKehadiranService],
  exports: [StatusKehadiranService], 
})
export class StatusKehadiranModule {}