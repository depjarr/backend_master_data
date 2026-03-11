import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { User } from '../../user/entity/user.entity';
@Entity('pekerjaan')        

export class Pekerjaan {
    @PrimaryGeneratedColumn()
    idpekerjaan: number;
    @Column()
    deskripsi: string;
    @OneToMany(() => User, (user) => user.pekerjaan)
    users: User[];
}
