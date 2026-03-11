import { Module } from '@nestjs/common';
import { PeriodeLiburService } from './periode-libur.service';
import { PeriodeLiburController } from './periode-libur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodeLibur } from './entities/periode-libur.entity';

@Module({
  controllers: [PeriodeLiburController],
  providers: [PeriodeLiburService],
  imports: [TypeOrmModule.forFeature([PeriodeLibur])],
  exports: [PeriodeLiburService],
})
export class PeriodeLiburModule {}
