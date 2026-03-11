import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlasanKeluar } from './entities/alasan-keluar.entity';
import { CreateAlasanKeluarDto } from './dto/create-alasan-keluar.dto';
import { UpdateAlasanKeluarDto } from './dto/update-alasan-keluar.dto';

@Injectable()
export class AlasanKeluarService {
  constructor(
    @InjectRepository(AlasanKeluar)
    private readonly alasanRepository: Repository<AlasanKeluar>,
  ) {}

  // CREATE: Menyimpan alasan baru
  async create(createDto: CreateAlasanKeluarDto) {
    const newAlasan = this.alasanRepository.create(createDto as any);
    return await this.alasanRepository.save(newAlasan);
  }

  // READ ALL: Untuk isi dropdown di Frontend
  async findAll() {
    return await this.alasanRepository.find();
  }

  // READ ONE
  async findOne(id: number) {
    const alasan = await this.alasanRepository.findOneBy({ id });
    if (!alasan) throw new NotFoundException(`Alasan Keluar ID ${id} tidak ditemukan`);
    return alasan;
  }

  // UPDATE
  async update(id: number, updateDto: UpdateAlasanKeluarDto) {
    const alasan = await this.findOne(id);
    Object.assign(alasan, updateDto);
    return await this.alasanRepository.save(alasan);
  }

  // DELETE
  async remove(id: number) {
    const alasan = await this.findOne(id);
    await this.alasanRepository.remove(alasan);
    return { 
      message: `Alasan Keluar ID ${id} berhasil dihapus` 
    };
  }
}