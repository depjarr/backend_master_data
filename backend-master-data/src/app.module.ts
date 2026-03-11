import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgamaModule } from './agama/agama.module';
import { UserModule } from './user/user.module';
import { StatusPernikahanModule } from './status-pernikahan/status-pernikahan.module';
import { StatusModule } from './status/status.module';
import { StatusKehadiranModule } from './status-kehadiran/status-kehadiran.module';
import { AlasanKeluarModule } from './alasan-keluar/alasan-keluar.module';
import { PekerjaanModule } from './pekerjaan/pekerjaan.module';
import { JenjangPendidikanModule } from './jenjang-pendidikan/jenjang-pendidikan.module';
import { MataUangModule } from './mata-uang/mata-uang.module';
import { PeriodeLiburModule } from './periode-libur/periode-libur.module';
import { HariLiburModule } from './hari-libur/hari-libur.module';
import { JenisDokumenModule } from './jenis-dokumen/jenis-dokumen.module';
import { PeriodePresensiKhususModule } from './periode-presensi-khusus/periode-presensi-khusus.module';
import { PresensiKhususModule } from './presensi-khusus/presensi-khusus.module';
import { PengurangKompetenKinerjaModule } from './pengurang-kompeten-kinerja/pengurang-kompeten-kinerja.module';
import { KategoriPeringatanModule } from './kategori-peringatan/kategori-peringatan.module';
import { CutiBlokLeaveModule } from './cuti-blok-leave/cuti-blok-leave.module';
import { MatriksKaryawanModule } from './matriks_karyawan/matriks_karyawan.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433, 
      username: 'postgres',
      database: 'masterdata', 
      autoLoadEntities: true, 
      synchronize: true, 
    }),
    AgamaModule,
    UserModule,
    StatusPernikahanModule,
    StatusModule,
    StatusKehadiranModule,
    AlasanKeluarModule,
    PekerjaanModule,
    JenjangPendidikanModule,
    MataUangModule,
    PeriodeLiburModule,
    HariLiburModule,
    JenisDokumenModule,
    PeriodePresensiKhususModule,
    PresensiKhususModule,
    PengurangKompetenKinerjaModule,
    KategoriPeringatanModule,
    CutiBlokLeaveModule,
    MatriksKaryawanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}