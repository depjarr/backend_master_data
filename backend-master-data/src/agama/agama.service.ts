import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agama } from './entity/agama.entity';
import { CreateAgamaDto } from './dto/create-agama.dto';
import { UpdateAgamaDto } from './dto/update-agama.dto';

@Injectable()
export class AgamaService {
  constructor(
    @InjectRepository(Agama)
    private readonly agamaRepository: Repository<Agama>,
  ) {}

  // Create a new Agama
  async create(createAgamaDto: CreateAgamaDto): Promise<Agama> {
    const newAgama = this.agamaRepository.create(createAgamaDto as any);
    return await this.agamaRepository.save(newAgama) as any; // Tambahkan 'as any' di sini
  }

  // Get all Agama
  async findAll(): Promise<Agama[]> {
    return await this.agamaRepository.find();
  }

  // Get a single Agama by ID

  async findOne(id: number): Promise<Agama> {
    const agama = await this.agamaRepository.findOne({ where: { id } });
    if (!agama) {
      throw new NotFoundException(`Agama dengan ID ${id} tidak ditemukan`);
    }
    return agama;
  }

  async update(id: number, updateAgamaDto: UpdateAgamaDto): Promise<Agama> {
    const agama = await this.findOne(id);
    Object.assign(agama, updateAgamaDto);
    return await this.agamaRepository.save(agama) as any; // Dan di sini
  }

  async remove(id: number): Promise<{ message: string }> {
    const agama = await this.findOne(id);
    await this.agamaRepository.remove(agama);
    return { message: `Agama dengan ID ${id} berhasil dihapus` };
  }
}