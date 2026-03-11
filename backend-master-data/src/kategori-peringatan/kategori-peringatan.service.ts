import { Injectable } from '@nestjs/common';
import { CreateKategoriPeringatanDto } from './dto/create-kategori-peringatan.dto';
import { UpdateKategoriPeringatanDto } from './dto/update-kategori-peringatan.dto';
import { KategoriPeringatan } from './entities/kategori-peringatan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KategoriPeringatanService {
  constructor(
    @InjectRepository(KategoriPeringatan)
    private kategoriPeringatanRepository: Repository<KategoriPeringatan>,
  ) {}

  // Create
  async create(createKategoriPeringatanDto: CreateKategoriPeringatanDto) {
    const newData = this.kategoriPeringatanRepository.create(createKategoriPeringatanDto);
    return await this.kategoriPeringatanRepository.save(newData);
  }

  // FindAll
  async findAll() {
    return await this.kategoriPeringatanRepository.find({
      relations: ['pengurangKompetenKinerja'],
    });
  }

  // FindOne
  async findOne(id: number) {
    return await this.kategoriPeringatanRepository.findOne({
      where: { id },
      relations: ['pengurangKompetenKinerja'],
    });
  }

  // Update

  async update(id: number, updateKategoriPeringatanDto: UpdateKategoriPeringatanDto) {
    await this.kategoriPeringatanRepository.update(id, updateKategoriPeringatanDto);
    return this.findOne(id);
  }

  // Remove
  
  async remove(id: number) {
    return await this.kategoriPeringatanRepository.delete(id);
  }
}