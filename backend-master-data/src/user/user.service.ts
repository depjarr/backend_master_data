import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 1. FindOne dengan Relations
  async findOne(id: number) {
    const user = await this.userRepository.findOne({ 
      where: { id },
      relations: ['agama', 'statusPernikahan', 'pekerjaan', 'pendidikan'] 
    });
    
    if (!user) throw new NotFoundException(`User dengan ID ${id} tidak ditemukan`);
    return user;
  }

  // 2. Create User
  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const userToCreate = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
      agama: createUserDto.agama_id ? { id: createUserDto.agama_id } : null,
      statusPernikahan: createUserDto.status_pernikahan_id ? { id: createUserDto.status_pernikahan_id } : null,
      // MAPPING DISESUAIKAN DENGAN DB:
      pekerjaan: createUserDto.pekerjaan_id ? { idpekerjaan: createUserDto.pekerjaan_id } : null,
      pendidikan: createUserDto.jenjang_pendidikan_id ? { idjenjangpendidikan: createUserDto.jenjang_pendidikan_id } : null,
    } as any);

    try {
      const savedUser = await this.userRepository.save(userToCreate);
      const savedId = (savedUser as any).id;
      return await this.findOne(savedId); 
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('Data sudah digunakan');
      throw new InternalServerErrorException('Gagal membuat user baru');
    }
  }

  // 3. Update User (Bagian Perbaikan Utama)
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    // Update field string biasa
    if (updateUserDto.username) user.username = updateUserDto.username;
    if (updateUserDto.nama) user.nama = updateUserDto.nama;
    if (updateUserDto.email) user.email = updateUserDto.email;

    // UPDATE RELASI (Sesuaikan dengan nama ID di database kamu)
    
    // Pekerjaan menggunakan 'idpekerjaan'
    if (updateUserDto.pekerjaan_id) {
      user.pekerjaan = { idpekerjaan: updateUserDto.pekerjaan_id } as any;
    }
    
    // Pendidikan menggunakan 'idjenjangpendidikan'
    if (updateUserDto.jenjang_pendidikan_id) {
      user.pendidikan = { idjenjangpendidikan: updateUserDto.jenjang_pendidikan_id } as any;
    }

    // Agama & Status Pernikahan tetap menggunakan 'id' (silakan cek lagi jika berbeda)
    if (updateUserDto.agama_id) {
      user.agama = { id: updateUserDto.agama_id } as any;
    }

    if (updateUserDto.status_pernikahan_id) {
      user.statusPernikahan = { id: updateUserDto.status_pernikahan_id } as any;
    }

    try {
      await this.userRepository.save(user);
      return await this.findOne(id);
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('Data sudah digunakan');
      throw new InternalServerErrorException('Gagal memperbarui data user');
    }
  }

  async findAll() {
    return await this.userRepository.find({
      relations: ['agama', 'statusPernikahan', 'pekerjaan', 'pendidikan']
    });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
    return { message: `User dengan ID ${id} berhasil dihapus` };
  }
}