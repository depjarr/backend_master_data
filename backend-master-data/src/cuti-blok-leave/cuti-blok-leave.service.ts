import { Injectable } from '@nestjs/common';
import { CreateCutiBlokLeaveDto } from './dto/create-cuti-blok-leave.dto';
import { UpdateCutiBlokLeaveDto } from './dto/update-cuti-blok-leave.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CutiBlokLeave } from './entities/cuti-blok-leave.entity';

@Injectable()
export class CutiBlokLeaveService {
  constructor(
    @InjectRepository(CutiBlokLeave)
    private readonly cutiBlokLeaveRepository: Repository<CutiBlokLeave>,
  ) {}

  // create
  async create(createCutiBlokLeaveDto: CreateCutiBlokLeaveDto) {
    return await this.cutiBlokLeaveRepository.save(createCutiBlokLeaveDto);
  }

  // find all
  async findAll() {
    return await this.cutiBlokLeaveRepository.find();
  }

  // find one by id
  async findOne(id: number) {
    return await this.cutiBlokLeaveRepository.findOne({ 
      where: { id }
    });
  }

  // update
  async update(id: number, updateCutiBlokLeaveDto: UpdateCutiBlokLeaveDto) {
  // Cek dulu datanya ada apa gak
  await this.findOne(id); 
  
  await this.cutiBlokLeaveRepository.update(id, updateCutiBlokLeaveDto);
  return this.findOne(id);
}

  // remove
  async remove(id: number) {
    return await this.cutiBlokLeaveRepository.delete(id);
  }
}