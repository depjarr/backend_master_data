import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PresensiKhusus } from '../../presensi-khusus/entities/presensi-khusus.entity';

@Entity('master_periode_presensi_khusus')
export class PeriodePresensiKhusus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unique: true })
  tahun: number;

  @OneToMany(() => PresensiKhusus, (presensiKhusus) => presensiKhusus.periode)
  presensi_khusus: PresensiKhusus[];

}