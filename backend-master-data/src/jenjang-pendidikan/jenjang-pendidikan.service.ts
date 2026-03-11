import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JenjangPendidikan } from './entities/jenjang-pendidikan.entity';
import { CreateJenjangPendidikanDto } from './dto/create-jenjang-pendidikan.dto';
import { UpdateJenjangPendidikanDto } from './dto/update-jenjang-pendidikan.dto';

@Injectable()
export class JenjangPendidikanService {
  constructor(
    @InjectRepository(JenjangPendidikan)
    private readonly jenjangRepository: Repository<JenjangPendidikan>,
  ) {}

  async create(createDto: CreateJenjangPendidikanDto) {
    const newJenjang = this.jenjangRepository.create(createDto as any);
    return await this.jenjangRepository.save(newJenjang);
  }

  async findAll() {
    return await this.jenjangRepository.find({
      order: { urutan: 'ASC' },
    });
  }

  async findOne(id: number) {
    const jenjang = await this.jenjangRepository.findOneBy({ 
      idjenjangpendidikan: id 
    } as any);

    if (!jenjang) {
      throw new NotFoundException(`Jenjang Pendidikan dengan ID ${id} tidak ditemukan`);
    }
    return jenjang;
  }

  async update(id: number, updateDto: UpdateJenjangPendidikanDto) {
    const jenjang = await this.findOne(id); 
    
    Object.assign(jenjang, updateDto);
    return await this.jenjangRepository.save(jenjang);
  }

  async remove(id: number) {
    const jenjang = await this.findOne(id);
    await this.jenjangRepository.remove(jenjang);
    return { message: `Jenjang Pendidikan dengan ID ${id} berhasil dihapus` };
  }
}