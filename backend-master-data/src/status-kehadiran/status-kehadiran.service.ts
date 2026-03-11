import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusKehadiran } from './entities/status-kehadiran.entity';
import { CreateStatusKehadiranDto } from './dto/create-status-kehadiran.dto';
import { UpdateStatusKehadiranDto } from './dto/update-status-kehadiran.dto';

@Injectable()
export class StatusKehadiranService {
  constructor(
    @InjectRepository(StatusKehadiran)
    private readonly statusKehadiranRepository: Repository<StatusKehadiran>,
  ) {}

  async create(createStatusKehadiranDto: CreateStatusKehadiranDto) {
    // create() membuat instance entity, save() menyimpannya ke database
    const status = this.statusKehadiranRepository.create(createStatusKehadiranDto);
    return await this.statusKehadiranRepository.save(status);
  }

  async findAll() {
    return await this.statusKehadiranRepository.find();
  }

  async findOne(id: number) {
    const status = await this.statusKehadiranRepository.findOneBy({ id });
    if (!status) {
      throw new NotFoundException(`Status Kehadiran dengan ID ${id} tidak ditemukan`);
    }
    return status;
  }

  async update(id: number, updateStatusKehadiranDto: UpdateStatusKehadiranDto) {
    // Kita panggil findOne() dulu untuk validasi apakah datanya ada
    const status = await this.findOne(id);
    
    // Object.assign akan menimpa field yang dikirim di DTO ke entity status
    Object.assign(status, updateStatusKehadiranDto);
    
    return await this.statusKehadiranRepository.save(status);
  }

  async remove(id: number) {
    const status = await this.findOne(id);
    return await this.statusKehadiranRepository.remove(status);
  }
}