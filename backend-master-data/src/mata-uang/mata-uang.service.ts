import { Injectable, NotFoundException } from '@nestjs/common'; // Tambahkan NotFoundException
import { CreateMataUangDto } from './dto/create-mata-uang.dto';
import { UpdateMataUangDto } from './dto/update-mata-uang.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MataUang } from './entities/mata-uang.entity'; 

@Injectable()
export class MataUangService {
  constructor(
    @InjectRepository(MataUang)
    private mataUangRepository: Repository<MataUang>,
  ) {}

  // create

  async create(createMataUangDto: CreateMataUangDto) {
    const mataUang = this.mataUangRepository.create(createMataUangDto as any);
    return await this.mataUangRepository.save(mataUang);
  }

  // read

  async findAll() {
    return await this.mataUangRepository.find();
  }

  // read by id

  async findOne(id: number) {
    const data = await this.mataUangRepository.findOneBy({ id } as any);
    
    if (!data) {
      throw new NotFoundException(`Mata Uang dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // update

  async update(id: number, updateMataUangDto: UpdateMataUangDto) {
    const mataUang = await this.findOne(id);
    
    Object.assign(mataUang, updateMataUangDto);
    return await this.mataUangRepository.save(mataUang);
  }

  async remove(id: number) {
    const mataUang = await this.findOne(id);
    
    await this.mataUangRepository.remove(mataUang);
    return { message: `Mata Uang dengan ID ${id} berhasil dihapus` };
  }
}