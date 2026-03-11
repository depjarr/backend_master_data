import { Module } from '@nestjs/common';
import { JenisDokumenService } from './jenis-dokumen.service';
import { JenisDokumenController } from './jenis-dokumen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JenisDokumen } from './entities/jenis-dokuman.entity';

@Module({
  controllers: [JenisDokumenController],
  providers: [JenisDokumenService],
  imports: [TypeOrmModule.forFeature([JenisDokumen])],
  exports: [JenisDokumenService],
})
export class JenisDokumenModule {}
