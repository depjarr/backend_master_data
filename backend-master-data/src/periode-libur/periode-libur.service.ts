import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreatePeriodeLiburDto } from './dto/create-periode-libur.dto';
import { UpdatePeriodeLiburDto } from './dto/update-periode-libur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeriodeLibur } from './entities/periode-libur.entity';

@Injectable()
export class PeriodeLiburService {
  constructor(
    @InjectRepository(PeriodeLibur)
    private readonly periodeLiburRepository: Repository<PeriodeLibur>,
  ) {}

  // create
  async create(createPeriodeLiburDto: CreatePeriodeLiburDto) {
    const existing = await this.periodeLiburRepository.findOneBy({ 
      tahun: createPeriodeLiburDto.tahun 
    });
    
    if (existing) {
      throw new ConflictException(`Periode tahun ${createPeriodeLiburDto.tahun} sudah ada`);
    }

    const periodeLibur = this.periodeLiburRepository.create(createPeriodeLiburDto);
    return await this.periodeLiburRepository.save(periodeLibur);
  }

  // read - SEKARANG BISA LIHAT ANAKNYA
  async findAll() {
    return await this.periodeLiburRepository.find({
      relations: {
        hari_libur: true, // Memanggil array 'hari_libur' dari Entity Emak
      },
      order: { tahun: 'DESC' } 
    });
  }

  // read by id - SEKARANG BISA LIHAT ANAKNYA
  async findOne(id: number) {
    // Gunakan findOne dengan objek findOptions agar bisa pakai relations
    const data = await this.periodeLiburRepository.findOne({ 
        where: { id },
        relations: ['hari_libur'] 
    });

    if (!data) {
      throw new NotFoundException(`Periode Libur dengan ID ${id} tidak ditemukan`);
    }
    return data;
  }

  // update
  async update(id: number, updatePeriodeLiburDto: UpdatePeriodeLiburDto) {
    const periodeLibur = await this.findOne(id);
    
    Object.assign(periodeLibur, updatePeriodeLiburDto);
    return await this.periodeLiburRepository.save(periodeLibur);
  }

  // remove
  async remove(id: number) {
    const periodeLibur = await this.findOne(id);
    await this.periodeLiburRepository.remove(periodeLibur);
    return { message: `Periode Libur dengan ID ${id} berhasil dihapus` };
  }
}