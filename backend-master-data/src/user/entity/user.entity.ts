import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Agama } from '../../agama/entity/agama.entity';
import { StatusPernikahan } from '../../status-pernikahan/entities/status-pernikahan.entity';
import { Pekerjaan } from 'src/pekerjaan/entities/pekerjaan.entity';
import { JenjangPendidikan } from 'src/jenjang-pendidikan/entities/jenjang-pendidikan.entity';

@Entity('users')
export class User {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  nama: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false }) 
  password: string;

  // Relasi ke Master Agama 
  @ManyToOne(() => Agama, (agama) => agama.users, { 
    nullable: true, 
    eager: true
 })
  
  @JoinColumn({ name: 'agama_id' })
  agama: Agama;

  // Relasi ke Status Pernikahan
  @ManyToOne(() => StatusPernikahan, (sp) => sp.users, { 
    nullable: true , 
    eager: true 
  })
  @JoinColumn({ name: 'status_pernikahan_id' })
  statusPernikahan: StatusPernikahan;

  // Relasi ke Pekerjaan
  @ManyToOne(() => Pekerjaan, (pekerjaan) => pekerjaan.users, { 
    nullable: true , 
    eager: true 
  })
  @JoinColumn({ name: 'pekerjaan_id' })
  pekerjaan: Pekerjaan;

  // Relasi ke Jenjang Pendidikan
  @ManyToOne(() => JenjangPendidikan, (jp) => jp.users, { 
    nullable: true , 
    eager: true 
  })
  @JoinColumn({ name: 'jenjang_pendidikan_id' })
  pendidikan: JenjangPendidikan;

}