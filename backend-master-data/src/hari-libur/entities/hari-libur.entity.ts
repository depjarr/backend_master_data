import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { PeriodeLibur } from '../../periode-libur/entities/periode-libur.entity';

@Entity('master_hari_libur')
export class HariLibur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' }) 
  tanggal: string;

  @Column({ length: 255, nullable: true })
  keterangan: string;

  @ManyToOne(() => PeriodeLibur, (periode) => periode.hari_libur, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'periodeliburid' }) 
  periode: PeriodeLibur;

  @Column()
    periodeliburid: number;
}