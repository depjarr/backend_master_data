import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PeriodePresensiKhusus } from '../../periode-presensi-khusus/entities/periode-presensi-khusus.entity';

@Entity('master_presensi_khusus_detail')
export class PresensiKhusus {
  @PrimaryGeneratedColumn({ name: 'id_presensi_detail' })
  id: number;

  @Column({ type: 'date' })
  tanggal: string;

  @Column({ type: 'time', name: 'jam_masuk' })
  jam_masuk: string;

  @Column({ type: 'time', name: 'jam_keluar' })
  jam_keluar: string;

  @Column({ type: 'text', nullable: true })
  keterangan: string;
  
  @Column()
  periodeId: number;

  @ManyToOne(() => PeriodePresensiKhusus, (periode) => periode.presensi_khusus, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'periodeId' })
  periode: PeriodePresensiKhusus;
}