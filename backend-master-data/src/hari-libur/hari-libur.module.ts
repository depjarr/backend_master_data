import { Module } from '@nestjs/common';
import { HariLiburService } from './hari-libur.service';
import { HariLiburController } from './hari-libur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HariLibur } from './entities/hari-libur.entity';


@Module({
  controllers: [HariLiburController],
  providers: [HariLiburService],
  imports: [TypeOrmModule.forFeature([HariLibur])],
  exports: [HariLiburService],
})
export class HariLiburModule {}
