import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatriksKaryawan } from './entities/matriks_karyawan.entity';
import { CreateMatriksKaryawanDto } from './dto/create-matriks_karyawan.dto';
import { UpdateMatriksKaryawanDto } from './dto/update-matriks_karyawan.dto';

@Injectable()
export class MatriksKaryawanService {
  constructor(
    @InjectRepository(MatriksKaryawan)
    private readonly matriksRepo: Repository<MatriksKaryawan>,
  ) {}

  // 1. Create
  async create(dto: CreateMatriksKaryawanDto) {
    const newEntry = this.matriksRepo.create(dto);
    return await this.matriksRepo.save(newEntry);
  }

  // 2. Find All
  async findAll() {
    return await this.matriksRepo.find({
      order: { id_karyawan: 'ASC' }, 
    });
  }

  // 3. Find One
  async findOne(id: number) {
    const data = await this.matriksRepo.findOne({ 
      where: { id_karyawan: id } 
    });
    
    if (!data) {
      throw new NotFoundException(`Data Matriks Karyawan dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // 4. Update
  async update(id: number, dto: UpdateMatriksKaryawanDto) {
    const target = await this.findOne(id);
    
    const updatedData = this.matriksRepo.merge(target, dto);
  
    return await this.matriksRepo.save(updatedData);
  }

  // 5. Remove
  async remove(id: number) {
    const data = await this.findOne(id);
    return await this.matriksRepo.remove(data);
  }
}