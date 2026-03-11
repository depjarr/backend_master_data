import { Injectable, NotFoundException } from '@nestjs/common'; // Gunakan NotFoundException
import { CreateHariLiburDto } from './dto/create-hari-libur.dto';
import { UpdateHariLiburDto } from './dto/update-hari-libur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HariLibur } from './entities/hari-libur.entity';

@Injectable()
export class HariLiburService {
  constructor(
    @InjectRepository(HariLibur)
    private readonly hariLiburRepository: Repository<HariLibur>,
  ) {}

  async create(createHariLiburDto: CreateHariLiburDto) {
    const hariLibur = this.hariLiburRepository.create(createHariLiburDto);
    return await this.hariLiburRepository.save(hariLibur);
  }

  async findAll() {
    return await this.hariLiburRepository.find({
      relations: ['periode'], 
      order: { tanggal: 'ASC' }
    });
  }

  async findOne(id: number) {
    const data = await this.hariLiburRepository.findOne({
      where: { id },
      relations: ['periode']
    });
    
    if (!data) {
      throw new NotFoundException(`Hari Libur dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  async update(id: number, updateHariLiburDto: UpdateHariLiburDto) {
    const hariLibur = await this.findOne(id); // Otomatis throw error jika tidak ada
    
    Object.assign(hariLibur, updateHariLiburDto);
    return await this.hariLiburRepository.save(hariLibur);
  }

  async remove(id: number) {
    const hariLibur = await this.findOne(id); // Otomatis throw error jika tidak ada
    
    await this.hariLiburRepository.remove(hariLibur);
    return { message: `Hari Libur dengan ID ${id} berhasil dihapus` };
  }
}