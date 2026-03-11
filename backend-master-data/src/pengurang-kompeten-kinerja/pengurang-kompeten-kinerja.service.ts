import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePengurangKompetenKinerjaDto } from './dto/create-pengurang-kompeten-kinerja.dto';
import { UpdatePengurangKompetenKinerjaDto } from './dto/update-pengurang-kompeten-kinerja.dto';
import { PengurangKompetenKinerja } from './entities/pengurang-kompeten-kinerja.entity';

@Injectable()
export class PengurangKompetenKinerjaService {
  constructor(
    @InjectRepository(PengurangKompetenKinerja)
    private readonly repository: Repository<PengurangKompetenKinerja>,
  ) {}

  // Create: Menyimpan data baru ke database
  async create(dto: CreatePengurangKompetenKinerjaDto) {
    const data = this.repository.create(dto);
    return await this.repository.save(data);
  }

  // Find All: Mengambil semua list untuk dropdown
  async findAll() {
    return await this.repository.find();
  }

  // Find One: Mengambil satu data berdasarkan ID
  async findOne(id: number) {
    const data = await this.repository.findOneBy({ id });
    if (!data) throw new NotFoundException(`Data dengan ID ${id} tidak ditemukan`);
    return data;
  }

  // Update: Mengubah data deskripsi master
  async update(id: number, dto: UpdatePengurangKompetenKinerjaDto) {
    await this.findOne(id); // Pastikan data ada dulu
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  // Remove: Menghapus data master
  async remove(id: number) {
    const data = await this.findOne(id);
    return await this.repository.remove(data);
  }
}