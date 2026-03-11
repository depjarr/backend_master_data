import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity('status_pernikahan')
export class StatusPernikahan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  deskripsi: string; 

  @OneToMany(() => User, (user) => user.statusPernikahan)
  users: User[];
}