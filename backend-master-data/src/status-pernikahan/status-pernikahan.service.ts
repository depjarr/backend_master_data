import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusPernikahan } from './entities/status-pernikahan.entity';
import { CreateStatusPernikahanDto } from './dto/create-status-pernikahan.dto';
import { UpdateStatusPernikahanDto } from './dto/update-status-pernikahan.dto';

@Injectable()
export class StatusPernikahanService {
  constructor(
    @InjectRepository(StatusPernikahan)
    private readonly statusPernikahanRepository: Repository<StatusPernikahan>,
  ) {}

  async create(createDto: CreateStatusPernikahanDto) {
    const newStatus = this.statusPernikahanRepository.create(createDto);
    return await this.statusPernikahanRepository.save(newStatus);
  }

  async findAll() {
    return await this.statusPernikahanRepository.find();
  }

  async findOne(id: number) {
    const status = await this.statusPernikahanRepository.findOneBy({ id });
    if (!status) throw new NotFoundException(`Status Pernikahan dengan ID ${id} tidak ditemukan`);
    return status;
  }

  async update(id: number, updateDto: UpdateStatusPernikahanDto) {
    const status = await this.findOne(id); 
    
    Object.assign(status, updateDto);
    
    return await this.statusPernikahanRepository.save(status);
  }

  async remove(id: number) {
    const status = await this.findOne(id);
    await this.statusPernikahanRepository.remove(status);
    return { message: `Status dengan ID ${id} berhasil dihapus` };
  }
}