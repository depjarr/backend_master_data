import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { StatusPernikahanService } from './status-pernikahan.service';
import { StatusPernikahanController } from './status-pernikahan.controller';
import { StatusPernikahan } from './entities/status-pernikahan.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([StatusPernikahan])], 
  controllers: [StatusPernikahanController],
  providers: [StatusPernikahanService],
  exports: [TypeOrmModule] 
})
export class StatusPernikahanModule {}