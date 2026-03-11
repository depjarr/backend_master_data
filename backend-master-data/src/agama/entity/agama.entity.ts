import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../user/entity/user.entity';

@Entity('religions')
export class Agama {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
  
  // 1 agama bisa dimiliki oleh banyak user
  @OneToMany(() => User, (user) => user.agama)
  users: User[];
}