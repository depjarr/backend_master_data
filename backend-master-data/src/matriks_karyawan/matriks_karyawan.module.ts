import { Module } from '@nestjs/common';
import { MatriksKaryawanService } from './matriks_karyawan.service';
import { MatriksKaryawanController } from './matriks_karyawan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriksKaryawan } from './entities/matriks_karyawan.entity';

@Module({
  controllers: [MatriksKaryawanController],
  providers: [MatriksKaryawanService],
  imports: [TypeOrmModule.forFeature([MatriksKaryawan])],
  exports: [MatriksKaryawanService],
})
export class MatriksKaryawanModule {}
