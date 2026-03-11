import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('alasan_keluar')

export class AlasanKeluar {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  deskripsi: string;
}
