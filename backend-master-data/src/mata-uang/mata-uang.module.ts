import { Module } from '@nestjs/common';
import { MataUangService } from './mata-uang.service';
import { MataUangController } from './mata-uang.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MataUang } from './entities/mata-uang.entity';

@Module({
  controllers: [MataUangController],
  providers: [MataUangService],
  imports: [TypeOrmModule.forFeature([MataUang])],
  exports: [MataUangService],
})
export class MataUangModule {}
