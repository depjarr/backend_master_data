import { Module } from '@nestjs/common';
import { AlasanKeluarService } from './alasan-keluar.service';
import { AlasanKeluarController } from './alasan-keluar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlasanKeluar } from './entities/alasan-keluar.entity';

@Module({
  controllers: [AlasanKeluarController],
  providers: [AlasanKeluarService],
  imports: [TypeOrmModule.forFeature([AlasanKeluar])],
  exports: [AlasanKeluarService],
})
export class AlasanKeluarModule {}
