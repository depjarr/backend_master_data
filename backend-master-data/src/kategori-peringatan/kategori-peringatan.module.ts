import { Module } from '@nestjs/common';
import { KategoriPeringatanService } from './kategori-peringatan.service';
import { KategoriPeringatanController } from './kategori-peringatan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KategoriPeringatan } from './entities/kategori-peringatan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KategoriPeringatan])],
  controllers: [KategoriPeringatanController],
  providers: [KategoriPeringatanService],
  exports: [KategoriPeringatanService],
})
export class KategoriPeringatanModule {}

