import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgamaService } from './agama.service';
import { AgamaController } from './agama.controller';
import { Agama } from './entity/agama.entity';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Agama])
  ],
  providers: [AgamaService],
  controllers: [AgamaController],
  exports: [AgamaService],
})
export class AgamaModule {}