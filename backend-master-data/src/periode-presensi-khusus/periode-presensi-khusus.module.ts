import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodePresensiKhususService } from './periode-presensi-khusus.service';
import { PeriodePresensiKhususController } from './periode-presensi-khusus.controller';
import { PeriodePresensiKhusus } from './entities/periode-presensi-khusus.entity'; // Pastikan import entity yang benar

@Module({
  imports: [
    // Ini adalah kunci agar Repository bisa terbaca di Service
    TypeOrmModule.forFeature([PeriodePresensiKhusus]), 
  ],
  controllers: [PeriodePresensiKhususController],
  providers: [PeriodePresensiKhususService],
  exports: [PeriodePresensiKhususService], // Tambahkan ini agar bisa dipakai module lain jika perlu
})
export class PeriodePresensiKhususModule {}