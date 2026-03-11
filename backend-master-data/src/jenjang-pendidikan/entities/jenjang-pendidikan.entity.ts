import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity('jenjang_pendidikan')

export class JenjangPendidikan {
  @PrimaryGeneratedColumn()
  idjenjangpendidikan: number;

  @Column()
  deskripsi: string;

  @Column({ type: 'int', nullable: true })
  urutan: number | null;

  @OneToMany(() => User, (user) => user.pendidikan)
  users: User[];
}
