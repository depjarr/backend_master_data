import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('master_mata_uang')
export class MataUang {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 5 })
  kode: string; 

  @Column({length: 100})
  nama: string; 

  @Column({length: 10})
  simbol: string; 

  @Column({ type: 'boolean', default: false })
  default_kurs: boolean; 
}