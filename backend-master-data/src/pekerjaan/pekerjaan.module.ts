import { Module } from '@nestjs/common';
import { PekerjaanService } from './pekerjaan.service';
import { PekerjaanController } from './pekerjaan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pekerjaan } from './entities/pekerjaan.entity';

@Module({
  controllers: [PekerjaanController],
  providers: [PekerjaanService],
  imports: [TypeOrmModule.forFeature([Pekerjaan])],
  exports: [PekerjaanService],
})
export class PekerjaanModule {}
