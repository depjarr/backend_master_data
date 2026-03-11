import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresensiKhususService } from './presensi-khusus.service';
import { PresensiKhususController } from './presensi-khusus.controller';
import { PresensiKhusus } from './entities/presensi-khusus.entity'; // Pastikan path-nya benar

@Module({
  imports: [
    TypeOrmModule.forFeature([PresensiKhusus]), 
  ],
  controllers: [PresensiKhususController],
  providers: [PresensiKhususService],
})
export class PresensiKhususModule {}