import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { HariLibur } from '../../hari-libur/entities/hari-libur.entity';

@Entity('master_periode_libur')
export class PeriodeLibur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true }) 
  tahun: number;

  @Column({ length: 255, nullable: true })
  deskripsi: string;

  @OneToMany(() => HariLibur, (hariLibur) => hariLibur.periode)
  hari_libur: HariLibur[];
}