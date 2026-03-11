import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeriodePresensiKhusus } from './entities/periode-presensi-khusus.entity';
import { CreatePeriodePresensiKhususDto } from './dto/create-periode-presensi-khusus.dto';
import { UpdatePeriodePresensiKhususDto } from './dto/update-periode-presensi-khusus.dto';

@Injectable()
export class PeriodePresensiKhususService {
  constructor(
    @InjectRepository(PeriodePresensiKhusus)
    private readonly repository: Repository<PeriodePresensiKhusus>,
  ) {}

  // Create - Simpan tahun baru
  async create(createDto: CreatePeriodePresensiKhususDto) {
    const baru = this.repository.create(createDto);
    return await this.repository.save(baru);
  }

  // FindAll - Sekarang si Emak bisa lihat daftar Anaknya
  async findAll() {
    return await this.repository.find({
      relations: {
        presensi_khusus: true, // Pastikan nama ini sama dengan variabel di Entity Emak
      },
      order: { tahun: 'DESC' },
    });
  }

  // FindOne - Cari satu periode beserta isinya
  async findOne(id: number) {
    const data = await this.repository.findOne({
      where: { id },
      relations: ['presensi_khusus'],
    });

    if (!data) {
      throw new NotFoundException(`Periode dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // Update
  async update(id: number, updateDto: UpdatePeriodePresensiKhususDto) {
    const data = await this.findOne(id);
    Object.assign(data, updateDto);
    return await this.repository.save(data);
  }

  // Remove
  async remove(id: number) {
    const data = await this.findOne(id);
    return await this.repository.remove(data);
  }
}