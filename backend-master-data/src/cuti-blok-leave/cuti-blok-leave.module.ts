import { Module } from '@nestjs/common';
import { CutiBlokLeaveService } from './cuti-blok-leave.service';
import { CutiBlokLeaveController } from './cuti-blok-leave.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CutiBlokLeave } from './entities/cuti-blok-leave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CutiBlokLeave])],
  controllers: [CutiBlokLeaveController],
  providers: [CutiBlokLeaveService],
  exports: [CutiBlokLeaveService]
})
export class CutiBlokLeaveModule {}


