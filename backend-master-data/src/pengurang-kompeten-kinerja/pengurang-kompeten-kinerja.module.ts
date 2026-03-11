import { Module } from '@nestjs/common';
import { PengurangKompetenKinerjaService } from './pengurang-kompeten-kinerja.service';
import { PengurangKompetenKinerjaController } from './pengurang-kompeten-kinerja.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PengurangKompetenKinerja } from './entities/pengurang-kompeten-kinerja.entity';

@Module({
  controllers: [PengurangKompetenKinerjaController],
  providers: [PengurangKompetenKinerjaService],
  imports: [TypeOrmModule.forFeature([PengurangKompetenKinerja])],
  exports: [PengurangKompetenKinerjaService],
})
export class PengurangKompetenKinerjaModule {}
