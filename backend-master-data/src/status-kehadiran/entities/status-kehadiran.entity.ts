import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity('status_kehadiran')
export class StatusKehadiran {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string; 
}