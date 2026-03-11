import { Module } from '@nestjs/common';
import { JenjangPendidikanService } from './jenjang-pendidikan.service';
import { JenjangPendidikanController } from './jenjang-pendidikan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JenjangPendidikan } from './entities/jenjang-pendidikan.entity'; 

@Module({
  controllers: [JenjangPendidikanController],
  providers: [JenjangPendidikanService],
  imports: [TypeOrmModule.forFeature([JenjangPendidikan])],
  exports: [JenjangPendidikanService],
})
export class JenjangPendidikanModule {}
