import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PresensiKhusus } from './entities/presensi-khusus.entity';
import { CreatePresensiKhususDto } from './dto/create-presensi-khusus.dto';
import { UpdatePresensiKhususDto } from './dto/update-presensi-khusus.dto';


@Injectable()
export class PresensiKhususService {
  constructor(
    @InjectRepository(PresensiKhusus) 
    private readonly presensiKhususRepository: Repository<PresensiKhusus>,
  ) {}

  // 1. Create 
  async create(createDto: CreatePresensiKhususDto) {
    const dataBaru = this.presensiKhususRepository.create(createDto);
    return await this.presensiKhususRepository.save(dataBaru);
  }

  // 2. FindAll
  async findAll() {
    return await this.presensiKhususRepository.find({
      relations: ['periode'],
      order: { tanggal: 'ASC' }
    });
  }

  // 3. FindOne - 
  async findOne(id: number) {
    const data = await this.presensiKhususRepository.findOne({
      where: { id },
      relations: ['periode'],
    });

    if (!data) {
      throw new NotFoundException(`Detail Presensi dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // 4. Update 
  async update(id: number, updateDto: UpdatePresensiKhususDto) {
    const data = await this.findOne(id);
    Object.assign(data, updateDto);
    return await this.presensiKhususRepository.save(data);
  }

  // 5. Remove 
  async remove(id: number) {
    const data = await this.findOne(id);
    await this.presensiKhususRepository.remove(data);
    return { message: `Data absen berhasil dihapus` };
  }
}