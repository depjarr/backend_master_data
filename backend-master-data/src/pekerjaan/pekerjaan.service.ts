import { Injectable } from '@nestjs/common';
import { CreatePekerjaanDto } from './dto/create-pekerjaan.dto';
import { UpdatePekerjaanDto } from './dto/update-pekerjaan.dto';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Pekerjaan } from './entities/pekerjaan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PekerjaanService {
  constructor(
    @InjectRepository(Pekerjaan)
    private pekerjaanRepository: Repository<Pekerjaan>,
  ) {}

  // create new pekerjaan
  async create(createPekerjaanDto: CreatePekerjaanDto) {
    const newPekerjaan = this.pekerjaanRepository.create(createPekerjaanDto as any);
    return await this.pekerjaanRepository.save(newPekerjaan);
  }

  // get all pekerjaan
  async findAll() {
    return await this.pekerjaanRepository.find();
  }

  // get pekerjaan by id
  async findOne(id: number) {
    const pekerjaan = await this.pekerjaanRepository.findOneBy({ idpekerjaan: id });
    if (!pekerjaan) {
      throw new Error(`Pekerjaan dengan ID ${id} tidak ditemukan`);
    }
    return pekerjaan;
  }

  // update pekerjaan
  async update(id: number, updatePekerjaanDto: UpdatePekerjaanDto) {
    const pekerjaan = await this.findOne(id);
    Object.assign(pekerjaan, updatePekerjaanDto);
    return await this.pekerjaanRepository.save(pekerjaan);
  }

  // delete pekerjaan
  async remove(id: number) {
    const pekerjaan = await this.findOne(id);
    await this.pekerjaanRepository.remove(pekerjaan);
    return { message: `Pekerjaan dengan ID ${id} berhasil dihapus` };
  }
}