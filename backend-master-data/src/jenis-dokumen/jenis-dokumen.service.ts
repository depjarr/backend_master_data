import { Injectable, NotFoundException } from '@nestjs/common'; // Tambahkan NotFoundException
import { CreateJenisDokumanDto } from './dto/create-jenis-dokuman.dto';
import { UpdateJenisDokumanDto } from './dto/update-jenis-dokuman.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JenisDokumen } from './entities/jenis-dokuman.entity';

@Injectable()
export class JenisDokumenService {
  constructor(
    @InjectRepository(JenisDokumen)
    private readonly jenisDokumenRepository: Repository<JenisDokumen>,
  ) {}

  // Create 
  async create(createJenisDokumenDto: CreateJenisDokumanDto) {
    const jenisDokuman = this.jenisDokumenRepository.create(createJenisDokumenDto);
    return await this.jenisDokumenRepository.save(jenisDokuman);
  }

  // Read all
  async findAll() {
    return await this.jenisDokumenRepository.find();
  }

  // Read one
  async findOne(id: number) {
    const data = await this.jenisDokumenRepository.findOneBy({ id });
    if (!data) {
      throw new NotFoundException(`Jenis Dokumen dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // Update
  async update(id: number, updateJenisDokumanDto: UpdateJenisDokumanDto) {
    const jenisDokuman = await this.findOne(id); 
    Object.assign(jenisDokuman, updateJenisDokumanDto);
    return await this.jenisDokumenRepository.save(jenisDokuman);
  }

  // Delete
  async remove(id: number) {
    const jenisDokuman = await this.findOne(id);
    return await this.jenisDokumenRepository.remove(jenisDokuman);
  } 
}